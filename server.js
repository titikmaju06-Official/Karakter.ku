const http = require('http');
const path = require('path');
const fs = require('fs');
const os = require('os');
const crypto = require('crypto');

// --- Data Directory & History File Setup ---
const dataDir = path.join(__dirname, 'data');
const historyFile = path.join(dataDir, 'history.json');
const settingsFile = path.join(dataDir, 'settings.json');
const shareSessions = new Map();

const defaultRoleAccess = {
  superadmin: { mbti: true, disc: true, iq: true, wpt: true, bigfive: true, riasec: true, papi: true, cognitive: true, spatial: true, riwayat: true, pengaturan: true },
  owner: { mbti: true, disc: true, iq: true, wpt: true, bigfive: true, riasec: true, papi: true, cognitive: true, spatial: true, riwayat: true, pengaturan: false },
  manager: { mbti: true, disc: true, iq: true, wpt: true, bigfive: true, riasec: true, papi: true, cognitive: true, spatial: true, riwayat: true, pengaturan: false },
  tamu: { mbti: true, disc: true, iq: true, wpt: true, bigfive: true, riasec: true, papi: true, cognitive: true, spatial: true, riwayat: false, pengaturan: false }
};

function ensureDataDir() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(historyFile)) {
    fs.writeFileSync(historyFile, JSON.stringify([], null, 2), 'utf-8');
  }
  if (!fs.existsSync(settingsFile)) {
    fs.writeFileSync(settingsFile, JSON.stringify(defaultRoleAccess, null, 2), 'utf-8');
  }
}

function readJsonFile(filePath, fallbackValue) {
  try {
    ensureDataDir();
    const raw = fs.readFileSync(filePath, 'utf-8');
    const cleanRaw = raw.replace(/^\uFEFF/, '');
    return JSON.parse(cleanRaw);
  } catch (err) {
    return fallbackValue;
  }
}

function writeJsonFile(filePath, value) {
  ensureDataDir();
  fs.writeFileSync(filePath, JSON.stringify(value, null, 2), 'utf-8');
}

function loadHistoryData() {
  return readJsonFile(historyFile, []);
}

function saveHistoryData(data) {
  writeJsonFile(historyFile, data);
  return { success: true };
}

function loadSettingsData() {
  return readJsonFile(settingsFile, null);
}

function saveSettingsData(data) {
  writeJsonFile(settingsFile, data);
  return { success: true };
}

function getGuestAccessPermissions() {
  const settings = loadSettingsData() || {};
  return settings.access?.tamu || settings.tamu || defaultRoleAccess.tamu;
}

function getThemeValue() {
  const settings = loadSettingsData() || {};
  return settings.theme || 'pastel-blue';
}

function getLocalIpAddresses() {
  const networks = os.networkInterfaces();
  const addresses = [];
  Object.values(networks).forEach((items) => {
    (items || []).forEach((item) => {
      if (item && item.family === 'IPv4' && !item.internal) {
        addresses.push(item.address);
      }
    });
  });
  return [...new Set(addresses)];
}

function getPrimaryHost() {
  const addresses = getLocalIpAddresses();
  return addresses[0] || 'localhost';
}

function getContentType(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  const contentTypes = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.png': 'image/png',
    '.json': 'application/json; charset=utf-8'
  };
  return contentTypes[extension] || 'application/octet-stream';
}

function createShareLink(req, sessionId) {
  const host = req.headers.host || `${getPrimaryHost()}:3000`;
  return `http://${host}/?sharedSession=${encodeURIComponent(sessionId)}`;
}

function serializeShareSession(req, session) {
  return {
    id: session.id,
    label: session.label,
    createdAt: session.createdAt,
    active: session.active,
    createdBy: session.createdBy,
    createdByName: session.createdByName,
    submissionCount: session.submissions.length,
    lastSubmissionAt: session.lastSubmissionAt || null,
    link: createShareLink(req, session.id)
  };
}

function buildShareSessionPayload(session) {
  return {
    id: session.id,
    label: session.label,
    active: session.active,
    createdAt: session.createdAt,
    access: session.access || getGuestAccessPermissions(),
    theme: session.theme || getThemeValue()
  };
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 2 * 1024 * 1024) {
        reject(new Error('Payload terlalu besar.'));
        req.destroy();
      }
    });
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  res.end(JSON.stringify(payload));
}

function sendText(res, statusCode, message) {
  res.writeHead(statusCode, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  res.end(message);
}

function serveStaticFile(res, relativeFilePath) {
  const absolutePath = path.join(__dirname, relativeFilePath);

  if (!absolutePath.startsWith(__dirname)) {
    sendText(res, 403, 'Akses file tidak diizinkan.');
    return;
  }

  fs.readFile(absolutePath, (err, data) => {
    if (err) {
      sendText(res, 404, 'File tidak ditemukan.');
      return;
    }
    res.writeHead(200, {
      'Content-Type': getContentType(absolutePath),
      'Cache-Control': 'no-store'
    });
    res.end(data);
  });
}

async function handleShareApiRequest(req, res, pathname) {
  // GET all share sessions
  if (req.method === 'GET' && pathname === '/api/share/sessions') {
    const sessions = [...shareSessions.values()].map(s => serializeShareSession(req, s));
    sendJson(res, 200, { success: true, sessions });
    return true;
  }

  // POST create a new share session
  if (req.method === 'POST' && pathname === '/api/share/sessions') {
    const rawBody = await readRequestBody(req);
    const payload = rawBody ? JSON.parse(rawBody) : {};
    const sessionId = crypto.randomUUID();
    const createdAt = Date.now();
    const label = payload.label || `Sesi Tamu ${new Date(createdAt).toLocaleTimeString('id-ID')}`;

    const session = {
      id: sessionId,
      label,
      createdAt,
      active: true,
      createdBy: payload.createdBy || '',
      createdByName: payload.createdByName || '',
      access: getGuestAccessPermissions(),
      theme: getThemeValue(),
      submissions: [],
      lastSubmissionAt: null
    };

    shareSessions.set(sessionId, session);
    const response = serializeShareSession(req, session);
    sendJson(res, 200, { success: true, session: response });
    return true;
  }

  // Detail endpoints matching session ID
  const sessionDetailMatch = pathname.match(/^\/api\/share\/sessions\/([^/]+)$/);
  if (sessionDetailMatch) {
    const sessionId = decodeURIComponent(sessionDetailMatch[1]);
    const session = shareSessions.get(sessionId);

    if (!session || !session.active) {
      sendJson(res, 404, { success: false, error: 'Sesi tamu tidak ditemukan atau sudah ditutup.' });
      return true;
    }

    if (req.method === 'GET') {
      sendJson(res, 200, { success: true, session: buildShareSessionPayload(session) });
      return true;
    }

    if (req.method === 'DELETE') {
      session.active = false;
      shareSessions.delete(sessionId);
      sendJson(res, 200, { success: true });
      return true;
    }
  }

  // POST guest test results submit
  const sessionSubmitMatch = pathname.match(/^\/api\/share\/sessions\/([^/]+)\/submit$/);
  if (sessionSubmitMatch && req.method === 'POST') {
    const sessionId = decodeURIComponent(sessionSubmitMatch[1]);
    const session = shareSessions.get(sessionId);

    if (!session || !session.active) {
      sendJson(res, 404, { success: false, error: 'Sesi tamu tidak ditemukan atau sudah tidak aktif.' });
      return true;
    }

    const rawBody = await readRequestBody(req);
    const historyItem = rawBody ? JSON.parse(rawBody) : null;

    if (!historyItem) {
      sendJson(res, 400, { success: false, error: 'Data hasil tes tidak lengkap.' });
      return true;
    }

    // Set guest label as author name
    historyItem.name = historyItem.name || session.label;
    historyItem.syncedAt = Date.now();

    // Persist to database
    const history = loadHistoryData();
    history.push(historyItem);
    saveHistoryData(history);

    // Update session submissions
    session.submissions.push(historyItem);
    session.lastSubmissionAt = historyItem.syncedAt;

    sendJson(res, 200, { success: true });
    return true;
  }

  return false;
}

async function handleRequest(req, res) {
  try {
    const requestUrl = new URL(req.url, `http://${req.headers.host || 'localhost:3000'}`);
    const { pathname } = requestUrl;

    // API: History
    if (pathname === '/api/history') {
      if (req.method === 'GET') {
        sendJson(res, 200, loadHistoryData());
      } else if (req.method === 'POST') {
        const body = await readRequestBody(req);
        const data = JSON.parse(body);
        saveHistoryData(data);
        sendJson(res, 200, { success: true });
      }
      return;
    }

    // API: Settings
    if (pathname === '/api/settings') {
      if (req.method === 'GET') {
        sendJson(res, 200, loadSettingsData());
      } else if (req.method === 'POST') {
        const body = await readRequestBody(req);
        const data = JSON.parse(body);
        saveSettingsData(data);
        sendJson(res, 200, { success: true });
      }
      return;
    }

    // API: Share Guest Sesi
    if (pathname.startsWith('/api/share/')) {
      const handled = await handleShareApiRequest(req, res, pathname);
      if (handled) return;
    }

    // Static routing
    if (pathname === '/' || pathname === '/MBTI.html' || pathname === '/index.html') {
      serveStaticFile(res, 'MBTI.html');
      return;
    }

    const staticFiles = {
      '/script.js': 'script.js',
      '/style.css': 'style.css',
      '/Karakter.ku.png': 'Karakter.ku.png'
    };

    if (staticFiles[pathname]) {
      serveStaticFile(res, staticFiles[pathname]);
      return;
    }

    if (pathname === '/favicon.ico') {
      serveStaticFile(res, 'Karakter.ku.png');
      return;
    }

    sendText(res, 404, 'Halaman tidak ditemukan.');
  } catch (err) {
    console.error('Request error:', err);
    sendJson(res, 500, { success: false, error: err.message || 'Internal server error.' });
  }
}

// Start Server
const port = process.env.PORT || 3000;
const server = http.createServer(handleRequest);

ensureDataDir();

server.listen(port, '0.0.0.0', () => {
  console.log(`\n  ======================================================`);
  console.log(`    Karakter.ku Web Application Server has started!`);
  console.log(`  ======================================================\n`);
  console.log(`    Local Address:   http://localhost:${port}`);
  const addresses = getLocalIpAddresses();
  addresses.forEach(addr => {
    console.log(`    Network Address: http://${addr}:${port}`);
  });
  console.log(`\n  ======================================================\n`);
});
