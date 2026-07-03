/**
 * Karakter.ku — Multi-Test Platform
 * Tests: MBTI (40q), DISC (28q), IQ (20q)
 */

// ===========================
// MBTI DATA
// ===========================
const mbtiQuestions = [
    // E vs I (10 questions)
    { id: 1, text: "Anda merasa sangat bersemangat dan berenergi setelah menghabiskan waktu bersama banyak orang.", dimension: "EI", direction: 1 },
    { id: 2, text: "Anda lebih suka menghabiskan akhir pekan yang tenang di rumah daripada pergi ke pesta yang ramai.", dimension: "EI", direction: -1 },
    { id: 3, text: "Dalam pertemuan sosial, Anda sering menjadi orang pertama yang memulai percakapan dengan orang baru.", dimension: "EI", direction: 1 },
    { id: 4, text: "Anda merasa kelelahan dan butuh waktu sendiri untuk 'mengisi ulang energi' setelah berinteraksi sosial yang lama.", dimension: "EI", direction: -1 },
    { id: 5, text: "Anda sangat menikmati menjadi pusat perhatian dalam suatu kelompok.", dimension: "EI", direction: 1 },
    { id: 6, text: "Anda cenderung lebih banyak mendengarkan daripada berbicara saat berada dalam kelompok besar.", dimension: "EI", direction: -1 },
    { id: 7, text: "Anda memiliki lingkaran pertemanan yang luas dan mudah bergaul dengan siapa saja.", dimension: "EI", direction: 1 },
    { id: 8, text: "Anda lebih memilih memiliki beberapa teman dekat yang sangat intim daripada banyak teman biasa.", dimension: "EI", direction: -1 },
    { id: 9, text: "Anda sering berpikir sambil berbicara, mendiskusikan ide-ide Anda secara vokal untuk memahaminya.", dimension: "EI", direction: 1 },
    { id: 10, text: "Anda lebih suka merenungkan sesuatu secara mendalam di dalam pikiran sebelum membagikannya kepada orang lain.", dimension: "EI", direction: -1 },

    // S vs N (10 questions)
    { id: 11, text: "Anda lebih memperhatikan fakta dan detail konkret daripada teori dan konsep abstrak.", dimension: "SN", direction: 1 },
    { id: 12, text: "Anda sering berkhayal atau memikirkan tentang masa depan dan berbagai kemungkinan yang ada.", dimension: "SN", direction: -1 },
    { id: 13, text: "Anda lebih suka belajar melalui pengalaman langsung dan praktik (hands-on).", dimension: "SN", direction: 1 },
    { id: 14, text: "Anda mudah bosan dengan rutinitas dan selalu mencari cara baru atau inovatif dalam melakukan sesuatu.", dimension: "SN", direction: -1 },
    { id: 15, text: "Anda sangat praktis dan realistis dalam menghadapi masalah sehari-hari.", dimension: "SN", direction: 1 },
    { id: 16, text: "Anda sering mengandalkan intuisi atau 'firasat' saat membuat keputusan penting.", dimension: "SN", direction: -1 },
    { id: 17, text: "Anda cenderung fokus pada apa yang sedang terjadi saat ini, di sini dan sekarang.", dimension: "SN", direction: 1 },
    { id: 18, text: "Anda senang mencari makna tersembunyi atau pola di balik informasi yang ada.", dimension: "SN", direction: -1 },
    { id: 19, text: "Instruksi yang jelas, terperinci, dan bertahap sangat penting bagi Anda saat mempelajari hal baru.", dimension: "SN", direction: 1 },
    { id: 20, text: "Anda lebih suka diberikan gambaran besar atau visi keseluruhan daripada detail teknisnya.", dimension: "SN", direction: -1 },

    // T vs F (10 questions)
    { id: 21, text: "Saat mengambil keputusan, Anda lebih mengutamakan logika dan objektivitas daripada perasaan.", dimension: "TF", direction: 1 },
    { id: 22, text: "Keharmonisan dan perasaan orang lain adalah faktor utama yang Anda pertimbangkan saat memutuskan sesuatu.", dimension: "TF", direction: -1 },
    { id: 23, text: "Anda merasa kebenaran dan fakta lebih penting daripada bersikap diplomatis atau menjaga perasaan.", dimension: "TF", direction: 1 },
    { id: 24, text: "Anda sangat empatik dan mudah merasakan apa yang sedang dirasakan orang lain di sekitar Anda.", dimension: "TF", direction: -1 },
    { id: 25, text: "Dalam perdebatan, Anda berfokus untuk menang melalui argumen yang rasional dan masuk akal.", dimension: "TF", direction: 1 },
    { id: 26, text: "Anda lebih suka menghindari konflik demi menjaga suasana yang damai dan positif.", dimension: "TF", direction: -1 },
    { id: 27, text: "Anda sering dinilai sebagai orang yang tegas dan terkadang dingin oleh orang lain.", dimension: "TF", direction: 1 },
    { id: 28, text: "Anda sering dinilai sebagai orang yang hangat, penuh kasih, dan sangat peduli.", dimension: "TF", direction: -1 },
    { id: 29, text: "Anda percaya bahwa keadilan dan standar yang sama harus diterapkan kepada semua orang tanpa terkecuali.", dimension: "TF", direction: 1 },
    { id: 30, text: "Anda percaya bahwa setiap situasi adalah unik dan keputusan harus mempertimbangkan kondisi individu tersebut.", dimension: "TF", direction: -1 },

    // J vs P (10 questions)
    { id: 31, text: "Anda lebih suka memiliki rencana yang jelas dan terstruktur daripada membiarkan sesuatu berjalan secara spontan.", dimension: "JP", direction: 1 },
    { id: 32, text: "Anda merasa nyaman dengan perubahan mendadak dan sangat adaptif terhadap situasi yang tak terduga.", dimension: "JP", direction: -1 },
    { id: 33, text: "Anda selalu berusaha menyelesaikan pekerjaan atau tugas jauh sebelum tenggat waktu (deadline).", dimension: "JP", direction: 1 },
    { id: 34, text: "Anda sering menunda pekerjaan hingga menit-menit terakhir karena merasa lebih terpacu saat mendekati deadline.", dimension: "JP", direction: -1 },
    { id: 35, text: "Anda merasa lega dan tenang setelah membuat keputusan akhir.", dimension: "JP", direction: 1 },
    { id: 36, text: "Anda lebih suka membiarkan pilihan Anda tetap terbuka selama mungkin sebelum memutuskan sesuatu.", dimension: "JP", direction: -1 },
    { id: 37, text: "Ruang kerja atau kamar Anda biasanya tertata rapi dan terorganisir dengan baik.", dimension: "JP", direction: 1 },
    { id: 38, text: "Ruang kerja atau kamar Anda sering terlihat berantakan, tetapi Anda tahu persis di mana meletakkan barang-barang Anda.", dimension: "JP", direction: -1 },
    { id: 39, text: "Anda membuat daftar tugas (to-do list) setiap hari dan sangat disiplin mengikutinya.", dimension: "JP", direction: 1 },
    { id: 40, text: "Anda lebih suka mengalir mengikuti arus dan melihat apa yang akan terjadi setiap harinya.", dimension: "JP", direction: -1 },
];

const mbtiTypes = {
    "INTJ": {
        alias: "The Architect (Arsitek)",
        description: "Pemikir yang imajinatif dan strategis, selalu memiliki rencana untuk segala hal. INTJ sangat independen, analitis, dan didorong oleh logika. Mereka memiliki standar yang tinggi untuk diri sendiri dan orang lain.",
        sw: "Kekuatan: Rasional, independen, pekerja keras, visioner.<br>Kelemahan: Terkadang arogan, tidak peka terhadap emosi, terlalu kritis.",
        careers: "Software Engineer, Ilmuwan, Ahli Strategi Bisnis, Arsitek, Analis Keuangan, Dokter.",
        figures: "Elon Musk, Mark Zuckerberg, Christopher Nolan, Michelle Obama."
    },
    "INTP": {
        alias: "The Logician (Ahli Logika)",
        description: "Penemu yang inovatif dengan kehausan tak terpuaskan akan pengetahuan. INTP mencintai teori dan desain konseptual. Mereka brilian dalam menganalisis masalah kompleks.",
        sw: "Kekuatan: Pemikir orisinil, objektif, antusias, pemecah masalah.<br>Kelemahan: Sulit ditebak, sering mengabaikan detail praktis, cenderung menyendiri.",
        careers: "Programmer, Peneliti, Profesor Universitas, Ahli Matematika, Analis Data.",
        figures: "Albert Einstein, Bill Gates, Isaac Newton, Marie Curie."
    },
    "ENTJ": {
        alias: "The Commander (Komandan)",
        description: "Pemimpin yang berani, imajinatif, dan berkemauan kuat, selalu menemukan cara atau menciptakan cara baru. Mereka terlahir untuk memimpin dan mengorganisir sistem.",
        sw: "Kekuatan: Efisien, percaya diri, strategis, karismatik.<br>Kelemahan: Keras kepala, tidak toleran, terkadang dingin dan tidak sabar.",
        careers: "CEO, Manajer Proyek, Pengacara, Konsultan Manajemen, Hakim.",
        figures: "Steve Jobs, Gordon Ramsay, Margaret Thatcher, Franklin D. Roosevelt."
    },
    "ENTP": {
        alias: "The Debater (Pendebat)",
        description: "Pemikir yang cerdas dan penuh rasa ingin tahu yang tidak bisa menahan tantangan intelektual. ENTP sangat cepat dalam memahami situasi baru dan mencari celah.",
        sw: "Kekuatan: Berpengetahuan luas, pemikir cepat, sangat mudah beradaptasi.<br>Kelemahan: Suka berdebat hanya demi berdebat, tidak suka rutinitas, sulit fokus pada satu hal.",
        careers: "Pengusaha, Politisi, Agen Real Estate, Jurnalis, Direktur Kreatif.",
        figures: "Thomas Edison, Leonardo da Vinci, Robert Downey Jr., Mark Twain."
    },
    "INFJ": {
        alias: "The Advocate (Advokat)",
        description: "Idealis yang tenang dan mistis, namun sangat menginspirasi dan tidak kenal lelah. INFJ memiliki pemahaman mendalam tentang motif manusia.",
        sw: "Kekuatan: Wawasan tajam, prinsip yang kuat, altruistik, kreatif.<br>Kelemahan: Perfeksionis ekstrem, mudah burn-out, sangat sensitif terhadap kritik.",
        careers: "Psikolog, Penulis, Konselor, Pekerja Sosial, Desainer UX, Guru.",
        figures: "Nelson Mandela, Martin Luther King Jr., Mahatma Gandhi, Mother Teresa."
    },
    "INFP": {
        alias: "The Mediator (Mediator)",
        description: "Orang yang puitis, baik hati, dan altruistik, selalu bersemangat membantu tujuan baik. INFP dipandu oleh prinsip dan nilai inti mereka.",
        sw: "Kekuatan: Empati tinggi, berpikiran terbuka, kreatif, berdedikasi.<br>Kelemahan: Terlalu idealis, tidak praktis, mudah merasa kecewa.",
        careers: "Seniman, Penulis, Konselor, Spesialis HRD, Terapis Fisik.",
        figures: "J.R.R. Tolkien, William Shakespeare, Keanu Reeves, Audrey Hepburn."
    },
    "ENFJ": {
        alias: "The Protagonist (Protagonis)",
        description: "Pemimpin yang karismatik dan menginspirasi, mampu memukau pendengarnya. ENFJ sangat peduli pada pertumbuhan dan perkembangan orang lain.",
        sw: "Kekuatan: Toleran, dapat diandalkan, pemimpin alami, komunikator ulung.<br>Kelemahan: Terlalu idealis, terlalu sensitif, sering mengorbankan diri sendiri.",
        careers: "Guru, Motivator, PR Specialist, Manajer HRD, Konsultan Karir.",
        figures: "Barack Obama, Oprah Winfrey, John F. Kennedy, Malala Yousafzai."
    },
    "ENFP": {
        alias: "The Campaigner (Juru Kampanye)",
        description: "Jiwa bebas yang antusias, kreatif, dan mudah bergaul, yang selalu dapat menemukan alasan untuk tersenyum. Mereka melihat kehidupan sebagai jaringan yang saling terhubung.",
        sw: "Kekuatan: Penasaran, energik, sangat komunikatif, populer.<br>Kelemahan: Sulit fokus, overthinking, mudah stres, sangat emosional.",
        careers: "Marketer, Event Planner, Aktor/Aktris, Penulis Perjalanan, Pengusaha Startup.",
        figures: "Walt Disney, Robin Williams, RM (BTS), Anne Frank."
    },
    "ISTJ": {
        alias: "The Logistician (Ahli Logistik)",
        description: "Individu yang praktis dan mengutamakan fakta, yang keandalannya tidak dapat diragukan. ISTJ menghargai tradisi dan loyalitas.",
        sw: "Kekuatan: Jujur, bertanggung jawab, tenang, tertib.<br>Kelemahan: Keras kepala, tidak peka, selalu bekerja by-the-book.",
        careers: "Akuntan, Auditor, Administrator Database, Manajer Keuangan, Anggota Militer.",
        figures: "George Washington, Warren Buffett, Jeff Bezos, Angela Merkel."
    },
    "ISFJ": {
        alias: "The Defender (Pembela)",
        description: "Pelindung yang sangat berdedikasi dan hangat, selalu siap membela orang yang dicintainya. ISFJ adalah penjaga tradisi yang sangat baik.",
        sw: "Kekuatan: Mendukung, dapat diandalkan, sabar, imajinatif.<br>Kelemahan: Terlalu rendah hati, sulit menolak (people pleaser), menekan emosi.",
        careers: "Perawat, Guru SD, Asisten Administratif, Pekerja Sosial, Desainer Interior.",
        figures: "Ratu Elizabeth II, Kate Middleton, Rosa Parks, Clara Barton."
    },
    "ESTJ": {
        alias: "The Executive (Eksekutif)",
        description: "Administrator yang sangat baik, tidak tertandingi dalam mengelola hal - atau orang. Mereka menyukai aturan yang jelas dan kepastian.",
        sw: "Kekuatan: Berdedikasi, jujur, pemimpin yang mampu membawa keteraturan.<br>Kelemahan: Kaku, kesulitan mengekspresikan emosi, terlalu fokus pada status sosial.",
        careers: "Hakim, Manajer Bank, Kepala Sekolah, Petugas Polisi, Manajer Operasional.",
        figures: "Henry Ford, Sonia Sotomayor, John D. Rockefeller, Emma Watson."
    },
    "ESFJ": {
        alias: "The Consul (Konsul)",
        description: "Orang yang sangat peduli, sosial, dan populer, selalu ingin membantu. ESFJ adalah detak jantung dari setiap komunitas.",
        sw: "Kekuatan: Keterampilan praktis, rasa kewajiban yang kuat, setia, sensitif dan hangat.<br>Kelemahan: Butuh apresiasi yang tinggi, tidak fleksibel, sangat rentan terhadap kritik.",
        careers: "Perawat, Spesialis Humas, Manajer Ritel, Pekerja Sosial, Resepsionis.",
        figures: "Taylor Swift, Bill Clinton, Joe Biden, Jennifer Garner."
    },
    "ISTP": {
        alias: "The Virtuoso (Pengrajin)",
        description: "Eksperimenter yang berani dan praktis, menguasai semua jenis alat. ISTP belajar melalui pengalaman langsung.",
        sw: "Kekuatan: Optimis, energik, rasional, hebat dalam krisis.<br>Kelemahan: Cepat bosan, tidak suka komitmen jangka panjang, sering mengambil risiko berbahaya.",
        careers: "Mekanik, Insinyur Sipil, Pilot, Detektif, Teknisi IT.",
        figures: "Tom Cruise, Michael Jordan, Bruce Lee, Clint Eastwood."
    },
    "ISFP": {
        alias: "The Adventurer (Petualang)",
        description: "Seniman yang fleksibel dan menawan, selalu siap untuk menjelajahi dan mengalami sesuatu yang baru. Mereka menikmati masa kini.",
        sw: "Kekuatan: Menawan, peka terhadap orang lain, imajinatif, penuh gairah.<br>Kelemahan: Sangat kompetitif, mudah stres, kurang perencanaan masa depan.",
        careers: "Seniman, Desainer Fashion, Musisi, Koki, Ahli Kosmetologi.",
        figures: "Michael Jackson, Marilyn Monroe, Kevin Costner, Britney Spears."
    },
    "ESTP": {
        alias: "The Entrepreneur (Pengusaha)",
        description: "Orang yang cerdas, energik, dan sangat tanggap, yang benar-benar menikmati hidup di ujung tanduk. Mereka menyukai tindakan.",
        sw: "Kekuatan: Berani, rasional, praktis, keterampilan sosial yang hebat.<br>Kelemahan: Tidak sabar, suka mengambil risiko ekstrim, melewatkan gambaran besar.",
        careers: "Pengusaha, Agen Penjualan, Paramedis, Atlet Profesional, Manajer Hotel.",
        figures: "Donald Trump, Madonna, Ernest Hemingway, Winston Churchill."
    },
    "ESFP": {
        alias: "The Entertainer (Penghibur)",
        description: "Spontan, energik, dan antusias - hidup tidak pernah membosankan di sekitar mereka. ESFP mencintai kehidupan dan orang-orang di sekitarnya.",
        sw: "Kekuatan: Berani, memiliki estetika tinggi, keterampilan interpersonal yang sangat baik.<br>Kelemahan: Terlalu sensitif, mudah bosan, buruk dalam perencanaan jangka panjang.",
        careers: "Event Planner, Aktor/Aktris, Pemandu Wisata, Desainer Interior, Konselor Ketergantungan.",
        figures: "Elvis Presley, Elton John, Jamie Oliver, Katy Perry."
    }
};

// ===========================
// DISC DATA
// ===========================
const discQuestions = [
    // D - Dominance (6 questions)
    { id: 101, text: "Saya suka mengambil kendali dan memimpin dalam situasi apapun.", dimension: "D", direction: 1 },
    { id: 102, text: "Saya langsung to the point dan tidak suka basa-basi saat berbicara.", dimension: "D", direction: 1 },
    { id: 103, text: "Saya sangat menikmati tantangan dan kompetisi.", dimension: "D", direction: 1 },
    { id: 104, text: "Saya membuat keputusan dengan cepat dan tegas tanpa ragu.", dimension: "D", direction: 1 },
    { id: 105, text: "Saya lebih suka memimpin proyek daripada menjadi anggota tim biasa.", dimension: "D", direction: 1 },
    { id: 106, text: "Saya tidak takut mengambil risiko besar untuk mencapai tujuan.", dimension: "D", direction: 1 },

    // I - Influence (6 questions)
    { id: 108, text: "Saya mudah bergaul dan senang bertemu serta berkenalan dengan orang baru.", dimension: "I", direction: 1 },
    { id: 109, text: "Saya pandai mempengaruhi dan membujuk orang lain untuk mendukung ide saya.", dimension: "I", direction: 1 },
    { id: 110, text: "Saya selalu optimis dan melihat sisi positif dari setiap situasi.", dimension: "I", direction: 1 },
    { id: 111, text: "Saya suka menjadi pusat perhatian dan tampil di depan banyak orang.", dimension: "I", direction: 1 },
    { id: 112, text: "Saya mengekspresikan emosi dan perasaan dengan terbuka dan antusias.", dimension: "I", direction: 1 },
    { id: 113, text: "Saya lebih suka bekerja dalam tim yang dinamis daripada bekerja sendirian.", dimension: "I", direction: 1 },

    // S - Steadiness (6 questions)
    { id: 115, text: "Saya sabar dan tetap tenang menghadapi tekanan atau situasi sulit.", dimension: "S", direction: 1 },
    { id: 116, text: "Saya sangat setia dan berdedikasi pada tim dan organisasi saya.", dimension: "S", direction: 1 },
    { id: 117, text: "Saya lebih suka stabilitas dan konsistensi daripada perubahan mendadak.", dimension: "S", direction: 1 },
    { id: 118, text: "Saya pendengar yang baik dan selalu berusaha memahami perasaan orang lain.", dimension: "S", direction: 1 },
    { id: 119, text: "Saya konsisten dan dapat diandalkan dalam menyelesaikan pekerjaan.", dimension: "S", direction: 1 },
    { id: 120, text: "Saya menghindari konflik dan selalu mencari jalan damai dalam menyelesaikan masalah.", dimension: "S", direction: 1 },

    // C - Conscientiousness (6 questions)
    { id: 122, text: "Saya sangat detail dan teliti dalam setiap pekerjaan yang saya lakukan.", dimension: "C", direction: 1 },
    { id: 123, text: "Saya selalu menganalisis data dan fakta sebelum mengambil keputusan penting.", dimension: "C", direction: 1 },
    { id: 124, text: "Saya mematuhi aturan, standar, dan prosedur dengan sangat ketat.", dimension: "C", direction: 1 },
    { id: 125, text: "Kualitas dan akurasi adalah prioritas utama saya dalam bekerja.", dimension: "C", direction: 1 },
    { id: 126, text: "Saya suka merencanakan segala sesuatu secara sistematis dan terstruktur.", dimension: "C", direction: 1 },
    { id: 127, text: "Saya bersikap kritis dan skeptis terhadap informasi atau klaim baru.", dimension: "C", direction: 1 },
];

const discTypes = {
    'D': {
        name: 'Dominance',
        alias: 'Pemimpin & Pendorong',
        description: 'Anda adalah tipe yang tegas, ambisius, dan berorientasi pada hasil. Anda memiliki kemampuan alami untuk memimpin dan mengambil keputusan cepat. Anda menyukai tantangan dan tidak takut mengambil risiko untuk mencapai tujuan. Orang-orang melihat Anda sebagai sosok yang percaya diri dan berpengaruh.',
        sw: 'Kekuatan: Tegas, percaya diri, berorientasi hasil, pemimpin alami, problem solver yang hebat.<br>Kelemahan: Bisa terkesan dominan, tidak sabar, kurang sensitif terhadap perasaan orang lain, terlalu kompetitif.',
        careers: 'CEO, Manajer Proyek, Pengusaha, Pengacara, Direktur Operasional, Konsultan Manajemen.'
    },
    'I': {
        name: 'Influence',
        alias: 'Komunikator & Motivator',
        description: 'Anda adalah tipe yang antusias, optimis, dan sangat komunikatif. Anda memiliki kemampuan alami untuk mempengaruhi dan menginspirasi orang lain. Anda menikmati interaksi sosial dan selalu membawa energi positif ke setiap ruangan yang Anda masuki.',
        sw: 'Kekuatan: Karismatik, persuasif, antusias, kreatif, pandai membangun relasi.<br>Kelemahan: Kurang fokus pada detail, terlalu optimis, sulit mengikuti rutinitas, bisa impulsif.',
        careers: 'Marketing Manager, Public Relations, Sales Executive, Motivator, Event Organizer, Presenter.'
    },
    'S': {
        name: 'Steadiness',
        alias: 'Pendukung & Stabilisator',
        description: 'Anda adalah tipe yang sabar, setia, dan dapat diandalkan. Anda menghargai stabilitas dan harmoni dalam hubungan. Anda adalah pendengar yang baik dan selalu mendukung tim Anda dengan konsistensi yang luar biasa.',
        sw: 'Kekuatan: Sabar, dapat diandalkan, pendengar yang baik, loyal, pekerja tim yang solid.<br>Kelemahan: Menghindari konflik, sulit beradaptasi dengan perubahan, terlalu akomodatif, cenderung pasif.',
        careers: 'HRD Specialist, Konselor, Perawat, Guru, Customer Service Manager, Administrasi.'
    },
    'C': {
        name: 'Conscientiousness',
        alias: 'Analis & Perfeksionis',
        description: 'Anda adalah tipe yang analitis, teliti, dan mengutamakan kualitas. Anda selalu mencari fakta dan data sebelum mengambil keputusan. Anda memiliki standar tinggi dan bekerja dengan sangat sistematis serta terstruktur.',
        sw: 'Kekuatan: Analitis, akurat, sistematis, standar tinggi, pemikir kritis yang tajam.<br>Kelemahan: Terlalu perfeksionis, overthinking, sulit mendelegasikan tugas, terlalu kritis terhadap diri sendiri dan orang lain.',
        careers: 'Data Analyst, Akuntan, Programmer, Peneliti, Quality Assurance, Auditor, Arsitek.'
    }
};

// ===========================
// IQ DATA
// ===========================
const iqQuestions = [
    // Number patterns (8)
    { id: 201, text: "Lanjutkan deret angka berikut: 2, 6, 18, 54, ...", options: ["108", "162", "148", "156"], correct: 1, category: "Pola Angka" },
    { id: 202, text: "Lanjutkan deret angka berikut: 3, 7, 15, 31, ...", options: ["47", "52", "63", "59"], correct: 2, category: "Pola Angka" },
    { id: 203, text: "Lanjutkan deret angka berikut: 1, 1, 2, 3, 5, 8, ...", options: ["11", "12", "13", "10"], correct: 2, category: "Pola Angka" },
    { id: 204, text: "Lanjutkan deret angka berikut: 100, 81, 64, 49, ...", options: ["25", "36", "42", "30"], correct: 1, category: "Pola Angka" },
    { id: 205, text: "Lanjutkan deret angka berikut: 2, 5, 10, 17, 26, ...", options: ["35", "37", "33", "39"], correct: 1, category: "Pola Angka" },
    { id: 206, text: "Jika 4 + 4 = 16, 5 + 5 = 25, 6 + 6 = 36, maka 7 + 7 = ...", options: ["14", "42", "49", "56"], correct: 2, category: "Pola Angka" },
    { id: 207, text: "Lanjutkan deret angka berikut: 0, 1, 3, 6, 10, 15, ...", options: ["18", "20", "21", "24"], correct: 2, category: "Pola Angka" },
    { id: 208, text: "Jika 2³ = 8, 3³ = 27, 4³ = 64, maka 5³ = ...", options: ["100", "150", "125", "115"], correct: 2, category: "Pola Angka" },

    // Verbal/Logic (6)
    { id: 209, text: "Kucing : Meong :: Anjing : ...", options: ["Cicit", "Guk-guk", "Kukuruyuk", "Embik"], correct: 1, category: "Analogi Verbal" },
    { id: 210, text: "Buku : Perpustakaan :: Mobil : ...", options: ["Jalan Raya", "Garasi", "Bengkel", "Parkiran"], correct: 1, category: "Analogi Verbal" },
    { id: 211, text: "Jika semua kucing adalah hewan, dan semua hewan bernapas, maka...", options: ["Semua yang bernapas adalah kucing", "Semua kucing bernapas", "Semua hewan adalah kucing", "Tidak ada kesimpulan yang benar"], correct: 1, category: "Logika Verbal" },
    { id: 212, text: "Mana yang TIDAK termasuk kelompok? Apel, Jeruk, Wortel, Mangga", options: ["Apel", "Jeruk", "Wortel", "Mangga"], correct: 2, category: "Logika Verbal" },
    { id: 213, text: "Ali lebih tinggi dari Budi. Candra lebih tinggi dari Ali. Siapa yang paling pendek?", options: ["Ali", "Budi", "Candra", "Semua sama"], correct: 1, category: "Logika Verbal" },
    { id: 214, text: "6 pekerja menyelesaikan proyek dalam 12 hari. Berapa hari jika dikerjakan 9 pekerja?", options: ["6 hari", "8 hari", "9 hari", "10 hari"], correct: 1, category: "Logika Verbal" },

    // Spatial/Pattern (6)
    { id: 215, text: "Jika pola: △○□ △○□ △○?, maka simbol berikutnya adalah...", options: ["△", "○", "□", "◇"], correct: 2, category: "Pola Visual" },
    { id: 216, text: "Sebuah jam menunjukkan pukul 3:15. Berapa derajat sudut antara jarum jam dan jarum menit?", options: ["0°", "7.5°", "15°", "22.5°"], correct: 1, category: "Pola Visual" },
    { id: 217, text: "Jika sebuah kubus memiliki 6 sisi, berapa sisi yang dimiliki oleh 2,5 kubus?", options: ["12", "13", "15", "18"], correct: 2, category: "Pola Visual" },
    { id: 218, text: "Cermin memantulkan huruf 'b' menjadi...", options: ["d", "p", "q", "b"], correct: 0, category: "Pola Visual" },
    { id: 219, text: "Berapa banyak segitiga dalam gambar segitiga yang dibagi menjadi 4 segitiga kecil yang sama?", options: ["4", "5", "6", "8"], correct: 1, category: "Pola Visual" },
    { id: 220, text: "Jika Anda melipat kertas persegi menjadi dua secara diagonal, bentuk apa yang Anda dapatkan?", options: ["Persegi panjang", "Segitiga", "Belah ketupat", "Trapesium"], correct: 1, category: "Pola Visual" }
];

const wptQuestions = [
    // Aritmatika Numerik (8) - Numerical: calculations, equations, word problems
    { id: 301, text: "Jika 3 lusin telur berharga Rp 54.000, berapakah harga 15 butir telur?", options: ["Rp 22.500", "Rp 21.000", "Rp 24.500", "Rp 20.000"], correct: 0, category: "Aritmatika Numerik" },
    { id: 302, text: "Sebuah mobil menempuh jarak 120 km dalam waktu 2 jam. Dengan kecepatan yang sama, berapa lama waktu yang dibutuhkan untuk menempuh jarak 300 km?", options: ["4 jam", "4,5 jam", "5 jam", "6 jam"], correct: 2, category: "Aritmatika Numerik" },
    { id: 303, text: "Berapa nilai dari: (24 x 5) - (48 / 6)?", options: ["112", "120", "108", "116"], correct: 0, category: "Aritmatika Numerik" },
    { id: 304, text: "Setengah dari sebuah angka adalah 18. Berapakah 25% dari angka tersebut?", options: ["6", "9", "12", "18"], correct: 1, category: "Aritmatika Numerik" },
    { id: 305, text: "Toko memberikan diskon 15%. Jika harga awal barang adalah Rp 80.000, berapakah harga barang setelah diskon?", options: ["Rp 64.000", "Rp 68.000", "Rp 70.000", "Rp 72.000"], correct: 1, category: "Aritmatika Numerik" },
    { id: 306, text: "Jika A + B = 15, dan A - B = 5, berapakah nilai dari A x B?", options: ["50", "45", "55", "60"], correct: 0, category: "Aritmatika Numerik" },
    { id: 307, text: "Seorang pekerja dibayar Rp 60.000 per jam. Jika dia bekerja 8 jam sehari selama 5 hari, berapakah total gajinya?", options: ["Rp 2.200.000", "Rp 2.400.000", "Rp 2.500.000", "Rp 2.000.000"], correct: 1, category: "Aritmatika Numerik" },
    { id: 308, text: "Selesaikan deret angka berikut: 4, 9, 16, 25, 36, ...", options: ["45", "49", "54", "64"], correct: 1, category: "Aritmatika Numerik" },

    // Verbal (9) - Synonyms, antonyms, scrambled words
    { id: 309, text: "Manakah di bawah ini yang merupakan SINONIM dari kata 'Autentik'?", options: ["Palsu", "Asli", "Biasasa", "Kuno"], correct: 1, category: "Verbal" },
    { id: 310, text: "Manakah di bawah ini yang merupakan ANTONIM dari kata 'Efimer' (bersifat sementara)?", options: ["Abadi", "Singkat", "Cepat", "Baru"], correct: 0, category: "Verbal" },
    { id: 311, text: "Susunlah huruf-huruf berikut agar membentuk kata benda yang valid: 'K - I - T - U - S'", options: ["Tuski", "Kusti", "Tikus", "Sikut"], correct: 2, category: "Verbal" },
    { id: 312, text: "Manakah di bawah ini yang merupakan SINONIM dari kata 'Fana'?", options: ["Kekal", "Sementara", "Nyata", "Indah"], correct: 1, category: "Verbal" },
    { id: 313, text: "Manakah di bawah ini yang merupakan ANTONIM dari kata 'Apatis'?", options: ["Peduli", "Cuek", "Pasif", "Dingin"], correct: 0, category: "Verbal" },
    { id: 314, text: "Manakah kata yang TIDAK sesuai dalam kelompok ini?", options: ["Meja", "Kursi", "Lemari", "Buku"], correct: 3, category: "Verbal" },
    { id: 315, text: "Bunga : Harum :: Es : ...", options: ["Basah", "Cair", "Dingin", "Beku"], correct: 2, category: "Verbal" },
    { id: 316, text: "Manakah di bawah ini yang merupakan SINONIM dari kata 'Prominen'?", options: ["Rendah", "Terkenal", "Baru", "Sederhana"], correct: 1, category: "Verbal" },
    { id: 317, text: "Susunlah huruf-huruf berikut untuk membentuk nama organ tubuh: 'T - A - N - N - U - J - G'", options: ["Tanjung", "Jantung", "Gantung", "Tunjang"], correct: 1, category: "Verbal" },

    // Abstrak/Spasial (8) - shapes, rotations, geometries
    { id: 318, text: "Jika Anda memutar segitiga sama sisi sebesar 120 derajat searah jarum jam, bagaimanakah posisi sudut atasnya?", options: ["Menghadap ke bawah", "Menghadap ke samping kanan", "Menghadap ke atas (tetap sama)", "Menghadap ke samping kiri"], correct: 2, category: "Abstrak/Spasial" },
    { id: 319, text: "Pola: Lingkaran -> Segitiga -> Persegi -> Lingkaran -> Segitiga -> ... . Apakah bentuk ke-14?", options: ["Lingkaran", "Segitiga", "Persegi", "Pentagon"], correct: 1, category: "Abstrak/Spasial" },
    { id: 320, text: "Jika sebuah kubus memiliki sisi-sisi berwarna merah, berapa banyak sudut yang dimilikinya?", options: ["4 sudut", "6 sudut", "8 sudut", "12 sudut"], correct: 2, category: "Abstrak/Spasial" },
    { id: 321, text: "Bayangan huruf 'E' di dalam cermin adalah...", options: ["E (tetap sama)", "∃ (terbalik horizontal)", "M (terbalik vertikal)", "W"], correct: 1, category: "Abstrak/Spasial" },
    { id: 322, text: "Berapa banyak permukaan datar yang dimiliki oleh sebuah tabung (silinder) tertutup?", options: ["1", "2", "3", "4"], correct: 2, category: "Abstrak/Spasial" },
    { id: 323, text: "Pola: 1 garis, 3 garis (segitiga), 4 garis (segi empat), 5 garis (segi lima). Berapa jumlah garis pada bentuk berikutnya?", options: ["5 garis", "6 garis", "7 garis", "8 garis"], correct: 1, category: "Abstrak/Spasial" },
    { id: 324, text: "Jika sebuah balok dipotong secara vertikal tepat di tengahnya, penampang lintang potongannya berbentuk...", options: ["Segitiga", "Lingkaran", "Persegi/Persegi Panjang", "Trapesium"], correct: 2, category: "Abstrak/Spasial" },
    { id: 325, text: "Jika jarum jam menunjukkan pukul 06.00, sudut terkecil yang terbentuk antara jarum jam dan jarum menit adalah...", options: ["90 derajat", "120 derajat", "180 derajat", "270 derajat"], correct: 2, category: "Abstrak/Spasial" },

    // Deduktif (8) - premises and logic
    { id: 326, text: "Premis 1: Semua mamalia menyusui. Premis 2: Lumba-lumba adalah mamalia. Kesimpulan yang sah adalah...", options: ["Lumba-lumba tidak menyusui", "Lumba-lumba adalah ikan", "Lumba-lumba menyusui", "Tidak ada kesimpulan yang benar"], correct: 2, category: "Deduktif" },
    { id: 327, text: "Premis 1: Sebagian pegawai rajin bekerja. Premis 2: Budi adalah pegawai. Kesimpulan yang mungkin adalah...", options: ["Budi pasti rajin", "Budi mungkin rajin bekerja", "Budi pasti malas", "Budi bukan pegawai"], correct: 1, category: "Deduktif" },
    { id: 328, text: "Jika hari ini hujan, jalanan akan basah. Saat ini jalanan kering. Kesimpulan yang benar adalah...", options: ["Hari ini hujan", "Hari ini tidak hujan", "Hari ini mendung", "Jalanan baru disapu"], correct: 1, category: "Deduktif" },
    { id: 329, text: "Semua dokter berpendidikan tinggi. Beberapa orang berpendidikan tinggi suka menulis puisi. Maka...", options: ["Semua dokter suka menulis puisi", "Beberapa dokter suka menulis puisi", "Mungkin ada dokter yang suka menulis puisi", "Tidak ada dokter yang suka menulis puisi"], correct: 2, category: "Deduktif" },
    { id: 330, text: "Ali lebih tua dari Budi. Budi lebih muda dari Candra. Jika Candra lebih tua dari Ali, siapa yang termuda?", options: ["Ali", "Budi", "Candra", "Tidak dapat disimpulkan"], correct: 1, category: "Deduktif" },
    { id: 331, text: "Jika semua tumbuhan membutuhkan air untuk hidup, dan kaktus adalah tumbuhan, maka...", options: ["Kaktus tidak butuh air", "Kaktus membutuhkan air untuk hidup", "Kaktus bisa hidup tanpa air", "Semua tumbuhan adalah kaktus"], correct: 1, category: "Deduktif" },
    { id: 332, text: "Premis 1: Tidak ada mahasiswa yang malas lulus tepat waktu. Premis 2: Dodi lulus tepat waktu. Kesimpulan...", options: ["Dodi adalah mahasiswa malas", "Dodi bukan mahasiswa yang malas", "Dodi lulus karena beruntung", "Dodi tidak lulus"], correct: 1, category: "Deduktif" },
    { id: 333, text: "Empat orang (A, B, C, D) sedang mengantre. A berada di depan B. C berada di belakang B. D berada di antara A dan B. Siapa yang berada di urutan pertama?", options: ["A", "B", "C", "D"], correct: 0, category: "Deduktif" },

    // Pengetahuan Umum (9) - science, world, calendar
    { id: 334, text: "Bulan ke-8 dalam kalender Masehi adalah...", options: ["Juli", "Agustus", "September", "Oktober"], correct: 1, category: "Pengetahuan Umum" },
    { id: 335, text: "Negara manakah yang memiliki ibu kota Canberra?", options: ["Selandia Baru", "Kanada", "Australia", "Inggris"], correct: 2, category: "Pengetahuan Umum" },
    { id: 336, text: "Jika hari ini adalah hari Kamis, hari apakah 5 hari yang lalu?", options: ["Sabtu", "Minggu", "Senin", "Selasa"], correct: 1, category: "Pengetahuan Umum" },
    { id: 337, text: "Planet terdekat kedua dari Matahari adalah...", options: ["Merkurius", "Venus", "Bumi", "Mars"], correct: 1, category: "Pengetahuan Umum" },
    { id: 338, text: "Berapakah jumlah hari dalam 1 tahun kabisat?", options: ["365 hari", "366 hari", "364 hari", "360 hari"], correct: 1, category: "Pengetahuan Umum" },
    { id: 339, text: "Zat manakah yang paling melimpah di atmosfer Bumi?", options: ["Oksigen", "Nitrogen", "Karbon Dioksida", "Hidrogen"], correct: 1, category: "Pengetahuan Umum" },
    { id: 340, text: "Samudra terluas di dunia adalah...", options: ["Samudra Atlantik", "Samudra Hindia", "Samudra Pasifik", "Samudra Arktik"], correct: 2, category: "Pengetahuan Umum" },
    { id: 341, text: "Suhu mendidih air pada tekanan atmosfer standar adalah...", options: ["80°C", "90°C", "100°C", "110°C"], correct: 2, category: "Pengetahuan Umum" },
    { id: 342, text: "Hewan manakah yang dikenal sebagai satu-satunya mamalia yang bisa terbang secara aktif?", options: ["Burung Hantu", "Kelelawar", "Tupai Terbang", "Elang"], correct: 1, category: "Pengetahuan Umum" },

    // Perhatian Detail (8) - consistency, matching
    { id: 343, text: "Bandingkan dua angka berikut: 8907314256 dan 8907314526. Apakah kedua angka ini identik?", options: ["Ya, identik", "Tidak, berbeda di digit ke-8 dan 9", "Tidak, berbeda di digit ke-5", "Tidak, jumlah digit berbeda"], correct: 1, category: "Perhatian terhadap detail" },
    { id: 344, text: "Berapa banyak huruf 'e' dalam kata 'K E T E L I T I A N'?", options: ["1", "2", "3", "4"], correct: 1, category: "Perhatian terhadap detail" },
    { id: 345, text: "Manakah pasangan nama berikut yang mengalami kesalahan penulisan (tidak sama)?", options: ["John Smith & John Smith", "Elizabeth Taylor & Elisabeth Taylor", "Michael Jordan & Michael Jordan", "David Beckham & David Beckham"], correct: 1, category: "Perhatian terhadap detail" },
    { id: 346, text: "Berapa banyak angka 7 dalam barisan angka ini: 723789714775?", options: ["3", "4", "5", "6"], correct: 2, category: "Perhatian terhadap detail" },
    { id: 347, text: "Periksa deretan kode ini: AX-902, AX-902, AX-920, AX-902. Berapa kode yang tidak konsisten (berbeda dari AX-902)?", options: ["0", "1", "2", "3"], correct: 1, category: "Perhatian terhadap detail" },
    { id: 348, text: "Manakah dari alamat surel berikut yang memiliki format penulisan karakter domain yang tidak sama dengan yang lain?", options: ["user@karakter.ku", "user@karakt3r.ku", "user@karakter.ku", "user@karakter.ku"], correct: 1, category: "Perhatian terhadap detail" },
    { id: 349, text: "Jika Anda mencocokkan kata 'ADMINISTRATOR' dengan 'ADMNISTRATOR', manakah huruf yang hilang pada kata kedua?", options: ["Huruf I pertama", "Huruf I kedua", "Huruf R pertama", "Huruf A kedua"], correct: 0, category: "Perhatian terhadap detail" },
    { id: 350, text: "Bandingkan string kode berikut: '9aB8cDe' dan '9aB8cDe'. Apakah keduanya identik?", options: ["Ya, identik secara tepat", "Tidak, berbeda huruf kapital", "Tidak, berbeda di karakter angka", "Tidak, berbeda di karakter terakhir"], correct: 0, category: "Perhatian terhadap detail" }
];

const wptCategories = {
    'rendah': {
        label: 'Rendah',
        description: 'Menunjukkan kemampuan pemecahan masalah praktis dasar. Sangat cocok untuk posisi operasional, teknis dasar, atau pekerjaan manual yang membutuhkan kepatuhan pada instruksi terstruktur.',
        color: '#f87171'
    },
    'sedang': {
        label: 'Sedang',
        description: 'Menunjukkan kemampuan kognitif rata-rata yang baik dalam memproses informasi umum dan koordinasi tugas sehari-hari. Sangat cocok untuk administrasi rutin dan interaksi pelayanan pelanggan dasar.',
        color: '#facc15'
    },
    'cukup_tinggi': {
        label: 'Cukup Tinggi',
        description: 'Menunjukkan kemampuan koordinasi, pengawasan, dan penalaran teknis yang solid. Mampu memecahkan masalah semi-kompleks dan mengelola tim operasional kecil.',
        color: '#60a5fa'
    },
    'tinggi': {
        label: 'Tinggi',
        description: 'Menunjukkan tingkat penalaran analitis, logika, dan pemecahan masalah yang tinggi. Sangat cocok untuk posisi profesional, spesialis analisis, atau instruktur.',
        color: '#4ade80'
    },
    'sangat_tinggi': {
        label: 'Sangat Tinggi',
        description: 'Menunjukkan kapasitas kognitif luar biasa, pemikiran strategis visioner, serta analisis tingkat tinggi. Sangat cocok untuk kepemimpinan puncak atau riset lanjutan.',
        color: '#c084fc'
    }
};

const iqCategories = {
    'dibawah': {
        label: 'Di Bawah Rata-rata',
        description: 'Skor Anda menunjukkan area yang dapat dikembangkan lebih lanjut. Kecerdasan bukan hanya tentang tes — banyak bentuk kecerdasan lain seperti kecerdasan emosional, sosial, dan kreatif yang tidak diukur di sini.',
        tips: 'Tips: Latih kemampuan berpikir logis dengan puzzle dan permainan asah otak. Membaca buku secara rutin dapat meningkatkan kemampuan verbal. Cobalah aplikasi brain training untuk melatih memori dan penalaran.',
        color: '#f87171'
    },
    'ratarata': {
        label: 'Rata-rata',
        description: 'Skor Anda berada dalam rentang rata-rata populasi. Ini menunjukkan kemampuan kognitif yang solid dan seimbang. Mayoritas populasi berada dalam rentang ini.',
        tips: 'Tips: Terus kembangkan kemampuan Anda dengan tantangan intelektual baru. Pelajari keterampilan baru, ikuti kursus online, dan tetap aktif secara mental. Pertimbangkan untuk mempelajari bahasa baru atau instrumen musik.',
        color: '#facc15'
    },
    'diatas': {
        label: 'Di Atas Rata-rata',
        description: 'Skor Anda di atas rata-rata populasi! Anda memiliki kemampuan penalaran dan pemecahan masalah yang baik. Anda cenderung cepat memahami konsep baru dan mengenali pola.',
        tips: 'Tips: Manfaatkan kecerdasan Anda dengan tantangan yang lebih kompleks. Pertimbangkan bidang STEM, analisis data, atau strategis. Mentoring orang lain juga cara bagus untuk mengasah kemampuan berpikir Anda.',
        color: '#4ade80'
    },
    'superior': {
        label: 'Superior',
        description: 'Skor Anda berada dalam kategori superior! Anda memiliki kemampuan intelektual yang luar biasa. Hanya sekitar 7% populasi yang mencapai level ini.',
        tips: 'Tips: Anda memiliki potensi luar biasa. Pertimbangkan karir di bidang penelitian, inovasi, atau kepemimpinan strategis. Tantang diri Anda dengan proyek yang kompleks dan bermakna.',
        color: '#60a5fa'
    },
    'gifted': {
        label: 'Sangat Superior (Gifted)',
        description: 'Selamat! Skor Anda berada dalam kategori gifted — sangat superior! Hanya sekitar 2% populasi yang mencapai level ini. Anda memiliki kemampuan analitis dan penalaran yang sangat luar biasa.',
        tips: 'Tips: Anda memiliki bakat intelektual yang langka. Gunakan untuk membuat dampak positif di dunia. Pertimbangkan riset inovatif, entrepreneurship, atau bidang yang membutuhkan pemecahan masalah tingkat tinggi.',
        color: '#c084fc'
    }
};

// ===========================
// BIG FIVE (OCEAN) DATA
// ===========================
const bigfiveQuestions = [
    // O - Openness to Experience (10 questions)
    { id: 401, text: "Saya memiliki imajinasi yang sangat aktif dan sering berkhayal tentang hal-hal baru.", dimension: "O", direction: 1 },
    { id: 402, text: "Saya tertarik pada seni, musik, atau sastra dan sering mengapresiasi keindahan.", dimension: "O", direction: 1 },
    { id: 403, text: "Saya suka mencoba makanan baru, mengunjungi tempat baru, dan mengalami pengalaman yang tidak biasa.", dimension: "O", direction: 1 },
    { id: 404, text: "Saya sering memikirkan tentang filosofi hidup, makna eksistensi, dan ide-ide abstrak.", dimension: "O", direction: 1 },
    { id: 405, text: "Saya lebih suka rutinitas yang sudah terbukti berhasil daripada bereksperimen dengan cara baru.", dimension: "O", direction: -1 },
    { id: 406, text: "Saya senang mempelajari hal-hal baru meskipun tidak berhubungan langsung dengan pekerjaan saya.", dimension: "O", direction: 1 },
    { id: 407, text: "Saya merasa tidak nyaman dengan ide-ide yang terlalu tidak konvensional atau radikal.", dimension: "O", direction: -1 },
    { id: 408, text: "Saya sering mencari perspektif berbeda dan mempertimbangkan sudut pandang yang berlawanan.", dimension: "O", direction: 1 },
    { id: 409, text: "Saya lebih suka hal-hal yang praktis dan konkret daripada konsep yang abstrak.", dimension: "O", direction: -1 },
    { id: 410, text: "Saya sangat kreatif dan sering menghasilkan ide-ide orisinal.", dimension: "O", direction: 1 },

    // C - Conscientiousness (10 questions)
    { id: 411, text: "Saya selalu membuat rencana sebelum memulai pekerjaan dan mengikutinya dengan disiplin.", dimension: "C", direction: 1 },
    { id: 412, text: "Saya sangat terorganisir — ruang kerja dan jadwal saya selalu tertata rapi.", dimension: "C", direction: 1 },
    { id: 413, text: "Saya sering menunda-nunda pekerjaan hingga mendekati tenggat waktu.", dimension: "C", direction: -1 },
    { id: 414, text: "Saya selalu berusaha menyelesaikan tugas dengan kualitas terbaik, bahkan jika butuh waktu lebih lama.", dimension: "C", direction: 1 },
    { id: 415, text: "Saya dapat diandalkan — jika saya berjanji sesuatu, saya pasti menepatinya.", dimension: "C", direction: 1 },
    { id: 416, text: "Saya cenderung ceroboh dan sering melewatkan detail kecil.", dimension: "C", direction: -1 },
    { id: 417, text: "Saya memiliki disiplin diri yang kuat dan mampu menahan godaan.", dimension: "C", direction: 1 },
    { id: 418, text: "Saya bertindak secara impulsif tanpa banyak berpikir panjang.", dimension: "C", direction: -1 },
    { id: 419, text: "Saya menetapkan tujuan jangka panjang dan bekerja secara konsisten untuk mencapainya.", dimension: "C", direction: 1 },
    { id: 420, text: "Saya sangat teliti dan memperhatikan setiap detail dalam pekerjaan saya.", dimension: "C", direction: 1 },

    // E - Extraversion (10 questions)
    { id: 421, text: "Saya merasa berenergi dan bersemangat saat berada di sekitar banyak orang.", dimension: "E", direction: 1 },
    { id: 422, text: "Saya suka menjadi pusat perhatian dalam situasi sosial.", dimension: "E", direction: 1 },
    { id: 423, text: "Saya lebih memilih menghabiskan waktu sendirian daripada di keramaian.", dimension: "E", direction: -1 },
    { id: 424, text: "Saya mudah memulai percakapan dengan orang asing.", dimension: "E", direction: 1 },
    { id: 425, text: "Saya cenderung pendiam dan jarang berbicara dalam kelompok besar.", dimension: "E", direction: -1 },
    { id: 426, text: "Saya memiliki banyak teman dan lingkaran sosial yang luas.", dimension: "E", direction: 1 },
    { id: 427, text: "Saya merasa kelelahan setelah bersosialisasi dan perlu waktu sendiri untuk pemulihan.", dimension: "E", direction: -1 },
    { id: 428, text: "Saya suka menghadiri pesta, acara sosial, dan pertemuan kelompok.", dimension: "E", direction: 1 },
    { id: 429, text: "Saya menunjukkan emosi positif secara terbuka — sering tertawa dan bersemangat.", dimension: "E", direction: 1 },
    { id: 430, text: "Saya lebih suka bekerja sendiri daripada dalam tim.", dimension: "E", direction: -1 },

    // A - Agreeableness (10 questions)
    { id: 431, text: "Saya selalu berusaha membantu orang lain, bahkan jika merugikan diri sendiri.", dimension: "A", direction: 1 },
    { id: 432, text: "Saya percaya bahwa kebanyakan orang pada dasarnya jujur dan berniat baik.", dimension: "A", direction: 1 },
    { id: 433, text: "Saya tidak segan-segan mengkritik orang lain jika saya merasa mereka salah.", dimension: "A", direction: -1 },
    { id: 434, text: "Saya mudah memaafkan dan tidak menyimpan dendam.", dimension: "A", direction: 1 },
    { id: 435, text: "Saya lebih mengutamakan kepentingan bersama daripada kepentingan pribadi.", dimension: "A", direction: 1 },
    { id: 436, text: "Saya cenderung curiga terhadap niat orang lain.", dimension: "A", direction: -1 },
    { id: 437, text: "Saya menghindari konflik dan lebih suka mengalah demi kedamaian.", dimension: "A", direction: 1 },
    { id: 438, text: "Saya memiliki empati yang tinggi dan mudah merasakan perasaan orang lain.", dimension: "A", direction: 1 },
    { id: 439, text: "Saya terkadang bersikap kasar atau sarkastik terhadap orang lain.", dimension: "A", direction: -1 },
    { id: 440, text: "Saya senang bekerja sama dan berkolaborasi dengan orang lain.", dimension: "A", direction: 1 },

    // N - Neuroticism (10 questions)
    { id: 441, text: "Saya sering merasa cemas atau khawatir tentang berbagai hal.", dimension: "N", direction: 1 },
    { id: 442, text: "Saya mudah merasa stres dan kewalahan dalam situasi yang menekan.", dimension: "N", direction: 1 },
    { id: 443, text: "Suasana hati saya cukup stabil dan jarang berubah-ubah secara drastis.", dimension: "N", direction: -1 },
    { id: 444, text: "Saya sering merasa sedih atau murung tanpa alasan yang jelas.", dimension: "N", direction: 1 },
    { id: 445, text: "Saya tetap tenang dan tidak mudah panik dalam situasi krisis.", dimension: "N", direction: -1 },
    { id: 446, text: "Saya sering merasa tidak aman atau khawatir tentang apa yang orang lain pikirkan tentang saya.", dimension: "N", direction: 1 },
    { id: 447, text: "Saya mudah marah atau tersinggung oleh hal-hal kecil.", dimension: "N", direction: 1 },
    { id: 448, text: "Saya mampu mengendalikan emosi saya dengan baik, bahkan dalam tekanan.", dimension: "N", direction: -1 },
    { id: 449, text: "Saya sering meragukan kemampuan diri sendiri dan merasa tidak cukup baik.", dimension: "N", direction: 1 },
    { id: 450, text: "Saya cenderung melihat sisi negatif dari suatu situasi.", dimension: "N", direction: 1 }
];

const bigfiveDimensions = {
    'O': {
        name: 'Openness to Experience',
        nameId: 'Keterbukaan terhadap Pengalaman',
        color: '#f59e0b',
        icon: '🎨',
        highLabel: 'Sangat Terbuka & Kreatif',
        lowLabel: 'Praktis & Konvensional',
        highDesc: 'Anda memiliki imajinasi yang kaya, keingintahuan intelektual yang tinggi, dan sangat menghargai seni serta keindahan. Anda senang bereksperimen dengan ide-ide baru dan terbuka terhadap pengalaman yang tidak biasa. Anda berpikir secara inovatif dan kreatif.',
        lowDesc: 'Anda cenderung praktis, realistis, dan lebih menyukai hal-hal yang sudah terbukti. Anda menghargai tradisi, rutinitas, dan pendekatan yang konvensional. Anda memiliki fokus yang kuat pada hal-hal konkret.',
        midDesc: 'Anda memiliki keseimbangan antara kreativitas dan kepraktisan. Anda terbuka terhadap ide-ide baru sambil tetap menghargai pendekatan yang sudah terbukti.',
        highStrengths: 'Kreatif, imajinatif, intelektual, berwawasan luas, adaptif terhadap perubahan',
        highWeaknesses: 'Bisa terlalu idealis, kurang fokus pada detail praktis, mudah bosan dengan rutinitas',
        lowStrengths: 'Stabil, konsisten, dapat diandalkan, fokus pada realitas, efisien dalam rutinitas',
        lowWeaknesses: 'Kurang fleksibel, resistensi terhadap perubahan, cenderung menghindari risiko',
        highCareers: 'Seniman, Desainer, Peneliti, Penulis, Filosof, Inovator Produk, Entrepreneur Kreatif, Arsitek',
        lowCareers: 'Akuntan, Administrator, Auditor, Manajer Operasional, Insinyur Proses, Quality Control'
    },
    'C': {
        name: 'Conscientiousness',
        nameId: 'Kehati-hatian & Kedisiplinan',
        color: '#3b82f6',
        icon: '📋',
        highLabel: 'Sangat Disiplin & Terorganisir',
        lowLabel: 'Fleksibel & Spontan',
        highDesc: 'Anda adalah orang yang sangat terorganisir, disiplin, dan berorientasi pada tujuan. Anda memiliki kontrol diri yang kuat, bekerja secara sistematis, dan sangat teliti. Anda selalu menyelesaikan apa yang Anda mulai.',
        lowDesc: 'Anda cenderung fleksibel, spontan, dan lebih menyukai kebebasan daripada struktur kaku. Anda bisa multitasking dan beradaptasi cepat, meskipun terkadang kurang terorganisir.',
        midDesc: 'Anda memiliki tingkat kedisiplinan yang seimbang — cukup terorganisir untuk menyelesaikan tugas penting sambil tetap fleksibel untuk beradaptasi.',
        highStrengths: 'Terorganisir, disiplin, dapat diandalkan, efisien, berorientasi pada pencapaian',
        highWeaknesses: 'Perfeksionis, kaku, sulit santai, terlalu kritis terhadap diri sendiri',
        lowStrengths: 'Fleksibel, spontan, adaptif, santai, terbuka terhadap perubahan mendadak',
        lowWeaknesses: 'Kurang terorganisir, suka menunda, tidak konsisten, ceroboh dalam detail',
        highCareers: 'Project Manager, Akuntan, Auditor, Peneliti, Dokter Bedah, Pengacara, Data Analyst, Quality Assurance',
        lowCareers: 'Seniman Freelance, Event Planner, Travel Blogger, Entertainer, Startup Founder'
    },
    'E': {
        name: 'Extraversion',
        nameId: 'Ekstraversi',
        color: '#ef4444',
        icon: '🎉',
        highLabel: 'Sangat Ekstrovert & Energik',
        lowLabel: 'Introvert & Reflektif',
        highDesc: 'Anda sangat energik dalam interaksi sosial, suka menjadi pusat perhatian, dan pandai berkomunikasi. Anda memiliki antusiasme tinggi, mudah bergaul, dan mendapatkan energi dari interaksi sosial.',
        lowDesc: 'Anda adalah tipe introspektif yang lebih menikmati kesendirian atau interaksi dalam kelompok kecil. Anda berpikir mendalam sebelum bertindak dan memiliki kehidupan batin yang kaya.',
        midDesc: 'Anda seorang ambivert — nyaman dalam situasi sosial maupun saat sendiri. Anda bisa menyesuaikan diri tergantung konteks.',
        highStrengths: 'Komunikatif, energik, karismatik, optimis, pandai networking',
        highWeaknesses: 'Terlalu dominan, kesulitan bekerja sendiri, bisa impulsif, butuh validasi sosial',
        lowStrengths: 'Reflektif, pendengar yang baik, mandiri, fokus, berpikir mendalam',
        lowWeaknesses: 'Terkesan dingin, kesulitan networking, kurang asertif, menghindari spotlight',
        highCareers: 'Sales Manager, Public Relations, MC/Presenter, Politisi, Marketing Director, Konsultan, Trainer',
        lowCareers: 'Programmer, Penulis, Peneliti, Analis Data, Desainer UX, Akuntan, Arsiparis'
    },
    'A': {
        name: 'Agreeableness',
        nameId: 'Keramahan & Kerja Sama',
        color: '#10b981',
        icon: '🤝',
        highLabel: 'Sangat Ramah & Empatik',
        lowLabel: 'Independen & Kompetitif',
        highDesc: 'Anda sangat peduli terhadap orang lain, mudah percaya, kooperatif, dan altruistik. Anda menghindari konflik dan selalu berusaha menciptakan harmoni dalam hubungan. Empati Anda sangat tinggi.',
        lowDesc: 'Anda cenderung kompetitif, skeptis, dan mengutamakan kepentingan sendiri. Anda tidak segan mengkritik dan bersikap tegas, yang membuat Anda efektif sebagai pemimpin atau negosiator.',
        midDesc: 'Anda memiliki keseimbangan antara empati dan ketegasan. Anda bisa bekerja sama dengan baik sambil tetap mampu menegakkan batas-batas pribadi.',
        highStrengths: 'Empatik, kooperatif, dapat dipercaya, suportif, pemaaf',
        highWeaknesses: 'Terlalu mengalah, sulit mengatakan tidak, mudah dimanfaatkan, menghindari konflik',
        lowStrengths: 'Tegas, objektif, kritis, independen, negosiator yang kuat',
        lowWeaknesses: 'Kurang empatik, sulit bekerja sama, terkesan tidak peduli, konfrontatif',
        highCareers: 'Konselor, Psikolog, Perawat, Guru, Pekerja Sosial, HR Manager, Mediator, Terapis',
        lowCareers: 'CEO, Pengacara, Analis Keuangan, Detektif, Ilmuwan, Kritikus, Jurnalis Investigasi'
    },
    'N': {
        name: 'Neuroticism',
        nameId: 'Neurotisisme (Stabilitas Emosional)',
        color: '#8b5cf6',
        icon: '🌊',
        highLabel: 'Sensitif & Emosional',
        lowLabel: 'Sangat Stabil & Tenang',
        highDesc: 'Anda cenderung lebih sering mengalami emosi negatif seperti kecemasan, kekhawatiran, dan mood swing. Anda sangat sensitif terhadap stres dan tekanan. Namun, sensitivitas ini juga membuat Anda lebih peka terhadap potensi masalah.',
        lowDesc: 'Anda memiliki stabilitas emosional yang sangat baik. Anda tetap tenang di bawah tekanan, tidak mudah cemas, dan mampu mengelola stres dengan efektif. Anda adalah pilar ketenangan bagi orang-orang di sekitar Anda.',
        midDesc: 'Anda memiliki tingkat emosionalitas yang seimbang — mampu merasakan emosi secara sehat tanpa terlalu dikuasai oleh emosi negatif.',
        highStrengths: 'Peka terhadap masalah, waspada, empati mendalam, motivasi perbaikan diri',
        highWeaknesses: 'Mudah cemas, mood swing, rentan stres, overthinking, rentan burnout',
        lowStrengths: 'Tenang, tangguh, stabil, dapat diandalkan di bawah tekanan, rasional',
        lowWeaknesses: 'Kurang peka terhadap emosi orang lain, terlalu santai, mungkin mengabaikan sinyal peringatan',
        highCareers: 'Seniman, Penulis, Konselor (dengan pengelolaan diri), Peneliti Kualitatif, Kreator Konten',
        lowCareers: 'Pilot, Dokter UGD, Manajer Krisis, Trader Saham, Pemimpin Militer, Negosiator, Diplomat'
    }
};

// ===========================
// RIASEC (HOLLAND INTERESTS) DATA
// ===========================
const riasecQuestions = [
    // R - Realistic (6 questions)
    { id: 501, text: "Saya suka merakit atau memperbaiki peralatan mekanis atau elektronik.", dimension: "R", direction: 1 },
    { id: 502, text: "Saya menyukai pekerjaan yang menggunakan tangan atau peralatan fisik secara langsung.", dimension: "R", direction: 1 },
    { id: 503, text: "Saya tertarik dengan aktivitas luar ruangan seperti berkebun, pertamanan, atau pertanian.", dimension: "R", direction: 1 },
    { id: 504, text: "Saya suka mengoperasikan mesin, instrumen teknis, atau kendaraan bermotor.", dimension: "R", direction: 1 },
    { id: 505, text: "Saya lebih menyukai proyek praktis yang menghasilkan produk fisik atau benda konkret.", dimension: "R", direction: 1 },
    { id: 506, text: "Saya menyukai pemecahan masalah teknis secara langsung di lapangan.", dimension: "R", direction: 1 },

    // I - Investigative (6 questions)
    { id: 507, text: "Saya senang memecahkan teka-teki logika, teka-teki silang angka, atau matematika yang rumit.", dimension: "I", direction: 1 },
    { id: 508, text: "Saya suka melakukan eksperimen ilmiah atau penelitian di laboratorium.", dimension: "I", direction: 1 },
    { id: 509, text: "Saya senang mencari tahu bagaimana suatu sistem, alat, atau fenomena bekerja secara mendalam.", dimension: "I", direction: 1 },
    { id: 510, text: "Saya suka membaca artikel tentang sains, biokimia, teknologi terbaru, atau teori ilmiah.", dimension: "I", direction: 1 },
    { id: 511, text: "Saya senang menganalisis data, statistik, atau informasi untuk menarik kesimpulan rasional.", dimension: "I", direction: 1 },
    { id: 512, text: "Saya memiliki rasa ingin tahu yang tinggi tentang fenomena alam dan sains.", dimension: "I", direction: 1 },

    // A - Artistic (6 questions)
    { id: 513, text: "Saya suka mengekspresikan diri melalui seni lukis, musik, sastra, teater, atau fotografi.", dimension: "A", direction: 1 },
    { id: 514, text: "Saya senang mendesain pakaian, poster, dekorasi ruangan, grafis, atau situs web.", dimension: "A", direction: 1 },
    { id: 515, text: "Saya suka menulis cerita pendek, puisi, naskah drama, atau menciptakan lagu orisinal.", dimension: "A", direction: 1 },
    { id: 516, text: "Saya lebih menyukai pekerjaan yang memberi kebebasan berkreasi tanpa aturan yang kaku.", dimension: "A", direction: 1 },
    { id: 517, text: "Saya sangat menghargai nilai keindahan, estetika, dan ekspresi diri dalam kehidupan.", dimension: "A", direction: 1 },
    { id: 518, text: "Saya suka memikirkan ide-ide imajinatif, abstrak, dan tidak konvensional.", dimension: "A", direction: 1 },

    // S - Social (6 questions)
    { id: 519, text: "Saya merasa puas secara emosional ketika membantu orang lain mengatasi masalah mereka.", dimension: "S", direction: 1 },
    { id: 520, text: "Saya suka mengajar, menjelaskan materi pelajaran, atau melatih keterampilan orang lain.", dimension: "S", direction: 1 },
    { id: 521, text: "Saya senang bekerja dalam kelompok dan menjalin hubungan interpersonal yang erat.", dimension: "S", direction: 1 },
    { id: 522, text: "Saya tertarik untuk aktif dalam kegiatan sukarelawan, amal, atau kemanusiaan.", dimension: "S", direction: 1 },
    { id: 523, text: "Saya dikenal sebagai pendengar yang baik dan berempati saat orang lain bercerita.", dimension: "S", direction: 1 },
    { id: 524, text: "Saya suka memandu atau memberi saran kepada orang lain untuk pengembangan diri mereka.", dimension: "S", direction: 1 },

    // E - Enterprising (6 questions)
    { id: 525, text: "Saya suka memimpin suatu tim, kelompok kerja, atau mengarahkan proyek bersama.", dimension: "E", direction: 1 },
    { id: 526, text: "Saya senang membujuk, mempengaruhi, atau bernegosiasi dengan orang lain agar menyetujui ide saya.", dimension: "E", direction: 1 },
    { id: 527, text: "Saya sangat tertarik untuk memulai bisnis sendiri, berwirausaha, atau berdagang.", dimension: "E", direction: 1 },
    { id: 528, text: "Saya menyukai tantangan mengambil risiko finansial atau manajerial demi keuntungan besar.", dimension: "E", direction: 1 },
    { id: 529, text: "Saya bersemangat untuk mencapai posisi kepemimpinan yang tinggi atau status sosial bergengsi.", dimension: "E", direction: 1 },
    { id: 530, text: "Saya suka melakukan presentasi, pidato, atau memasarkan produk di depan khalayak umum.", dimension: "E", direction: 1 },

    // C - Conventional (6 questions)
    { id: 531, text: "Saya suka mengorganisir berkas, arsip, file, atau database agar tersusun sangat rapi.", dimension: "C", direction: 1 },
    { id: 532, text: "Saya senang mengolah angka, data keuangan, pencatatan transaksi, atau statistik detail.", dimension: "C", direction: 1 },
    { id: 533, text: "Saya lebih menyukai pekerjaan yang memiliki prosedur, aturan, dan instruksi tertulis yang jelas.", dimension: "C", direction: 1 },
    { id: 534, text: "Saya sangat memperhatikan ketelitian, akurasi, dan kerapian dalam menyusun laporan tertulis.", dimension: "C", direction: 1 },
    { id: 535, text: "Saya menyukai rutinitas kerja harian yang terstruktur dan terencana dengan baik.", dimension: "C", direction: 1 },
    { id: 536, text: "Saya merasa nyaman mengelola administrasi logistik, inventaris, atau pembukuan data.", dimension: "C", direction: 1 }
];

const riasecDimensions = {
    'R': {
        name: 'Realistic',
        nameId: 'Realistis (Praktis & Fisik)',
        color: '#ef4444',
        icon: '🛠️',
        desc: 'Menyukai pekerjaan praktis yang membutuhkan penggunaan alat, mesin, atau kekuatan fisik. Tipe ini lebih menyukai interaksi dengan objek nyata, hewan, atau alam terbuka daripada bekerja dengan ide-ide teoritis atau banyak interaksi sosial.',
        strengths: 'Keterampilan mekanik, ketahanan fisik, pemecahan masalah teknis langsung, kerja praktis lapangan.',
        careers: 'Teknisi, Insinyur Mesin, Mekanik, Pilot, Ahli Pertanian, Operator Alat Berat, Dokter Hewan, Spesialis IT Support'
    },
    'I': {
        name: 'Investigative',
        nameId: 'Investigatif (Analitis & Ilmiah)',
        color: '#3b82f6',
        icon: '🔬',
        desc: 'Menyukai pekerjaan analitis, teoritis, dan berfokus pada penelitian. Tipe ini gemar mencari fakta, memecahkan teka-teki rumit, menyelidiki fenomena ilmiah, dan bekerja secara independen dalam mengolah konsep abstrak.',
        strengths: 'Pemikiran kritis, analisis data mendalam, pemecahan masalah matematika/logika, riset akademis.',
        careers: 'Peneliti, Ilmuwan, Dokter Medis, Data Scientist, Analis Sistem, Software Developer, Arkeolog, Kriminolog'
    },
    'A': {
        name: 'Artistic',
        nameId: 'Artistik (Kreatif & Ekspresif)',
        color: '#8b5cf6',
        icon: '🎨',
        desc: 'Menyukai pekerjaan yang memberi ruang bagi kebebasan berkreasi, orisinalitas, dan imajinasi. Tipe ini tidak menyukai struktur kerja yang kaku atau rutinitas berulang, dan lebih memilih mengekspresikan diri lewat media artistik.',
        strengths: 'Kreativitas tinggi, pemikiran lateral, komunikasi visual/verbal ekspresif, apresiasi estetika.',
        careers: 'Desainer Grafis, Seniman Visual, Penulis Kreatif, Arsitek, Copywriter, Fotografer, Pengarah Kreatif, Musisi'
    },
    'S': {
        name: 'Social',
        nameId: 'Sosial (Peduli & Menolong)',
        color: '#10b981',
        icon: '🤝',
        desc: 'Menyukai pekerjaan yang berfokus pada melayani, membantu, mendidik, atau menyembuhkan orang lain. Tipe ini mengutamakan interaksi interpersonal, kerjasama tim, serta kesejahteraan sosial komunitas.',
        strengths: 'Empati mendalam, komunikasi interpersonal, kemampuan mengajar, mediasi konflik, kolaborasi.',
        careers: 'Guru/Dosen, Konselor/Psikolog, Perawat, Pekerja Sosial, Spesialis Hubungan Pelanggan, Koordinator NGO, HRD'
    },
    'E': {
        name: 'Enterprising',
        nameId: 'Enterprising (Persuasif & Bisnis)',
        color: '#f59e0b',
        icon: '📈',
        desc: 'Menyukai pekerjaan yang menuntut kemampuan kepemimpinan, negosiasi, dan pengambilan keputusan cepat. Tipe ini sangat kompetitif, percaya diri, persuasif, serta berorientasi pada pencapaian bisnis atau politik.',
        strengths: 'Jiwa kepemimpinan, kemampuan negosiasi, komunikasi persuasif, manajemen risiko, ambisi tinggi.',
        careers: 'Wirausahawan/Startup Founder, Manajer Pemasaran, Agen Penjualan, Politisi, Pengacara, Direktur Bisnis, Konsultan Strategis'
    },
    'C': {
        name: 'Conventional',
        nameId: 'Konvensional (Terorganisir & Administratif)',
        color: '#6b7280',
        icon: '📋',
        desc: 'Menyukai pekerjaan terstruktur dengan aturan, prosedur, dan data numerik yang jelas. Tipe ini sangat menghargai keteraturan, ketelitian, efisiensi kerja, serta pengarsipan data secara metodis.',
        strengths: 'Akurasi & ketelitian tinggi, organisasi dokumen, kepatuhan prosedur, manajemen waktu & efisiensi.',
        careers: 'Akuntan, Auditor Internal, Sekretaris Eksekutif, Analis Keuangan, Database Administrator, Spesialis Kepatuhan, Petugas Administrasi'
    }
};

// ===========================
// PAPI KOSTICK DATA
// ===========================
const papiQuestions = [
    {id:201, textA:"Saya adalah pekerja keras.", textB:"Saya tidak mudah murung.", dimA:"G", dimB:"E"},
    {id:202, textA:"Saya ingin bekerja lebih baik daripada orang lain.", textB:"Saya ingin menyelesaikan semua pekerjaan sampai tuntas.", dimA:"A", dimB:"N"},
    {id:203, textA:"Saya suka memimpin rapat atau diskusi kelompok.", textB:"Saya suka bekerja dengan detail dan angka.", dimA:"L", dimB:"D"},
    {id:204, textA:"Saya senang membuat perencanaan terlebih dahulu.", textB:"Saya menyukai perubahan dan variasi dalam pekerjaan.", dimA:"C", dimB:"Z"},
    {id:205, textA:"Saya ingin dikenal dan diperhatikan orang banyak.", textB:"Saya ingin dekat dengan rekan kerja saya.", dimA:"X", dimB:"O"},
    {id:206, textA:"Saya suka bekerja dengan cepat dan penuh energi.", textB:"Saya suka menganalisis teori dan konsep.", dimA:"T", dimB:"R"},
    {id:207, textA:"Saya ingin mengontrol dan mengarahkan orang lain.", textB:"Saya ingin menjadi bagian dari kelompok.", dimA:"P", dimB:"B"},
    {id:208, textA:"Saya mendukung keputusan atasan saya.", textB:"Saya suka bekerja dengan prosedur yang jelas.", dimA:"F", dimB:"W"},
    {id:209, textA:"Saya adalah orang yang penuh semangat.", textB:"Saya mudah bergaul dengan orang baru.", dimA:"V", dimB:"S"},
    {id:210, textA:"Saya tidak mudah marah pada orang lain.", textB:"Saya suka menolong rekan kerja saya.", dimA:"K", dimB:"O"},
    {id:211, textA:"Saya suka mengambil tanggung jawab besar.", textB:"Saya lebih suka mengikuti aturan yang sudah ada.", dimA:"I", dimB:"W"},
    {id:212, textA:"Saya ingin mencapai prestasi yang tinggi.", textB:"Saya suka tampil di depan banyak orang.", dimA:"A", dimB:"X"},
    {id:213, textA:"Saya selalu berusaha menyelesaikan tugas tepat waktu.", textB:"Saya suka bekerja dengan penuh semangat.", dimA:"N", dimB:"V"},
    {id:214, textA:"Saya menikmati pekerjaan yang membutuhkan ketelitian.", textB:"Saya senang mempengaruhi orang lain.", dimA:"D", dimB:"P"},
    {id:215, textA:"Saya suka hal-hal baru dan perubahan.", textB:"Saya seorang pekerja yang tekun.", dimA:"Z", dimB:"G"},
    {id:216, textA:"Saya mudah berteman dan menyukai kegiatan sosial.", textB:"Saya menyukai pekerjaan yang terorganisir.", dimA:"S", dimB:"C"},
    {id:217, textA:"Saya suka memimpin tim dalam proyek.", textB:"Saya mudah mengendalikan emosi.", dimA:"L", dimB:"E"},
    {id:218, textA:"Saya tidak mudah tersinggung oleh kritik.", textB:"Saya suka mengikuti instruksi dengan baik.", dimA:"K", dimB:"F"},
    {id:219, textA:"Saya suka bekerja cepat dan efisien.", textB:"Saya suka menganalisis informasi secara mendalam.", dimA:"T", dimB:"R"},
    {id:220, textA:"Saya ingin dihargai atas kontribusi saya.", textB:"Saya suka bekerja sama dalam kelompok.", dimA:"X", dimB:"B"},
    {id:221, textA:"Saya berusaha keras untuk mencapai target.", textB:"Saya menyukai stabilitas dalam pekerjaan.", dimA:"A", dimB:"W"},
    {id:222, textA:"Saya senang membuat keputusan sendiri.", textB:"Saya selalu menyelesaikan apa yang saya mulai.", dimA:"I", dimB:"N"},
    {id:223, textA:"Saya suka mengatur dan merencanakan pekerjaan.", textB:"Saya orang yang tidak cepat marah.", dimA:"C", dimB:"K"},
    {id:224, textA:"Saya suka pekerjaan yang bervariasi.", textB:"Saya suka memperhatikan detail kecil.", dimA:"Z", dimB:"D"},
    {id:225, textA:"Saya suka berinteraksi dengan banyak orang.", textB:"Saya suka mendukung keputusan pimpinan.", dimA:"S", dimB:"F"},
    {id:226, textA:"Saya penuh energi dalam bekerja.", textB:"Saya ingin memiliki hubungan dekat dengan kolega.", dimA:"V", dimB:"O"},
    {id:227, textA:"Saya suka memimpin dan mengarahkan orang lain.", textB:"Saya bekerja dengan penuh ketekunan.", dimA:"L", dimB:"G"},
    {id:228, textA:"Saya ingin mengendalikan jalannya suatu proyek.", textB:"Saya mudah beradaptasi dengan perubahan.", dimA:"P", dimB:"Z"},
    {id:229, textA:"Saya suka mengambil keputusan dengan cepat.", textB:"Saya suka menganalisis data sebelum bertindak.", dimA:"I", dimB:"R"},
    {id:230, textA:"Saya ingin diakui atas pencapaian saya.", textB:"Saya suka bekerja dengan teratur dan sistematis.", dimA:"X", dimB:"C"},
    {id:231, textA:"Saya berusaha bekerja dengan cepat.", textB:"Saya suka bergabung dengan kelompok.", dimA:"T", dimB:"B"},
    {id:232, textA:"Saya selalu menyelesaikan pekerjaan dengan tuntas.", textB:"Saya mudah mengendalikan perasaan saya.", dimA:"N", dimB:"E"},
    {id:233, textA:"Saya suka pekerjaan yang menantang.", textB:"Saya suka membantu orang lain.", dimA:"A", dimB:"O"},
    {id:234, textA:"Saya suka bekerja secara mandiri.", textB:"Saya suka mengikuti prosedur yang berlaku.", dimA:"I", dimB:"W"},
    {id:235, textA:"Saya orang yang gigih dan tidak mudah menyerah.", textB:"Saya suka tampil menonjol.", dimA:"G", dimB:"X"},
    {id:236, textA:"Saya pandai mengatur pekerjaan.", textB:"Saya suka perubahan dalam rutinitas.", dimA:"C", dimB:"Z"},
    {id:237, textA:"Saya suka memimpin diskusi.", textB:"Saya suka mempelajari teori baru.", dimA:"L", dimB:"R"},
    {id:238, textA:"Saya suka mengendalikan situasi.", textB:"Saya suka bekerja dalam tim.", dimA:"P", dimB:"B"},
    {id:239, textA:"Saya bekerja dengan penuh semangat.", textB:"Saya teliti dalam setiap pekerjaan.", dimA:"V", dimB:"D"},
    {id:240, textA:"Saya tidak mudah tersinggung.", textB:"Saya mendukung kebijakan atasan.", dimA:"K", dimB:"F"},
    {id:241, textA:"Saya suka bergaul dan bersosialisasi.", textB:"Saya selalu menyelesaikan tugas sampai selesai.", dimA:"S", dimB:"N"},
    {id:242, textA:"Saya ingin berprestasi tinggi.", textB:"Saya mudah mengontrol emosi.", dimA:"A", dimB:"E"},
    {id:243, textA:"Saya suka mengambil keputusan.", textB:"Saya suka pekerjaan yang terstruktur.", dimA:"I", dimB:"C"},
    {id:244, textA:"Saya bekerja dengan kecepatan tinggi.", textB:"Saya menghargai hubungan dekat.", dimA:"T", dimB:"O"},
    {id:245, textA:"Saya suka hal baru dan inovatif.", textB:"Saya suka bekerja dengan data dan angka.", dimA:"Z", dimB:"D"},
    {id:246, textA:"Saya pekerja keras dan ulet.", textB:"Saya suka menjadi bagian dari kelompok.", dimA:"G", dimB:"B"},
    {id:247, textA:"Saya senang memimpin orang lain.", textB:"Saya orang yang tidak mudah marah.", dimA:"L", dimB:"K"},
    {id:248, textA:"Saya ingin diperhatikan orang banyak.", textB:"Saya suka mematuhi aturan.", dimA:"X", dimB:"W"},
    {id:249, textA:"Saya penuh energi dan antusias.", textB:"Saya suka merencanakan segala sesuatu.", dimA:"V", dimB:"C"},
    {id:250, textA:"Saya ingin mengendalikan orang lain.", textB:"Saya suka menganalisis masalah.", dimA:"P", dimB:"R"},
    {id:251, textA:"Saya mendukung keputusan pimpinan.", textB:"Saya suka bergaul.", dimA:"F", dimB:"S"},
    {id:252, textA:"Saya selalu menuntaskan pekerjaan.", textB:"Saya suka variasi dan perubahan.", dimA:"N", dimB:"Z"},
    {id:253, textA:"Saya bekerja dengan cepat.", textB:"Saya suka memimpin.", dimA:"T", dimB:"L"},
    {id:254, textA:"Saya suka berprestasi.", textB:"Saya suka detail.", dimA:"A", dimB:"D"},
    {id:255, textA:"Saya tidak mudah emosi.", textB:"Saya suka bekerja dalam kelompok.", dimA:"E", dimB:"B"},
    {id:256, textA:"Saya suka mengambil keputusan sendiri.", textB:"Saya pekerja keras.", dimA:"I", dimB:"G"},
    {id:257, textA:"Saya ingin dekat dengan rekan kerja.", textB:"Saya suka perubahan.", dimA:"O", dimB:"Z"},
    {id:258, textA:"Saya ingin tampil menonjol.", textB:"Saya suka mengikuti aturan.", dimA:"X", dimB:"W"},
    {id:259, textA:"Saya penuh semangat.", textB:"Saya tidak mudah marah.", dimA:"V", dimB:"K"},
    {id:260, textA:"Saya suka memimpin proyek.", textB:"Saya suka mendukung atasan.", dimA:"L", dimB:"F"},
    {id:261, textA:"Saya ingin mengendalikan situasi.", textB:"Saya teliti dan cermat.", dimA:"P", dimB:"D"},
    {id:262, textA:"Saya suka bersosialisasi.", textB:"Saya suka menganalisis.", dimA:"S", dimB:"R"},
    {id:263, textA:"Saya selalu menuntaskan tugas.", textB:"Saya suka bekerja terorganisir.", dimA:"N", dimB:"C"},
    {id:264, textA:"Saya bekerja cepat dan efisien.", textB:"Saya ingin berprestasi tinggi.", dimA:"T", dimB:"A"},
    {id:265, textA:"Saya pekerja keras.", textB:"Saya mudah mengendalikan emosi.", dimA:"G", dimB:"E"},
    {id:266, textA:"Saya suka membuat keputusan.", textB:"Saya suka hal baru.", dimA:"I", dimB:"Z"},
    {id:267, textA:"Saya ingin diakui.", textB:"Saya suka menolong orang.", dimA:"X", dimB:"O"},
    {id:268, textA:"Saya suka memimpin.", textB:"Saya suka bekerja dalam tim.", dimA:"L", dimB:"B"},
    {id:269, textA:"Saya ingin mengendalikan.", textB:"Saya suka mengikuti prosedur.", dimA:"P", dimB:"W"},
    {id:270, textA:"Saya penuh energi.", textB:"Saya suka merencanakan.", dimA:"V", dimB:"C"},
    {id:271, textA:"Saya mendukung atasan.", textB:"Saya suka detail.", dimA:"F", dimB:"D"},
    {id:272, textA:"Saya suka bergaul.", textB:"Saya tidak mudah tersinggung.", dimA:"S", dimB:"K"},
    {id:273, textA:"Saya selalu menuntaskan pekerjaan.", textB:"Saya suka menganalisis teori.", dimA:"N", dimB:"R"},
    {id:274, textA:"Saya bekerja dengan cepat.", textB:"Saya suka berprestasi.", dimA:"T", dimB:"A"},
    {id:275, textA:"Saya pekerja keras dan tekun.", textB:"Saya suka variasi.", dimA:"G", dimB:"Z"},
    {id:276, textA:"Saya suka membuat keputusan penting.", textB:"Saya ingin dekat dengan rekan.", dimA:"I", dimB:"O"},
    {id:277, textA:"Saya ingin diperhatikan.", textB:"Saya suka bekerja kelompok.", dimA:"X", dimB:"B"},
    {id:278, textA:"Saya suka memimpin rapat.", textB:"Saya mendukung keputusan atasan.", dimA:"L", dimB:"F"},
    {id:279, textA:"Saya suka mengarahkan orang.", textB:"Saya mudah mengendalikan emosi.", dimA:"P", dimB:"E"},
    {id:280, textA:"Saya penuh semangat bekerja.", textB:"Saya suka bekerja teratur.", dimA:"V", dimB:"C"},
    {id:281, textA:"Saya suka hal baru.", textB:"Saya suka detail.", dimA:"Z", dimB:"D"},
    {id:282, textA:"Saya suka bergaul banyak orang.", textB:"Saya suka mengikuti aturan.", dimA:"S", dimB:"W"},
    {id:283, textA:"Saya bekerja keras.", textB:"Saya suka menganalisis.", dimA:"G", dimB:"R"},
    {id:284, textA:"Saya selalu menuntaskan tugas.", textB:"Saya tidak mudah marah.", dimA:"N", dimB:"K"},
    {id:285, textA:"Saya bekerja cepat.", textB:"Saya ingin berprestasi.", dimA:"T", dimB:"A"},
    {id:286, textA:"Saya suka mengambil keputusan.", textB:"Saya suka memimpin.", dimA:"I", dimB:"L"},
    {id:287, textA:"Saya ingin diakui orang lain.", textB:"Saya suka menolong rekan.", dimA:"X", dimB:"O"},
    {id:288, textA:"Saya suka mengendalikan proyek.", textB:"Saya mendukung pimpinan.", dimA:"P", dimB:"F"},
    {id:289, textA:"Saya penuh energi dan aktif.", textB:"Saya bekerja dengan teliti.", dimA:"V", dimB:"D"},
    {id:290, textA:"Saya suka perubahan.", textB:"Saya suka bekerja kelompok.", dimA:"Z", dimB:"B"}
];

const papiAspects = {
    G: { name: 'Hard Worker', label: 'Pekerja Keras', group: 'Arah Kerja', color: '#3b82f6' },
    L: { name: 'Leadership Role', label: 'Peran Kepemimpinan', group: 'Kepemimpinan', color: '#a855f7' },
    I: { name: 'Ease of Decision', label: 'Pengambil Keputusan', group: 'Kepemimpinan', color: '#a855f7' },
    T: { name: 'Pace', label: 'Kecepatan Kerja', group: 'Aktivitas Kerja', color: '#10b981' },
    V: { name: 'Vigorous', label: 'Penuh Semangat', group: 'Aktivitas Kerja', color: '#10b981' },
    S: { name: 'Social Extension', label: 'Perluasan Sosial', group: 'Relasi Sosial', color: '#f59e0b' },
    R: { name: 'Theoretical', label: 'Tipe Teoretis', group: 'Gaya Kerja', color: '#6366f1' },
    D: { name: 'Interest in Detail', label: 'Minat pada Detail', group: 'Gaya Kerja', color: '#6366f1' },
    C: { name: 'Organized', label: 'Terorganisir', group: 'Gaya Kerja', color: '#6366f1' },
    X: { name: 'Need to be Noticed', label: 'Butuh Diperhatikan', group: 'Relasi Sosial', color: '#f59e0b' },
    B: { name: 'Need to Belong', label: 'Butuh Kelompok', group: 'Relasi Sosial', color: '#f59e0b' },
    O: { name: 'Need for Closeness', label: 'Butuh Kedekatan', group: 'Relasi Sosial', color: '#f59e0b' },
    N: { name: 'Need to Finish', label: 'Penyelesai Tugas', group: 'Arah Kerja', color: '#3b82f6' },
    A: { name: 'Need to Achieve', label: 'Butuh Prestasi', group: 'Arah Kerja', color: '#3b82f6' },
    P: { name: 'Need to Control', label: 'Butuh Mengendalikan', group: 'Kepemimpinan', color: '#a855f7' },
    E: { name: 'Emotional Restraint', label: 'Pengendalian Emosi', group: 'Temperamen', color: '#ef4444' },
    W: { name: 'Need for Rules', label: 'Butuh Aturan', group: 'Kepatuhan', color: '#78716c' },
    F: { name: 'Need to Support Authority', label: 'Mendukung Otoritas', group: 'Kepatuhan', color: '#78716c' },
    K: { name: 'Aggressiveness', label: 'Daya Tahan Kritik', group: 'Temperamen', color: '#ef4444' },
    Z: { name: 'Need for Change', label: 'Butuh Perubahan', group: 'Temperamen', color: '#ef4444' }
};

// ===========================
// COGNITIVE TEST DATA
// ===========================
const cognitiveQuestions = [
    // Verbal (5)
    {id:501, text:"PANAS berhubungan dengan API, seperti DINGIN berhubungan dengan ...", options:["Es","Salju","Air","Angin"], correct:0, category:"Verbal"},
    {id:502, text:"Manakah kata yang merupakan SINONIM dari 'SKEPTIS'?", options:["Optimis","Ragu-ragu","Yakin","Antusias"], correct:1, category:"Verbal"},
    {id:503, text:"DOKTER berhubungan dengan PASIEN, seperti GURU berhubungan dengan ...", options:["Sekolah","Buku","Murid","Kelas"], correct:2, category:"Verbal"},
    {id:504, text:"Manakah kata yang merupakan ANTONIM dari 'ABSTRAK'?", options:["Rumit","Konkret","Teoritis","Filosofis"], correct:1, category:"Verbal"},
    {id:505, text:"JIKA semua KUCING adalah HEWAN, dan semua HEWAN bernapas, MAKA...", options:["Semua yang bernapas adalah kucing","Semua kucing bernapas","Semua hewan adalah kucing","Tidak dapat disimpulkan"], correct:1, category:"Verbal"},
    // Numerik (5)
    {id:506, text:"Lanjutkan deret angka berikut: 2, 6, 18, 54, ...", options:["108","162","148","216"], correct:1, category:"Numerik"},
    {id:507, text:"Jika 3x + 7 = 22, berapakah nilai x?", options:["3","4","5","6"], correct:2, category:"Numerik"},
    {id:508, text:"Lanjutkan deret: 1, 1, 2, 3, 5, 8, ...", options:["11","12","13","10"], correct:2, category:"Numerik"},
    {id:509, text:"Sebuah toko memberi diskon 20% untuk barang seharga Rp250.000. Berapa yang harus dibayar?", options:["Rp200.000","Rp225.000","Rp210.000","Rp175.000"], correct:0, category:"Numerik"},
    {id:510, text:"Lanjutkan deret: 3, 7, 15, 31, ...", options:["47","55","63","59"], correct:2, category:"Numerik"},
    // Pemecahan Masalah (5)
    {id:511, text:"Semua manajer mengikuti pelatihan. Budi adalah manajer. Kesimpulan:", options:["Budi tidak perlu pelatihan","Budi mengikuti pelatihan","Pelatihan hanya untuk Budi","Tidak cukup informasi"], correct:1, category:"Pemecahan Masalah"},
    {id:512, text:"Ali lebih tinggi dari Budi. Candra lebih pendek dari Budi. Siapa yang paling pendek?", options:["Ali","Budi","Candra","Sama tinggi"], correct:2, category:"Pemecahan Masalah"},
    {id:513, text:"Dalam sebuah antrian, Dina berdiri di posisi ke-5 dari depan dan ke-8 dari belakang. Berapa jumlah orang dalam antrian?", options:["12","13","14","11"], correct:0, category:"Pemecahan Masalah"},
    {id:514, text:"Jika A > B, B > C, dan D > A, maka urutan dari terbesar adalah:", options:["A, D, B, C","D, A, B, C","D, B, A, C","A, B, D, C"], correct:1, category:"Pemecahan Masalah"},
    {id:515, text:"Sebuah jam menunjukkan pukul 3:15. Berapa derajat sudut antara jarum jam dan jarum menit?", options:["0°","7.5°","15°","30°"], correct:1, category:"Pemecahan Masalah"}
];

// ===========================
// SPATIAL TEST DATA
// ===========================
const spatialQuestions = [
    // 2D (5)
    {id:601, text: "Jika bentuk 'L' diputar 90° searah jarum jam, huruf apa yang dihasilkan?", svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="140" height="140"><defs><linearGradient id="grad601" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#60a5fa"/><stop offset="100%" stop-color="#2563eb"/></linearGradient><filter id="shadow601" x="-10%" y="-10%" width="130%" height="130%"><feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.15"/></filter></defs><g filter="url(#shadow601)"><path d="M35,20 H55 V65 H85 V85 H35 Z" fill="url(#grad601)" stroke="#1d4ed8" stroke-width="1.5" stroke-linejoin="round"/></g></svg>', options:["⌐","Γ","┘","┐"], correct:0, category:"Visual 2D"},
    {id:602, text: "Pola mana yang melengkapi matriks 3x3 berikut? Baris 1: ●●○, Baris 2: ●○●, Baris 3: ○●?", svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="140" height="140"><defs><radialGradient id="sphereGrad" cx="30%" cy="30%" r="70%"><stop offset="0%" stop-color="#93c5fd"/><stop offset="50%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#1d4ed8"/></radialGradient><radialGradient id="ringGrad" cx="30%" cy="30%" r="70%"><stop offset="0%" stop-color="#ffffff"/><stop offset="70%" stop-color="#f1f5f9"/><stop offset="100%" stop-color="#cbd5e1"/></radialGradient><filter id="shadow602" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="1" dy="2" stdDeviation="2" flood-opacity="0.1"/></filter></defs><g filter="url(#shadow602)"><rect x="5" y="5" width="130" height="130" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/><circle cx="25" cy="25" r="12" fill="url(#sphereGrad)"/><circle cx="70" cy="25" r="12" fill="url(#sphereGrad)"/><circle cx="115" cy="25" r="12" fill="url(#ringGrad)" stroke="#94a3b8" stroke-width="1.5"/><circle cx="25" cy="70" r="12" fill="url(#sphereGrad)"/><circle cx="70" cy="70" r="12" fill="url(#ringGrad)" stroke="#94a3b8" stroke-width="1.5"/><circle cx="115" cy="70" r="12" fill="url(#sphereGrad)"/><circle cx="25" cy="115" r="12" fill="url(#ringGrad)" stroke="#94a3b8" stroke-width="1.5"/><circle cx="70" cy="115" r="12" fill="url(#sphereGrad)"/><rect x="103" y="103" width="24" height="24" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/><text x="115" y="121" font-size="18" font-weight="bold" fill="#ef4444" text-anchor="middle">?</text></g></svg>', options:["● (bulat penuh)","○ (bulat kosong)","◐ (setengah)","◆ (belah ketupat)"], correct:1, category:"Visual 2D"},
    {id:603, text: "Jika sebuah kertas persegi dilipat diagonal lalu dipotong sudutnya, berapa lubang terbentuk saat dibuka?", svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="140" height="140"><defs><filter id="paperShadow" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-opacity="0.12"/></filter><linearGradient id="paperGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffffff"/><stop offset="80%" stop-color="#f8fafc"/><stop offset="100%" stop-color="#e2e8f0"/></linearGradient></defs><rect x="15" y="15" width="110" height="110" rx="4" fill="url(#paperGrad)" filter="url(#paperShadow)" stroke="#cbd5e1" stroke-width="1"/><line x1="15" y1="15" x2="125" y2="125" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/><path d="M30,90 Q50,95 70,70" fill="none" stroke="#ef4444" stroke-width="2"/><path d="M65,70 L71,70 L70,76 Z" fill="#ef4444"/><circle cx="95" cy="95" r="9" fill="#f59e0b" opacity="0.85" stroke="#d97706" stroke-width="1.5"/><circle cx="95" cy="95" r="3" fill="#ffffff"/></svg>', options:["1 lubang","2 lubang","3 lubang","4 lubang"], correct:1, category:"Visual 2D"},
    {id:604, text: "Pencerminan horizontal dari huruf 'R' menghasilkan:", svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 100" width="140" height="100"><defs><linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#60a5fa"/><stop offset="100%" stop-color="#1d4ed8"/></linearGradient><filter id="glassShadow"><feDropShadow dx="1" dy="3" stdDeviation="2" flood-opacity="0.1"/></filter></defs><rect x="10" y="10" width="50" height="80" rx="8" fill="#ffffff" filter="url(#glassShadow)" stroke="#e2e8f0" stroke-width="1"/><text x="35" y="68" font-size="52" font-family="sans-serif" font-weight="900" fill="url(#textGrad)" text-anchor="middle">R</text><line x1="77" y1="5" x2="77" y2="95" stroke="#ef4444" stroke-width="3" stroke-linecap="round" opacity="0.8"/><rect x="85" y="10" width="45" height="80" rx="8" fill="none" stroke="#94a3b8" stroke-dasharray="4,4" stroke-width="1.5"/><text x="107.5" y="62" font-size="28" font-weight="bold" fill="#64748b" text-anchor="middle">?</text></svg>', options:["Я","ʁ","ᴚ","Ɽ"], correct:0, category:"Visual 2D"},
    {id:605, text: "Berapa segitiga yang terdapat pada gambar berikut?", svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 130" width="150" height="140"><defs><filter id="glow605" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#3b82f6" flood-opacity="0.3"/></filter></defs><polygon points="70,15 15,115 125,115" fill="none" stroke="#2563eb" stroke-width="3" filter="url(#glow605)"/><line x1="42.5" y1="65" x2="97.5" y2="65" stroke="#3b82f6" stroke-width="2"/><line x1="70" y1="15" x2="70" y2="115" stroke="#3b82f6" stroke-width="2.5"/><circle cx="70" cy="15" r="4.5" fill="#60a5fa" stroke="#2563eb" stroke-width="1.5"/><circle cx="15" cy="115" r="4.5" fill="#60a5fa" stroke="#2563eb" stroke-width="1.5"/><circle cx="125" cy="115" r="4.5" fill="#60a5fa" stroke="#2563eb" stroke-width="1.5"/><circle cx="70" cy="115" r="3.5" fill="#3b82f6"/><circle cx="42.5" cy="65" r="3.5" fill="#3b82f6"/><circle cx="97.5" cy="65" r="3.5" fill="#3b82f6"/><circle cx="70" cy="65" r="3.5" fill="#3b82f6"/></svg>', options:["4","5","6","8"], correct:2, category:"Visual 2D"},
    // 3D (5)
    {id:606, text: "Sebuah kubus memiliki titik merah di atas, biru di depan, dan hijau di kanan. Jika diputar 90° ke kanan, warna apa yang ada di atas?", svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="140" height="140"><defs><linearGradient id="redCube" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fca5a5"/><stop offset="100%" stop-color="#ef4444"/></linearGradient><linearGradient id="blueCube" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#93c5fd"/><stop offset="100%" stop-color="#3b82f6"/></linearGradient><linearGradient id="greenCube" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#86efac"/><stop offset="100%" stop-color="#10b981"/></linearGradient><filter id="cubeShadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="3" dy="6" stdDeviation="4" flood-opacity="0.15"/></filter></defs><g filter="url(#cubeShadow)"><polygon points="70,25 110,45 70,65 30,45" fill="url(#redCube)" stroke="#ffffff" stroke-width="1.5"/><polygon points="30,45 70,65 70,110 30,90" fill="url(#blueCube)" stroke="#ffffff" stroke-width="1.5"/><polygon points="70,65 110,45 110,90 70,110" fill="url(#greenCube)" stroke="#ffffff" stroke-width="1.5"/><text x="70" y="49" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="sans-serif">MERAH</text><text x="50" y="83" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="sans-serif" transform="rotate(-26, 50, 83)">BIRU</text><text x="90" y="83" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="sans-serif" transform="rotate(26, 90, 83)">HIJAU</text></g></svg>', options:["Merah","Biru","Hijau","Tidak berubah"], correct:1, category:"Visual 3D"},
    {id:607, text: "Berapa kubus kecil yang dibutuhkan untuk membangun bentuk tangga 3 tingkat (1+2+3)?", svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 140" width="160" height="140"><defs><linearGradient id="blockTop" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#e879f9"/><stop offset="100%" stop-color="#c084fc"/></linearGradient><linearGradient id="blockLeft" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#a855f7"/><stop offset="100%" stop-color="#7e22ce"/></linearGradient><linearGradient id="blockRight" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#c084fc"/><stop offset="100%" stop-color="#a855f7"/></linearGradient><filter id="stackShadow" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.12"/></filter></defs><g filter="url(#stackShadow)"><polygon points="80,70.5 100,82 80,93.5 60,82" fill="url(#blockTop)" stroke="#581c87" stroke-width="0.5"/><polygon points="60,82 80,93.5 80,115.5 60,104" fill="url(#blockLeft)" stroke="#581c87" stroke-width="0.5"/><polygon points="80,93.5 100,82 100,104 80,115.5" fill="url(#blockRight)" stroke="#581c87" stroke-width="0.5"/><polygon points="80,48.5 100,60 80,71.5 60,60" fill="url(#blockTop)" stroke="#581c87" stroke-width="0.5"/><polygon points="60,60 80,71.5 80,93.5 60,82" fill="url(#blockLeft)" stroke="#581c87" stroke-width="0.5"/><polygon points="80,71.5 100,60 100,82 80,93.5" fill="url(#blockRight)" stroke="#581c87" stroke-width="0.5"/><polygon points="80,26.5 100,38 80,49.5 60,38" fill="url(#blockTop)" stroke="#581c87" stroke-width="0.5"/><polygon points="60,38 80,49.5 80,71.5 60,60" fill="url(#blockLeft)" stroke="#581c87" stroke-width="0.5"/><polygon points="80,49.5 100,38 100,60 80,71.5" fill="url(#blockRight)" stroke="#581c87" stroke-width="0.5"/><polygon points="60,82 80,93.5 60,105 40,93.5" fill="url(#blockTop)" stroke="#581c87" stroke-width="0.5"/><polygon points="40,93.5 60,105 60,127 40,115.5" fill="url(#blockLeft)" stroke="#581c87" stroke-width="0.5"/><polygon points="60,105 80,93.5 80,115.5 60,127" fill="url(#blockRight)" stroke="#581c87" stroke-width="0.5"/><polygon points="60,60 80,71.5 60,83 40,71.5" fill="url(#blockTop)" stroke="#581c87" stroke-width="0.5"/><polygon points="40,71.5 60,83 60,105 40,93.5" fill="url(#blockLeft)" stroke="#581c87" stroke-width="0.5"/><polygon points="60,83 80,71.5 80,93.5 60,105" fill="url(#blockRight)" stroke="#581c87" stroke-width="0.5"/><polygon points="40,93.5 60,105 40,116.5 20,105" fill="url(#blockTop)" stroke="#581c87" stroke-width="0.5"/><polygon points="20,105 40,116.5 40,138.5 20,127" fill="url(#blockLeft)" stroke="#581c87" stroke-width="0.5"/><polygon points="40,116.5 60,105 60,127 40,138.5" fill="url(#blockRight)" stroke="#581c87" stroke-width="0.5"/></g></svg>', options:["3","5","6","9"], correct:2, category:"Visual 3D"},
    {id:608, text: "Jaring-jaring mana yang BUKAN milik kubus?", svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 100" width="160" height="100"><defs><filter id="blueprintGlow"><feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#3b82f6" flood-opacity="0.2"/></filter></defs><rect x="5" y="5" width="150" height="90" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/><g filter="url(#blueprintGlow)"><rect x="15" y="30" width="20" height="20" fill="#0f172a" stroke="#60a5fa" stroke-width="1.5"/><rect x="35" y="30" width="20" height="20" fill="#0f172a" stroke="#60a5fa" stroke-width="1.5"/><rect x="55" y="30" width="20" height="20" fill="#0f172a" stroke="#60a5fa" stroke-width="1.5"/><rect x="75" y="30" width="20" height="20" fill="#0f172a" stroke="#60a5fa" stroke-width="1.5"/><rect x="35" y="10" width="20" height="20" fill="#0f172a" stroke="#60a5fa" stroke-width="1.5"/><rect x="35" y="50" width="20" height="20" fill="#0f172a" stroke="#60a5fa" stroke-width="1.5"/><rect x="75" y="50" width="20" height="20" fill="#0f172a" stroke="#60a5fa" stroke-width="1.5"/><line x1="35" y1="30" x2="35" y2="50" stroke="#3b82f6" stroke-dasharray="2,2"/><line x1="55" y1="30" x2="55" y2="50" stroke="#3b82f6" stroke-dasharray="2,2"/><line x1="75" y1="30" x2="75" y2="50" stroke="#3b82f6" stroke-dasharray="2,2"></g></svg>', options:["Salib (T-shape)","L-shape + 2","Gambar di atas","Zig-zag 4+2"], correct:2, category:"Visual 3D"},
    {id:609, text: "Sebuah piramida segi empat memiliki berapa sisi, rusuk, dan titik sudut?", svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 130" width="140" height="130"><defs><linearGradient id="pyrFace" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(163,191,250,0.4)"/><stop offset="100%" stop-color="rgba(99,102,241,0.15)"/></linearGradient><filter id="neonGlow"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#a3bffa" flood-opacity="0.3"/></filter></defs><line x1="25" y1="100" x2="95" y2="85" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/><line x1="70" y1="20" x2="95" y2="85" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/><polygon points="70,20 25,100 60,115" fill="url(#pyrFace)" stroke="#6366f1" stroke-width="2" filter="url(#neonGlow)"/><polygon points="70,20 60,115 115,100" fill="url(#pyrFace)" stroke="#6366f1" stroke-width="2" filter="url(#neonGlow)"/><line x1="25" y1="100" x2="60" y2="115" stroke="#6366f1" stroke-width="2" filter="url(#neonGlow)"/><line x1="60" y1="115" x2="115" y2="100" stroke="#6366f1" stroke-width="2" filter="url(#neonGlow)"/><line x1="115" y1="100" x2="95" y2="85" stroke="#94a3b8" stroke-width="1"/><circle cx="70" cy="20" r="5" fill="#c084fc" stroke="#6366f1" stroke-width="1.5"/><circle cx="25" cy="100" r="4.5" fill="#818cf8"/><circle cx="60" cy="115" r="4.5" fill="#818cf8"/><circle cx="115" cy="100" r="4.5" fill="#818cf8"/><circle cx="95" cy="85" r="3.5" fill="#94a3b8"/></svg>', options:["4 sisi, 6 rusuk, 4 titik","5 sisi, 8 rusuk, 5 titik","5 sisi, 6 rusuk, 5 titik","6 sisi, 8 rusuk, 5 titik"], correct:1, category:"Visual 3D"},
    {id:610, text: "Jika kubus besar 3x3x3 dicat semua sisinya, berapa kubus kecil yang memiliki tepat 2 sisi tercat?", svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="140" height="140"><defs><linearGradient id="paintedFace" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#f87171"/><stop offset="100%" stop-color="#dc2626"/></linearGradient><filter id="shadow610"><feDropShadow dx="3" dy="5" stdDeviation="3" flood-opacity="0.15"/></filter></defs><g filter="url(#shadow610)"><polygon points="70,15 115,35 70,55 25,35" fill="url(#paintedFace)" stroke="#ffffff" stroke-width="1"/><line x1="40" y1="21.6" x2="85" y2="41.6" stroke="#ffffff" stroke-width="1.5"/><line x1="55" y1="28.3" x2="100" y2="48.3" stroke="#ffffff" stroke-width="1.5"/><line x1="55" y1="21.6" x2="40" y2="41.6" stroke="#ffffff" stroke-width="1.5"/><line x1="100" y1="28.3" x2="85" y2="48.3" stroke="#ffffff" stroke-width="1.5"/><polygon points="25,35 70,55 70,105 25,85" fill="url(#paintedFace)" stroke="#ffffff" stroke-width="1"/><line x1="40" y1="41.6" x2="40" y2="91.6" stroke="#ffffff" stroke-width="1.5"/><line x1="55" y1="48.3" x2="55" y2="98.3" stroke="#ffffff" stroke-width="1.5"/><line x1="25" y1="51.6" x2="70" y2="71.6" stroke="#ffffff" stroke-width="1.5"/><line x1="25" y1="68.3" x2="70" y2="88.3" stroke="#ffffff" stroke-width="1.5"/><polygon points="70,55 115,35 115,85 70,105" fill="url(#paintedFace)" stroke="#ffffff" stroke-width="1"/><line x1="85" y1="48.3" x2="85" y2="98.3" stroke="#ffffff" stroke-width="1.5"/><line x1="100" y1="41.6" x2="100" y2="91.6" stroke="#ffffff" stroke-width="1.5"/><line x1="70" y1="71.6" x2="115" y2="51.6" stroke="#ffffff" stroke-width="1.5"/><line x1="70" y1="88.3" x2="115" y2="68.3" stroke="#ffffff" stroke-width="1.5"/></g></svg>', options:["8","12","6","24"], correct:1, category:"Visual 3D"}
];

// ===========================
// SHARED DATA
// ===========================
const likertOptions = [
    { label: "Sangat Setuju", value: 3 },
    { label: "Setuju", value: 2 },
    { label: "Agak Setuju", value: 1 },
    { label: "Netral", value: 0 },
    { label: "Agak Tidak Setuju", value: -1 },
    { label: "Tidak Setuju", value: -2 },
    { label: "Sangat Tidak Setuju", value: -3 },
];

// ===========================
// STATE MANAGEMENT
// ===========================
let state = {
    userRole: null, // 'superadmin', 'owner', 'manager', 'tamu'
    currentUser: { name: '', age: '' },
    currentTestType: null, // 'mbti', 'disc', 'iq', 'wpt', 'bigfive', 'riasec'
    currentQuestionIndex: 0,
    testStartedAt: null,
    answers: {},
    history: [],
    shareSessions: [],
    guestSession: {
        isSharedGuest: false,
        sessionId: null,
        serverBase: '',
        label: ''
    },
    isViewingHistory: false,
    historyFilter: 'all',
    historySearch: '',
    settings: {
        adminContact: {
            email: 'admin@karakterku.id',
            whatsapp: '6281234567890'
        },
        owners: [
            { name: 'Administrator', username: 'superadmin', role: 'superadmin', accessCode: 'superadmin', limitType: 'permanent' },
            { name: 'Pemilik', username: 'owner', role: 'owner', accessCode: 'owner', limitType: 'permanent' },
            { name: 'Manajer', username: 'manager', role: 'manager', accessCode: 'manager', limitType: 'permanent' }
        ],
        theme: 'elegant-spectrum',
        access: {
            superadmin: { mbti: true, disc: true, iq: true, wpt: true, bigfive: true, riasec: true, riwayat: true, pengaturan: true },
            owner: { mbti: true, disc: true, iq: true, wpt: true, bigfive: true, riasec: true, riwayat: true, pengaturan: false },
            manager: { mbti: true, disc: true, iq: true, wpt: true, bigfive: true, riasec: true, riwayat: true, pengaturan: false },
            tamu: { mbti: true, disc: true, iq: true, wpt: true, bigfive: true, riasec: true, riwayat: false, pengaturan: false }
        }
    }
};

// ===========================
// DOM ELEMENTS
// ===========================
const DOM = {
    containers: {
        login: document.getElementById('login-container'),
        boot: document.getElementById('boot-container'),
        intro: document.getElementById('intro-container'),
        testSelect: document.getElementById('test-select-container'),
        test: document.getElementById('test-container'),
        result: document.getElementById('result-container'),
        discResult: document.getElementById('disc-result-container'),
        iqResult: document.getElementById('iq-result-container'),
        wptResult: document.getElementById('wpt-result-container'),
        bigfiveResult: document.getElementById('bigfive-result-container'),
        riasecResult: document.getElementById('riasec-result-container'),
        papiResult: document.getElementById('papi-result-container'),
        cognitiveResult: document.getElementById('cognitive-result-container'),
        spatialResult: document.getElementById('spatial-result-container'),
        history: document.getElementById('history-container'),
        thankyou: document.getElementById('thankyou-container'),
        settings: document.getElementById('settings-container')
    },
    navbar: {
        container: document.getElementById('top-navbar'),
        username: document.getElementById('nav-username'),
        avatar: document.getElementById('nav-avatar'),
        iconDefault: document.getElementById('nav-icon-default'),
        themeToggleBtn: document.getElementById('nav-theme-toggle'),
        historyBtn: document.getElementById('nav-history-btn'),
        settingsBtn: document.getElementById('nav-settings-btn'),
        logoutBtn: document.getElementById('nav-logout-btn')
    },
    login: {
        username: document.getElementById('login-username'),
        pass: document.getElementById('login-password'),
        btn: document.getElementById('login-btn'),
        emailAdminBtn: document.getElementById('login-admin-email-btn'),
        waAdminBtn: document.getElementById('login-admin-wa-btn'),
        error: document.getElementById('login-error')
    },
    intro: {
        name: document.getElementById('user-name'),
        age: document.getElementById('user-age'),
        btn: document.getElementById('start-btn'),
        error: document.getElementById('intro-error')
    },
    testSelect: {
        mbtiBtn: document.getElementById('select-mbti-btn'),
        discBtn: document.getElementById('select-disc-btn'),
        iqBtn: document.getElementById('select-iq-btn'),
        wptBtn: document.getElementById('select-wpt-btn'),
        bigfiveBtn: document.getElementById('select-bigfive-btn'),
        riasecBtn: document.getElementById('select-riasec-btn'),
        papiBtn: document.getElementById('select-papi-btn'),
        cognitiveBtn: document.getElementById('select-cognitive-btn'),
        spatialBtn: document.getElementById('select-spatial-btn'),
        historyBtn: document.getElementById('view-history-btn'),
        settingsBtn: document.getElementById('settings-btn'),
        logoutBtn: document.getElementById('logout-btn'),
        welcomeText: document.getElementById('welcome-user-text')
    },
    test: {
        headerTitle: document.getElementById('test-header-title'),
        timer: document.getElementById('test-timer'),
        questionText: document.getElementById('question-text'),
        categoryBadge: document.getElementById('question-category-badge'),
        optionsContainer: document.getElementById('options-container'),
        prevBtn: document.getElementById('prev-btn'),
        cancelBtn: document.getElementById('cancel-test-btn'),
        nextBtn: document.getElementById('next-btn'),
        progressBar: document.getElementById('progress-bar'),
        progressText: document.getElementById('progress-text')
    },
    result: {
        mbtiType: document.getElementById('mbti-type'),
        mbtiAlias: document.getElementById('mbti-alias'),
        desc: document.getElementById('mbti-description'),
        sw: document.getElementById('mbti-sw'),
        careers: document.getElementById('mbti-careers'),
        figures: document.getElementById('mbti-figures'),
        downloadBtn: document.getElementById('download-pdf-btn'),
        retakeBtn: document.getElementById('retake-btn'),
        scoreE: document.getElementById('score-e'),
        scoreI: document.getElementById('score-i'),
        barEI: document.getElementById('bar-e-i'),
        scoreS: document.getElementById('score-s'),
        scoreN: document.getElementById('score-n'),
        barSN: document.getElementById('bar-s-n'),
        scoreT: document.getElementById('score-t'),
        scoreF: document.getElementById('score-f'),
        barTF: document.getElementById('bar-t-f'),
        scoreJ: document.getElementById('score-j'),
        scoreP: document.getElementById('score-p'),
        barJP: document.getElementById('bar-j-p')
    },
    discResult: {
        type: document.getElementById('disc-type'),
        typeName: document.getElementById('disc-type-name'),
        desc: document.getElementById('disc-description'),
        sw: document.getElementById('disc-sw'),
        careers: document.getElementById('disc-careers'),
        barD: document.getElementById('disc-bar-d'),
        barI: document.getElementById('disc-bar-i'),
        barS: document.getElementById('disc-bar-s'),
        barC: document.getElementById('disc-bar-c'),
        scoreD: document.getElementById('disc-score-d'),
        scoreI: document.getElementById('disc-score-i'),
        scoreS: document.getElementById('disc-score-s'),
        scoreC: document.getElementById('disc-score-c'),
        downloadBtn: document.getElementById('disc-download-pdf-btn'),
        retakeBtn: document.getElementById('disc-retake-btn')
    },
    iqResult: {
        scoreValue: document.getElementById('iq-score-value'),
        category: document.getElementById('iq-category'),
        desc: document.getElementById('iq-description'),
        tips: document.getElementById('iq-tips'),
        gaugeFill: document.getElementById('iq-gauge-fill'),
        gaugeMarker: document.getElementById('iq-gauge-marker'),
        correctCount: document.getElementById('iq-correct-count'),
        totalCount: document.getElementById('iq-total-count'),
        downloadBtn: document.getElementById('iq-download-pdf-btn'),
        retakeBtn: document.getElementById('iq-retake-btn')
    },
    wptResult: {
        scoreValue: document.getElementById('wpt-score-value'),
        category: document.getElementById('wpt-category'),
        recommendations: document.getElementById('wpt-recommendations'),
        breakdownBars: document.getElementById('wpt-breakdown-bars'),
        desc: document.getElementById('wpt-description'),
        downloadBtn: document.getElementById('wpt-download-pdf-btn'),
        retakeBtn: document.getElementById('wpt-retake-btn')
    },
    bigfiveResult: {
        dominantName: document.getElementById('bigfive-dominant-name'),
        barO: document.getElementById('bigfive-bar-o'),
        barC: document.getElementById('bigfive-bar-c'),
        barE: document.getElementById('bigfive-bar-e'),
        barA: document.getElementById('bigfive-bar-a'),
        barN: document.getElementById('bigfive-bar-n'),
        scoreO: document.getElementById('bigfive-score-o'),
        scoreC: document.getElementById('bigfive-score-c'),
        scoreE: document.getElementById('bigfive-score-e'),
        scoreA: document.getElementById('bigfive-score-a'),
        scoreN: document.getElementById('bigfive-score-n'),
        dimensionDetails: document.getElementById('bigfive-dimension-details'),
        sw: document.getElementById('bigfive-sw'),
        recommendations: document.getElementById('bigfive-recommendations'),
        tips: document.getElementById('bigfive-tips'),
        downloadBtn: document.getElementById('bigfive-download-pdf-btn'),
        retakeBtn: document.getElementById('bigfive-retake-btn')
    },
    riasecResult: {
        dominantName: document.getElementById('riasec-dominant-name'),
        barR: document.getElementById('riasec-bar-r'),
        barI: document.getElementById('riasec-bar-i'),
        barA: document.getElementById('riasec-bar-a'),
        barS: document.getElementById('riasec-bar-s'),
        barE: document.getElementById('riasec-bar-e'),
        barC: document.getElementById('riasec-bar-c'),
        scoreR: document.getElementById('riasec-score-r'),
        scoreI: document.getElementById('riasec-score-i'),
        scoreA: document.getElementById('riasec-score-a'),
        scoreS: document.getElementById('riasec-score-s'),
        scoreE: document.getElementById('riasec-score-e'),
        scoreC: document.getElementById('riasec-score-c'),
        dimensionDetails: document.getElementById('riasec-dimension-details'),
        recommendations: document.getElementById('riasec-recommendations'),
        downloadBtn: document.getElementById('riasec-download-pdf-btn'),
        retakeBtn: document.getElementById('riasec-retake-btn')
    },
    papiResult: {
        summaryLead: document.getElementById('papi-summary-lead'),
        leadDesc: document.getElementById('papi-lead-desc'),
        directionDesc: document.getElementById('papi-direction-desc'),
        activityDesc: document.getElementById('papi-activity-desc'),
        aspectsBars: document.getElementById('papi-aspects-bars'),
        styleDesc: document.getElementById('papi-style-desc'),
        socialDesc: document.getElementById('papi-social-desc'),
        followershipDesc: document.getElementById('papi-followership-desc'),
        downloadBtn: document.getElementById('papi-download-pdf-btn'),
        shareWaBtn: document.getElementById('papi-share-wa-btn'),
        retakeBtn: document.getElementById('papi-retake-btn')
    },
    cognitiveResult: {
        scoreValue: document.getElementById('cognitive-score-value'),
        category: document.getElementById('cognitive-category'),
        description: document.getElementById('cognitive-description'),
        tips: document.getElementById('cognitive-tips'),
        scoreVerbal: document.getElementById('cognitive-score-verbal'),
        scoreNumeric: document.getElementById('cognitive-score-numeric'),
        scoreProblem: document.getElementById('cognitive-score-problem'),
        barVerbal: document.getElementById('cognitive-bar-verbal'),
        barNumeric: document.getElementById('cognitive-bar-numeric'),
        barProblem: document.getElementById('cognitive-bar-problem'),
        downloadBtn: document.getElementById('cognitive-download-pdf-btn'),
        shareWaBtn: document.getElementById('cognitive-share-wa-btn'),
        retakeBtn: document.getElementById('cognitive-retake-btn')
    },
    spatialResult: {
        scoreValue: document.getElementById('spatial-score-value'),
        category: document.getElementById('spatial-category'),
        description: document.getElementById('spatial-description'),
        tips: document.getElementById('spatial-tips'),
        score2d: document.getElementById('spatial-score-2d'),
        score3d: document.getElementById('spatial-score-3d'),
        bar2d: document.getElementById('spatial-bar-2d'),
        bar3d: document.getElementById('spatial-bar-3d'),
        downloadBtn: document.getElementById('spatial-download-pdf-btn'),
        shareWaBtn: document.getElementById('spatial-share-wa-btn'),
        retakeBtn: document.getElementById('spatial-retake-btn')
    },
    history: {
        list: document.getElementById('history-list'),
        backBtn: document.getElementById('back-to-home-btn'),
        searchInput: document.getElementById('history-search')
    },
    thankyou: {
        title: document.getElementById('thankyou-title'),
        mainText: document.getElementById('thankyou-main-text'),
        subText: document.getElementById('thankyou-subtext'),
        doneBtn: document.getElementById('guest-done-btn')
    },
    shareGuest: {
        panel: document.getElementById('share-guest-panel'),
        createBtn: document.getElementById('create-share-session-btn'),
        refreshBtn: document.getElementById('refresh-share-session-btn'),
        empty: document.getElementById('share-session-empty'),
        list: document.getElementById('share-session-list')
    },
    settings: {
        tbody: document.getElementById('settings-tbody'),
        saveBtn: document.getElementById('save-settings-btn'),
        backBtn: document.getElementById('back-from-settings-btn'),
        ownersList: document.getElementById('owners-list'),
        addOwnerBtn: document.getElementById('add-owner-btn'),
        themeGrid: document.getElementById('theme-grid'),
        adminEmailInput: document.getElementById('admin-contact-email'),
        adminWhatsappInput: document.getElementById('admin-contact-whatsapp')
    }
};

// ===========================
// UTILITY: NAVIGATION
// ===========================
function showPage(pageId) {
    Object.values(DOM.containers).forEach(container => {
        if (container) container.classList.add('hidden');
    });
    if (DOM.containers[pageId]) {
        DOM.containers[pageId].classList.remove('hidden');
    }
    
    // Navbar visibility
    if (pageId === 'login' || pageId === 'boot' || pageId === 'intro' || pageId === 'test' || pageId === 'thankyou') {
        DOM.navbar.container.classList.add('hidden');
    } else {
        DOM.navbar.container.classList.remove('hidden');
    }

    // Toggle full-width class on app-container
    const appContainer = document.querySelector('.app-container');
    if (appContainer) {
        if (pageId === 'settings' || pageId === 'wptResult' || pageId === 'bigfiveResult' || pageId === 'testSelect' || pageId === 'papiResult' || pageId === 'cognitiveResult' || pageId === 'spatialResult') {
            appContainer.classList.add('settings-mode');
            appContainer.classList.remove('test-mode');
        } else if (pageId === 'test') {
            appContainer.classList.add('test-mode');
            appContainer.classList.remove('settings-mode');
        } else {
            appContainer.classList.remove('settings-mode');
            appContainer.classList.remove('test-mode');
        }
    }

    // Superadmin-only PDF and WA buttons
    const isSuperAdmin = state.userRole === 'superadmin';
    document.querySelectorAll('.btn-whatsapp').forEach(btn => {
        btn.classList.toggle('hidden', !isSuperAdmin);
    });
    document.querySelectorAll('[id$="-download-pdf-btn"], #download-pdf-btn').forEach(btn => {
        btn.classList.toggle('hidden', !isSuperAdmin);
    });

    window.scrollTo(0, 0);
}

function setColorMode(mode, persist = true) {
    const isDark = mode === 'dark';
    document.body.classList.toggle('dark-mode', isDark);

    if (DOM.navbar.themeToggleBtn) {
        DOM.navbar.themeToggleBtn.setAttribute('aria-pressed', String(isDark));
        DOM.navbar.themeToggleBtn.setAttribute('aria-label', isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap');
        DOM.navbar.themeToggleBtn.title = isDark ? 'Mode terang' : 'Mode gelap';
    }

    if (persist) {
        try {
            localStorage.setItem('karakterku-color-mode', isDark ? 'dark' : 'light');
        } catch (err) {
            // Storage can be unavailable in restricted embedded contexts.
        }
    }
}

function initColorMode() {
    let savedMode = 'light';
    try {
        savedMode = localStorage.getItem('karakterku-color-mode') || 'light';
    } catch (err) {
        savedMode = 'light';
    }
    setColorMode(savedMode === 'dark' ? 'dark' : 'light', false);
}

function showBootSplash(displayName = '') {
    window.clearTimeout(window.__bootSplashTimer);

    const subtitle = document.getElementById('boot-subtitle');
    if (subtitle) {
        const suffix = displayName ? `, ${displayName}` : '';
        subtitle.textContent = `Selamat datang${suffix}. Memuat pengalaman tes yang aman, rapi, dan personal untuk Anda.`;
    }

    showPage('boot');
    window.__bootSplashTimer = window.setTimeout(() => {
        showPage('testSelect');
    }, 3000);
}

function isSharedGuestMode() {
    return !!state.guestSession.isSharedGuest;
}

function isGuestUser() {
    return state.userRole === 'tamu' || state.userRole === 'guest' || isSharedGuestMode();
}

function canManageShareSessions() {
    return !!(window.electronAPI && window.electronAPI.createShareSession && state.userRole) && !isGuestUser();
}

function formatDateTime(timestamp) {
    if (!timestamp) return '-';
    try {
        return new Date(timestamp).toLocaleString('id-ID');
    } catch (_err) {
        return '-';
    }
}

function configureThankYouPage() {
    if (!DOM.thankyou.title) return;

    if (isSharedGuestMode()) {
        DOM.thankyou.title.textContent = 'Tes Berhasil Dikirim';
        DOM.thankyou.mainText.textContent = 'Hasil tes Anda sudah tersinkron ke aplikasi Karakter.ku yang membagikan link ini.';
        DOM.thankyou.subText.textContent = 'Anda tidak dapat melihat hasil tes. Anda akan kembali ke beranda untuk memilih tes berikutnya.';
    } else if (isGuestUser()) {
        DOM.thankyou.title.textContent = 'Terima Kasih!';
        DOM.thankyou.mainText.textContent = 'Tes Anda telah selesai dan tersimpan dalam sistem.';
        DOM.thankyou.subText.textContent = 'Hasil tes tidak ditampilkan untuk user tamu. Anda akan kembali ke beranda untuk mengerjakan tes berikutnya.';
    } else {
        DOM.thankyou.title.textContent = 'Terima Kasih!';
        DOM.thankyou.mainText.textContent = 'Tes Anda telah selesai. Data Anda telah terekam dalam sistem kami.';
        DOM.thankyou.subText.textContent = 'Silakan hubungi Administrator untuk melihat hasil analisis lengkap Anda.';
    }
}

async function reloadHistoryFromSource() {
    if (window.electronAPI && window.electronAPI.loadHistory) {
        const data = await window.electronAPI.loadHistory();
        state.history = data || [];
    }
}

async function submitSharedGuestResult(historyItem) {
    const apiBase = state.guestSession.serverBase;
    const sessionId = state.guestSession.sessionId;
    if (!apiBase || !sessionId) {
        return { success: false, error: 'Sesi tamu tidak aktif.' };
    }

    const response = await fetch(`${apiBase}/api/share/sessions/${encodeURIComponent(sessionId)}/submit`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(historyItem)
    });

    const data = await response.json().catch(() => ({ success: false, error: 'Gagal membaca respons sinkronisasi.' }));
    if (!response.ok || !data.success) {
        throw new Error(data.error || 'Gagal menyinkronkan hasil tes.');
    }

    return data;
}

function showGuestCompletionPage() {
    configureThankYouPage();
    showPage('thankyou');

    window.clearTimeout(window.__guestReturnTimer);
    window.__guestReturnTimer = window.setTimeout(() => {
        state.answers = {};
        state.currentQuestionIndex = 0;
        showPage('testSelect');
    }, 2500);
}

function getCurrentQuestions() {
    switch (state.currentTestType) {
        case 'mbti': return mbtiQuestions;
        case 'disc': return discQuestions;
        case 'iq': return iqQuestions;
        case 'wpt': return wptQuestions;
        case 'bigfive': return bigfiveQuestions;
        case 'riasec': return riasecQuestions;
        case 'papi': return papiQuestions;
        case 'cognitive': return cognitiveQuestions;
        case 'spatial': return spatialQuestions;
        default: return [];
    }
}

// ===========================
// AUTH LOGIC
// ===========================
function getAdminContact() {
    return {
        email: state.settings.adminContact?.email || 'admin@karakterku.id',
        whatsapp: String(state.settings.adminContact?.whatsapp || '6281234567890').replace(/[^\d]/g, '')
    };
}

function getAccessRequestMessage() {
    return [
        'Halo Admin Karakter.ku,',
        '',
        'Saya ingin meminta username dan password untuk mengakses aplikasi Karakter.ku.',
        '',
        'Nama:',
        'Instansi/Divisi:',
        'Keperluan akses:',
        '',
        'Terima kasih.'
    ].join('\n');
}

function contactAdmin(channel) {
    const contact = getAdminContact();
    const subject = 'Permintaan Username dan Password Karakter.ku';
    const message = getAccessRequestMessage();

    if (channel === 'email') {
        window.location.href = `mailto:${encodeURIComponent(contact.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        return;
    }

    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
}

function normalizeAccessCode(value) {
    return String(value || '').trim().toLowerCase();
}

function getAccountRole(account) {
    const role = account?.role || account?.username || 'tamu';
    return ['superadmin', 'owner', 'manager', 'tamu'].includes(role) ? role : 'tamu';
}

function getAccountCode(account) {
    return normalizeAccessCode(account?.accessCode || account?.username);
}

function getAccountLimitType(account) {
    return account?.limitType || account?.durationType || 'permanent';
}

function getAccountCreatedAt(account) {
    if (account?.createdAt) return new Date(account.createdAt);
    return new Date();
}

function calculateAccountExpiry(account) {
    const limitType = getAccountLimitType(account);
    if (limitType === 'permanent') return null;

    const createdAt = getAccountCreatedAt(account);
    const expiresAt = new Date(createdAt);
    if (limitType === 'daily') {
        expiresAt.setDate(expiresAt.getDate() + 1);
    } else if (limitType === 'monthly') {
        expiresAt.setMonth(expiresAt.getMonth() + 1);
    }
    return expiresAt;
}

function formatAccountDate(date) {
    if (!date) return 'Permanen';
    return date.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
}

function getAccountStatus(account) {
    const expiresAt = calculateAccountExpiry(account);
    if (!expiresAt) return { expired: false, label: 'Permanen' };

    const expired = Date.now() > expiresAt.getTime();
    return {
        expired,
        label: expired ? `Kadaluarsa ${formatAccountDate(expiresAt)}` : `Aktif sampai ${formatAccountDate(expiresAt)}`
    };
}

function findLoginAccount(accessCode) {
    const normalizedCode = normalizeAccessCode(accessCode);
    return (state.settings.owners || []).find(account => getAccountCode(account) === normalizedCode);
}

DOM.login.btn.addEventListener('click', () => {
    const user = DOM.login.username.value.trim().toLowerCase();
    const pass = DOM.login.pass.value;

    const ownerEntry = findLoginAccount(user);
    let role = ownerEntry ? getAccountRole(ownerEntry) : null;
    if (!role && user === 'superadmin') role = 'superadmin';
    else if (!role && user === 'owner') role = 'owner';
    else if (!role && user === 'manager') role = 'manager';
    else if (!role && user === 'tamu') role = 'tamu';

    const accountStatus = ownerEntry ? getAccountStatus(ownerEntry) : { expired: false };
    const passwordMatches = !ownerEntry?.password || ownerEntry.password === pass;

    if (role && !accountStatus.expired && passwordMatches) {
        state.userRole = role;
        state.currentAccount = ownerEntry || null;
        DOM.login.error.classList.add('hidden');
        // Lookup display name and photo from owners list
        const displayName = ownerEntry ? ownerEntry.name : (user.charAt(0).toUpperCase() + user.slice(1));
        DOM.navbar.username.textContent = displayName;
        // Show avatar photo if available
        if (ownerEntry && ownerEntry.photo) {
            DOM.navbar.avatar.src = ownerEntry.photo;
            DOM.navbar.avatar.style.display = 'block';
            DOM.navbar.iconDefault.style.display = 'none';
        } else {
            DOM.navbar.avatar.style.display = 'none';
            DOM.navbar.iconDefault.style.display = '';
        }
        configureThankYouPage();
        applyAccessControl();
        if (canManageShareSessions()) {
            refreshShareSessions();
        }
        showBootSplash(displayName);
    } else {
        DOM.login.error.textContent = accountStatus.expired ? 'Akun ini sudah melewati batas waktu akses.' : 'Kode Akses atau Password salah.';
        DOM.login.error.classList.remove('hidden');
    }
});

// Enter key support for login
DOM.login.pass.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') DOM.login.btn.click();
});
DOM.login.username.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') DOM.login.btn.click();
});

DOM.login.emailAdminBtn?.addEventListener('click', () => contactAdmin('email'));
DOM.login.waAdminBtn?.addEventListener('click', () => contactAdmin('wa'));

// ===========================
// INTRO LOGIC
// ===========================
function showIntroForm(testType) {
    state.currentTestType = testType;
    DOM.intro.name.value = '';
    DOM.intro.age.value = '';
    DOM.intro.error.classList.add('hidden');
    showPage('intro');
}

DOM.intro.btn.addEventListener('click', () => {
    const name = DOM.intro.name.value.trim();
    const age = DOM.intro.age.value.trim();

    if (name && age) {
        state.currentUser = { name, age };
        DOM.intro.error.classList.add('hidden');
        startTest();
    } else {
        DOM.intro.error.classList.remove('hidden');
    }
});

// ===========================
// NAVBAR / TEST SELECTION LOGIC
// ===========================
DOM.testSelect.mbtiBtn.addEventListener('click', () => showIntroForm('mbti'));
DOM.testSelect.discBtn.addEventListener('click', () => showIntroForm('disc'));
DOM.testSelect.iqBtn.addEventListener('click', () => showIntroForm('iq'));
DOM.testSelect.wptBtn.addEventListener('click', () => showIntroForm('wpt'));
DOM.testSelect.bigfiveBtn.addEventListener('click', () => showIntroForm('bigfive'));
DOM.testSelect.riasecBtn.addEventListener('click', () => showIntroForm('riasec'));
DOM.testSelect.papiBtn.addEventListener('click', () => showIntroForm('papi'));
DOM.testSelect.cognitiveBtn.addEventListener('click', () => showIntroForm('cognitive'));
DOM.testSelect.spatialBtn.addEventListener('click', () => showIntroForm('spatial'));

const goHistory = async () => {
    await reloadHistoryFromSource();
    renderHistory();
    showPage('history');
};
if(DOM.testSelect.historyBtn) DOM.testSelect.historyBtn.addEventListener('click', goHistory);
DOM.navbar.historyBtn.addEventListener('click', goHistory);

const goSettings = () => {
    renderSettings();
    showPage('settings');
};
if(DOM.testSelect.settingsBtn) DOM.testSelect.settingsBtn.addEventListener('click', goSettings);
DOM.navbar.settingsBtn.addEventListener('click', goSettings);

if (DOM.navbar.themeToggleBtn) {
    DOM.navbar.themeToggleBtn.addEventListener('click', () => {
        setColorMode(document.body.classList.contains('dark-mode') ? 'light' : 'dark');
    });
}

const doLogout = () => {
    if (isSharedGuestMode()) {
        state.currentUser = { name: '', age: '' };
        state.answers = {};
        state.currentQuestionIndex = 0;
        showPage('testSelect');
        return;
    }
    DOM.login.username.value = '';
    DOM.login.pass.value = '';
    state.userRole = null;
    state.currentUser = { name: '', age: '' };
    showPage('login');
};
if(DOM.testSelect.logoutBtn) DOM.testSelect.logoutBtn.addEventListener('click', doLogout);
DOM.navbar.logoutBtn.addEventListener('click', doLogout);

DOM.history.backBtn.addEventListener('click', () => {
    showPage('testSelect');
});

// ===========================
// TEST LOGIC
// ===========================
let timerInterval = null;
let timeLeft = 0;

function startTimer(minutes) {
    clearInterval(timerInterval);
    timeLeft = minutes * 60;
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Waktu habis! Jawaban Anda akan otomatis disubmit.');
            finishTest();
        }
    }, 1000);
}

function updateTimerDisplay() {
    if (!DOM.test.timer) return;
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    DOM.test.timer.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    if (timeLeft <= 60) {
        DOM.test.timer.classList.add('danger');
    } else {
        DOM.test.timer.classList.remove('danger');
    }
}

function startTest() {
    state.currentQuestionIndex = 0;
    state.answers = {};
    state.testStartedAt = Date.now();

    // Set header title
    const titles = {
        'mbti': 'Karakter.ku - Tes MBTI',
        'disc': 'Karakter.ku - Tes DISC',
        'iq': 'Karakter.ku - Tes IQ',
        'wpt': 'Karakter.ku - Tes WPT',
        'bigfive': 'Karakter.ku - Tes Big Five',
        'riasec': 'Karakter.ku - Asesmen RIASEC',
        'papi': 'Karakter.ku - Tes PAPI Kostick',
        'cognitive': 'Karakter.ku - Tes Kognitif',
        'spatial': 'Karakter.ku - Tes Spasial'
    };
    DOM.test.headerTitle.textContent = titles[state.currentTestType] || 'Karakter.ku - Questionnaire';

    if (state.currentTestType === 'mbti' || state.currentTestType === 'iq') {
        startTimer(15);
    } else if (state.currentTestType === 'disc') {
        startTimer(10);
    } else if (state.currentTestType === 'wpt') {
        startTimer(12);
    } else if (state.currentTestType === 'bigfive') {
        startTimer(15);
    } else if (state.currentTestType === 'riasec') {
        startTimer(10);
    } else if (state.currentTestType === 'papi') {
        startTimer(25);
    } else if (state.currentTestType === 'cognitive') {
        startTimer(15);
    } else if (state.currentTestType === 'spatial') {
        startTimer(10);
    }

    renderQuestion();
    showPage('test');
}

function renderQuestion() {
    const questions = getCurrentQuestions();
    const qIndex = state.currentQuestionIndex;
    const question = questions[qIndex];
    const total = questions.length;

    // Update Progress
    DOM.test.progressText.textContent = `Pertanyaan ${qIndex + 1} dari ${total}`;
    DOM.test.progressBar.style.width = `${((qIndex + 1) / total) * 100}%`;

    // Question Text
    if (state.currentTestType === 'papi') {
        DOM.test.questionText.textContent = 'Pilih pernyataan yang paling menggambarkan diri Anda:';
    } else {
        DOM.test.questionText.textContent = question.text;
    }

    // Category badge (for IQ, WPT, Cognitive, Spatial)
    if ((state.currentTestType === 'iq' || state.currentTestType === 'wpt' || state.currentTestType === 'cognitive' || state.currentTestType === 'spatial') && question.category) {
        DOM.test.categoryBadge.textContent = question.category;
        DOM.test.categoryBadge.classList.remove('hidden');
    } else {
        DOM.test.categoryBadge.classList.add('hidden');
    }

    // Render Options
    DOM.test.optionsContainer.innerHTML = '';

    if (state.currentTestType === 'papi') {
        // PAPI: Forced choice (A/B)
        const container = document.createElement('div');
        container.className = 'forced-choice-container';
        
        ['A', 'B'].forEach((letter, idx) => {
            const div = document.createElement('div');
            div.className = 'forced-choice-option';
            const letterEl = document.createElement('span');
            letterEl.className = 'forced-choice-letter';
            letterEl.textContent = letter;
            const textEl = document.createElement('span');
            textEl.textContent = idx === 0 ? question.textA : question.textB;
            div.appendChild(letterEl);
            div.appendChild(textEl);
            if (state.answers[question.id] === letter) {
                div.classList.add('selected');
            }
            div.addEventListener('click', () => {
                container.querySelectorAll('.forced-choice-option').forEach(el => el.classList.remove('selected'));
                div.classList.add('selected');
                state.answers[question.id] = letter;
                checkNavigation();
                handleAnswerSelection();
            });
            container.appendChild(div);
        });
        DOM.test.optionsContainer.appendChild(container);
    } else if (state.currentTestType === 'spatial' && question.svg) {
        // Show SVG image
        const svgDiv = document.createElement('div');
        svgDiv.className = 'spatial-svg-container';
        svgDiv.innerHTML = question.svg;
        DOM.test.optionsContainer.appendChild(svgDiv);
        
        // Render options as regular multiple choice but in a 2x2 grid (if options are letters/short texts)
        const grid = document.createElement('div');
        grid.className = 'spatial-options-grid';
        
        const labels = ['A', 'B', 'C', 'D'];
        question.options.forEach((option, idx) => {
            const div = document.createElement('div');
            div.className = 'spatial-option';
            if (state.answers[question.id] !== undefined && state.answers[question.id] === idx) {
                div.classList.add('selected');
            }
            const labelEl = document.createElement('span');
            labelEl.className = 'spatial-option-label';
            labelEl.textContent = labels[idx];
            const textEl = document.createElement('span');
            textEl.textContent = option;
            div.appendChild(labelEl);
            div.appendChild(textEl);
            div.addEventListener('click', () => {
                grid.querySelectorAll('.spatial-option').forEach(el => el.classList.remove('selected'));
                div.classList.add('selected');
                state.answers[question.id] = idx;
                checkNavigation();
                handleAnswerSelection();
            });
            grid.appendChild(div);
        });
        DOM.test.optionsContainer.appendChild(grid);
    } else if (state.currentTestType === 'iq' || state.currentTestType === 'wpt' || state.currentTestType === 'cognitive' || state.currentTestType === 'spatial') {
        // IQ / WPT / Cognitive / Spatial (without inline SVG): Multiple choice A/B/C/D
        const labels = ['A', 'B', 'C', 'D'];
        question.options.forEach((option, idx) => {
            const div = document.createElement('div');
            div.className = 'likert-option';

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question-${question.id}`;
            radio.value = idx;
            radio.style.display = 'none';

            if (state.answers[question.id] !== undefined && state.answers[question.id] === idx) {
                radio.checked = true;
                div.classList.add('selected');
            }

            const labelEl = document.createElement('span');
            labelEl.className = 'iq-option-label';
            labelEl.textContent = labels[idx];

            const textEl = document.createElement('span');
            textEl.textContent = option;

            div.appendChild(radio);
            div.appendChild(labelEl);
            div.appendChild(textEl);

            div.addEventListener('click', () => {
                radio.checked = true;
                document.querySelectorAll('.likert-option').forEach(el => el.classList.remove('selected'));
                div.classList.add('selected');
                state.answers[question.id] = idx;
                checkNavigation();
                handleAnswerSelection();
            });

            DOM.test.optionsContainer.appendChild(div);
        });
    } else {
        // MBTI & DISC: Likert scale (5-point)
        likertOptions.forEach(option => {
            const div = document.createElement('div');
            div.className = 'likert-option';

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question-${question.id}`;
            radio.value = option.value;

            if (state.answers[question.id] !== undefined && state.answers[question.id] === option.value) {
                radio.checked = true;
                div.classList.add('selected');
            }

            const label = document.createElement('span');
            label.textContent = option.label;

            div.appendChild(radio);
            div.appendChild(label);

            div.addEventListener('click', () => {
                radio.checked = true;
                document.querySelectorAll('.likert-option').forEach(el => el.classList.remove('selected'));
                div.classList.add('selected');
                state.answers[question.id] = option.value;
                checkNavigation();
                handleAnswerSelection();
            });

            DOM.test.optionsContainer.appendChild(div);
        });
    }

    // Buttons
    DOM.test.prevBtn.classList.toggle('hidden', qIndex === 0);
    DOM.test.nextBtn.classList.add('hidden'); // Sembunyikan tombol selanjutnya
    checkNavigation();
}

function checkNavigation() {
    const questions = getCurrentQuestions();
    const question = questions[state.currentQuestionIndex];
    DOM.test.nextBtn.disabled = (state.answers[question.id] === undefined);
}

function handleAnswerSelection() {
    setTimeout(() => {
        const questions = getCurrentQuestions();
        if (state.currentQuestionIndex < questions.length - 1) {
            state.currentQuestionIndex++;
            renderQuestion();
        } else {
            finishTest();
        }
    }, 200);
}

DOM.test.prevBtn.addEventListener('click', () => {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        renderQuestion();
    }
});

DOM.test.nextBtn.addEventListener('click', () => {
    const questions = getCurrentQuestions();
    if (state.currentQuestionIndex < questions.length - 1) {
        state.currentQuestionIndex++;
        renderQuestion();
    } else {
        finishTest();
    }
});

DOM.test.cancelBtn.addEventListener('click', () => {
    if (confirm('Apakah Anda yakin ingin membatalkan tes ini dan kembali ke beranda? Semua kemajuan Anda pada tes ini tidak akan disimpan.')) {
        clearInterval(timerInterval);
        state.answers = {};
        showPage('testSelect');
    }
});

// ===========================
// SCORING & RESULT LOGIC
// ===========================

// --- MBTI ---
function calculateMBTIScore() {
    let scores = { EI: 0, SN: 0, TF: 0, JP: 0 };
    mbtiQuestions.forEach(q => {
        const ansValue = state.answers[q.id] || 0;
        scores[q.dimension] += (ansValue * q.direction);
    });

    const type = [
        scores.EI > 0 ? 'E' : 'I',
        scores.SN > 0 ? 'S' : 'N',
        scores.TF > 0 ? 'T' : 'F',
        scores.JP > 0 ? 'J' : 'P'
    ].join('');

    const calcPerc = (val) => {
        const shifted = val + 30;
        const percLeft = Math.round((shifted / 60) * 100);
        const percRight = 100 - percLeft;
        return { left: percLeft, right: percRight };
    };

    return {
        type,
        percentages: {
            EI: calcPerc(scores.EI),
            SN: calcPerc(scores.SN),
            TF: calcPerc(scores.TF),
            JP: calcPerc(scores.JP)
        }
    };
}

function renderDichotomyBar(leftPerc, rightPerc, leftColor, rightColor, barEl, scoreLeftEl, scoreRightEl) {
    scoreLeftEl.textContent = `${leftPerc}%`;
    scoreRightEl.textContent = `${rightPerc}%`;

    if (leftPerc >= rightPerc) {
        barEl.style.left = '0';
        barEl.style.right = 'auto';
        barEl.style.width = `${leftPerc}%`;
        barEl.style.backgroundColor = leftColor;
    } else {
        barEl.style.left = 'auto';
        barEl.style.right = '0';
        barEl.style.width = `${rightPerc}%`;
        barEl.style.backgroundColor = rightColor;
    }
}

function showMBTIResult(result) {
    const typeInfo = mbtiTypes[result.type];
    DOM.result.mbtiType.textContent = result.type;
    DOM.result.mbtiAlias.textContent = typeInfo.alias;
    DOM.result.desc.textContent = typeInfo.description;
    DOM.result.sw.innerHTML = typeInfo.sw;
    DOM.result.careers.textContent = typeInfo.careers;
    DOM.result.figures.textContent = typeInfo.figures;

    const p = result.percentages;
    renderDichotomyBar(p.EI.left, p.EI.right, 'var(--e-color)', 'var(--i-color)', DOM.result.barEI, DOM.result.scoreE, DOM.result.scoreI);
    renderDichotomyBar(p.SN.left, p.SN.right, 'var(--s-color)', 'var(--n-color)', DOM.result.barSN, DOM.result.scoreS, DOM.result.scoreN);
    renderDichotomyBar(p.TF.left, p.TF.right, 'var(--t-color)', 'var(--f-color)', DOM.result.barTF, DOM.result.scoreT, DOM.result.scoreF);
    renderDichotomyBar(p.JP.left, p.JP.right, 'var(--j-color)', 'var(--p-color)', DOM.result.barJP, DOM.result.scoreJ, DOM.result.scoreP);

    showPage('result');
}

// --- DISC ---
function calculateDISCScore() {
    let scores = { D: 0, I: 0, S: 0, C: 0 };
    discQuestions.forEach(q => {
        const val = state.answers[q.id] || 0;
        scores[q.dimension] += (val * q.direction);
    });

    // Normalize: max = 6*3 = 18, min = 6*-3 = -18, range = 36
    const normalize = (val) => Math.round(((val + 18) / 36) * 100);

    const normalized = {
        D: normalize(scores.D),
        I: normalize(scores.I),
        S: normalize(scores.S),
        C: normalize(scores.C)
    };

    // Find dominant
    const dominant = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];

    return { scores: normalized, dominant };
}

function showDISCResult(result) {
    const typeInfo = discTypes[result.dominant];
    DOM.discResult.type.textContent = result.dominant;
    DOM.discResult.typeName.textContent = typeInfo.name + ' — ' + typeInfo.alias;
    DOM.discResult.desc.textContent = typeInfo.description;
    DOM.discResult.sw.innerHTML = typeInfo.sw;
    DOM.discResult.careers.textContent = typeInfo.careers;

    // Animate bars
    DOM.discResult.scoreD.textContent = `${result.scores.D}%`;
    DOM.discResult.scoreI.textContent = `${result.scores.I}%`;
    DOM.discResult.scoreS.textContent = `${result.scores.S}%`;
    DOM.discResult.scoreC.textContent = `${result.scores.C}%`;

    setTimeout(() => {
        DOM.discResult.barD.style.width = `${result.scores.D}%`;
        DOM.discResult.barI.style.width = `${result.scores.I}%`;
        DOM.discResult.barS.style.width = `${result.scores.S}%`;
        DOM.discResult.barC.style.width = `${result.scores.C}%`;
    }, 100);

    showPage('discResult');
}

// --- IQ ---
function calculateIQScore() {
    let correct = 0;
    const total = iqQuestions.length;
    iqQuestions.forEach(q => {
        if (state.answers[q.id] !== undefined && state.answers[q.id] === q.correct) {
            correct++;
        }
    });

    const percentage = correct / total;
    let iq;
    if (percentage <= 0.1) iq = 70;
    else if (percentage <= 0.2) iq = 78;
    else if (percentage <= 0.3) iq = 85;
    else if (percentage <= 0.4) iq = 92;
    else if (percentage <= 0.5) iq = 100;
    else if (percentage <= 0.6) iq = 107;
    else if (percentage <= 0.7) iq = 115;
    else if (percentage <= 0.8) iq = 122;
    else if (percentage <= 0.9) iq = 132;
    else iq = 140 + Math.round((percentage - 0.9) * 50);

    let categoryKey;
    if (iq < 85) categoryKey = 'dibawah';
    else if (iq < 100) categoryKey = 'ratarata';
    else if (iq < 115) categoryKey = 'diatas';
    else if (iq < 130) categoryKey = 'superior';
    else categoryKey = 'gifted';

    return { iq, correct, total, categoryKey };
}

function showIQResult(result) {
    const catInfo = iqCategories[result.categoryKey];

    DOM.iqResult.scoreValue.textContent = result.iq;
    DOM.iqResult.category.textContent = catInfo.label;
    DOM.iqResult.category.style.background = catInfo.color;
    DOM.iqResult.desc.textContent = catInfo.description;
    DOM.iqResult.tips.textContent = catInfo.tips;
    DOM.iqResult.correctCount.textContent = result.correct;
    DOM.iqResult.totalCount.textContent = result.total;

    // Gauge marker position: map IQ 70-145 to 0-100%
    const gaugePerc = Math.max(0, Math.min(100, ((result.iq - 70) / 75) * 100));
    setTimeout(() => {
        DOM.iqResult.gaugeMarker.style.left = `${gaugePerc}%`;
    }, 200);

    showPage('iqResult');
}

// --- WPT ---
function getWPTCategoryKey(categoryName) {
    switch (categoryName) {
        case "Aritmatika Numerik": return "numeric";
        case "Verbal": return "verbal";
        case "Abstrak/Spasial": return "spatial";
        case "Deduktif": return "deductive";
        case "Pengetahuan Umum": return "general";
        case "Perhatian terhadap detail": return "detail";
        default: return "detail";
    }
}

const wptCategoryNames = {
    numeric: "Aritmatika Numerik",
    verbal: "Verbal (Bahasa)",
    spatial: "Abstrak / Spasial",
    deductive: "Penalaran Deduktif",
    general: "Pengetahuan Umum",
    detail: "Ketelitian (Detail)"
};

function calculateWPTScore() {
    let correct = 0;
    const total = wptQuestions.length;
    let breakdown = {
        numeric: 0,
        verbal: 0,
        spatial: 0,
        deductive: 0,
        general: 0,
        detail: 0
    };
    let counts = {
        numeric: 0,
        verbal: 0,
        spatial: 0,
        deductive: 0,
        general: 0,
        detail: 0
    };

    wptQuestions.forEach(q => {
        const catKey = getWPTCategoryKey(q.category);
        counts[catKey]++;
        if (state.answers[q.id] !== undefined && state.answers[q.id] === q.correct) {
            correct++;
            breakdown[catKey]++;
        }
    });

    let categoryKey;
    if (correct <= 15) categoryKey = 'rendah';
    else if (correct <= 21) categoryKey = 'sedang';
    else if (correct <= 26) categoryKey = 'cukup_tinggi';
    else if (correct <= 31) categoryKey = 'tinggi';
    else categoryKey = 'sangat_tinggi';

    let strongestCat = 'numeric';
    let maxPerc = -1;
    Object.keys(breakdown).forEach(key => {
        const perc = counts[key] > 0 ? (breakdown[key] / counts[key]) : 0;
        if (perc > maxPerc) {
            maxPerc = perc;
            strongestCat = key;
        }
    });

    let recommendations = "";
    if (categoryKey === 'rendah') {
        recommendations = `<strong>Rekomendasi Utama: Bidang Operasional & Layanan Lapangan</strong><br>
        Berdasarkan skor kognitif dasar, Anda sangat cocok untuk peran operasional yang membutuhkan panduan terstruktur, kepatuhan prosedur, dan stabilitas kerja.<br>
        <ul style="margin-left: 20px; margin-top: 8px;">
            <li><strong>Operator Produksi & Perakitan</strong> (Ketepatan kerja rutin)</li>
            <li><strong>Petugas Keamanan (Security)</strong> (Kepatuhan aturan & kesiapan)</li>
            <li><strong>Staf Logistik Gudang / Kurir</strong> (Aktivitas fisik & ketepatan pengantaran)</li>
        </ul>`;
    } else if (categoryKey === 'sedang') {
        recommendations = `<strong>Rekomendasi Utama: Bidang Layanan & Administrasi Rutin</strong><br>
        Anda memiliki kemampuan rata-rata dalam memproses informasi umum. Sangat cocok untuk mengelola administrasi rutin serta interaksi langsung dengan pelanggan.<br>
        <ul style="margin-left: 20px; margin-top: 8px;">
            <li><strong>Staf Administrasi Umum</strong> (Mengorganisir dokumen & data kantor)</li>
            <li><strong>Customer Service / Resepsionis</strong> (Pelayanan langsung & komunikasi)</li>
            <li><strong>Cashier / Sales Counter</strong> (Ketelitian transaksi & penjualan langsung)</li>
        </ul>`;
    } else if (categoryKey === 'cukup_tinggi') {
        recommendations = `<strong>Rekomendasi Utama: Koordinasi Tim & Pengawas Menengah</strong><br>
        Skor Anda menunjukkan kapasitas yang baik untuk mengelola tugas semi-kompleks, melakukan koordinasi teknis, serta mengawasi operasional harian.<br>
        <ul style="margin-left: 20px; margin-top: 8px;">
            <li><strong>Store / Branch Manager</strong> (Pengelolaan cabang toko & tim penjualan)</li>
            <li><strong>Supervisor Operasional</strong> (Koordinasi jadwal & kualitas kerja tim)</li>
            <li><strong>Staff IT Support / Helpdesk</strong> (Penyelesaian masalah teknis & jaringan)</li>
            <li><strong>Sekretaris Eksekutif</strong> (Manajemen jadwal & administrasi tingkat tinggi)</li>
        </ul>`;
    } else if (categoryKey === 'tinggi') {
        if (strongestCat === 'numeric') {
            recommendations = `<strong>Rekomendasi Utama: Profesional Bidang Numerik & Keuangan</strong><br>
            Kemampuan numerik Anda yang sangat kuat dikombinasikan dengan skor kognitif tinggi membuat Anda ideal untuk posisi analis keuangan atau rekayasa data.<br>
            <ul style="margin-left: 20px; margin-top: 8px;">
                <li><strong>Financial / Investment Analyst</strong> (Analisis tren pasar & kelayakan investasi)</li>
                <li><strong>Data Analyst / Statistician</strong> (Pengolahan data numerik untuk bisnis)</li>
                <li><strong>Auditor / Akuntan Publik</strong> (Verifikasi akurasi data keuangan perusahaan)</li>
            </ul>`;
        } else if (strongestCat === 'verbal' || strongestCat === 'deductive') {
            recommendations = `<strong>Rekomendasi Utama: Rekayasa Perangkat Lunak & Analisis Logika</strong><br>
            Kombinasi kemampuan logika deduktif dan verbal yang tajam membuat Anda sangat cocok untuk memecahkan masalah kompleks berbasis logika pemrograman atau hukum.<br>
            <ul style="margin-left: 20px; margin-top: 8px;">
                <li><strong>Programmer / Software Engineer</strong> (Penyusunan kode & algoritma aplikasi)</li>
                <li><strong>System Analyst</strong> (Perancangan sistem informasi bisnis)</li>
                <li><strong>Legal Counsel / Legal Auditor</strong> (Analisis kontrak & regulasi hukum)</li>
            </ul>`;
        } else if (strongestCat === 'spatial') {
            recommendations = `<strong>Rekomendasi Utama: Perancangan Geometris & Arsitektur</strong><br>
            Logika spasial Anda yang sangat baik sangat cocok untuk bidang visual, struktur, dan desain teknik.<br>
            <ul style="margin-left: 20px; margin-top: 8px;">
                <li><strong>Arsitek / Desainer Interior</strong> (Perancangan estetika ruang dan bangunan)</li>
                <li><strong>Insinyur Sipil / Drafter</strong> (Perancangan gambar teknik & kalkulasi struktur)</li>
                <li><strong>UI/UX Designer</strong> (Desain tata letak antarmuka aplikasi digital)</li>
            </ul>`;
        } else {
            recommendations = `<strong>Rekomendasi Utama: Analis Bisnis & Instruktur Senior</strong><br>
            Kemampuan analitis umum dan perhatian terhadap detail yang seimbang membuat Anda ideal untuk peran pengajaran, bimbingan, atau analisis proses bisnis.<br>
            <ul style="margin-left: 20px; margin-top: 8px;">
                <li><strong>Business Analyst</strong> (Analisis proses bisnis & usulan solusi)</li>
                <li><strong>Quality Assurance (QA) Analyst</strong> (Pengujian kualitas sistem/produk)</li>
                <li><strong>Guru / Instruktur Pelatihan</strong> (Penyampaian ilmu & materi edukasi)</li>
            </ul>`;
        }
    } else {
        recommendations = `<strong>Rekomendasi Utama: Posisi Kepemimpinan Strategis & Riset Tingkat Tinggi</strong><br>
        Kapasitas kognitif Anda berada di persentil teratas. Anda sangat cocok untuk peran penentu arah kebijakan strategis organisasi atau riset ilmiah tingkat tinggi.<br>
        <ul style="margin-left: 20px; margin-top: 8px;">
            <li><strong>Direktur Utama / Chief Executive Officer (CEO)</strong> (Penentu arah kebijakan & strategi korporasi)</li>
            <li><strong>Konsultan Manajemen Strategis</strong> (Pemberi solusi bisnis tingkat tinggi untuk klien)</li>
            <li><strong>Research & Development (R&D) Director / Peneliti Senior</strong> (Penelitian & inovasi produk baru)</li>
            <li><strong>Data Scientist / AI Researcher</strong> (Analisis data kompleks menggunakan kecerdasan buatan)</li>
        </ul>`;
    }

    return { score: correct, total, categoryKey, breakdown, counts, recommendations };
}

function showWPTResult(result) {
    const catInfo = wptCategories[result.categoryKey];

    DOM.wptResult.scoreValue.textContent = `${result.score} / ${result.total}`;
    DOM.wptResult.category.textContent = catInfo.label;
    DOM.wptResult.category.style.background = catInfo.color;
    DOM.wptResult.desc.textContent = catInfo.description;
    DOM.wptResult.recommendations.innerHTML = result.recommendations;

    DOM.wptResult.breakdownBars.innerHTML = '';
    
    const categories = ['numeric', 'verbal', 'spatial', 'deductive', 'general', 'detail'];
    
    categories.forEach(catKey => {
        const score = result.breakdown[catKey] || 0;
        const total = result.counts[catKey] || 0;
        const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
        const label = wptCategoryNames[catKey];

        const barGroup = document.createElement('div');
        barGroup.className = 'dicho-group';
        barGroup.style.margin = '5px 0';
        
        barGroup.innerHTML = `
            <span class="dicho-label left" style="width: 200px; text-align: left; font-weight: 600;">${label}</span>
            <div class="dicho-bar-bg" style="flex: 1; height: 16px; background: rgba(0, 0, 0, 0.05); border-radius: 8px; overflow: hidden; position: relative;">
                <div class="dicho-bar-fill" style="width: ${percentage}%; height: 100%; background: linear-gradient(90deg, var(--primary-color), #818cf8); border-radius: 8px; transition: width 0.8s ease-out;"></div>
            </div>
            <span class="dicho-label right" style="width: 100px; text-align: right; font-weight: 600;">${score}/${total} (${percentage}%)</span>
        `;
        DOM.wptResult.breakdownBars.appendChild(barGroup);
    });

    showPage('wptResult');
}

// ===========================
// BIG FIVE (OCEAN) LOGIC
// ===========================
const bigfiveTips = {
    O: {
        high: "Salurkan imajinasi Anda melalui proyek kreatif atau pembelajaran baru secara konsisten, namun pastikan Anda menyelesaikan komitmen yang sudah ada sebelum beralih ke hal baru.",
        low: "Cobalah menantang diri sendiri dengan mencoba satu aktivitas baru atau membaca buku di luar bidang keahlian Anda untuk melatih fleksibilitas kognitif.",
        mid: "Pertahankan keseimbangan antara cara konvensional dan ide kreatif baru yang Anda miliki sesuai kebutuhan situasi."
    },
    C: {
        high: "Sadari kecenderungan perfeksionisme Anda. Berikan ruang toleransi bagi kesalahan kecil dan luangkan waktu untuk beristirahat tanpa merasa bersalah.",
        low: "Mulailah membuat rencana harian sederhana (to-do list) dan berusahalah menyelesaikan tugas-tugas kecil tanpa menundanya.",
        mid: "Pertahankan keteraturan kerja Anda sambil tetap menjaga kelenturan waktu untuk menghadapi hal-hal spontan."
    },
    E: {
        high: "Berikan waktu bagi orang lain untuk berbicara dan latih keterampilan mendengarkan aktif. Sediakan pula waktu mandiri untuk merefleksikan diri.",
        low: "Tantang diri Anda untuk sesekali terlibat dalam percakapan ringan (small talk) atau menghadiri acara sosial untuk memperluas jaringan.",
        mid: "Manfaatkan sifat ambivalen Anda dengan menempatkan diri secara tepat: bersosialisasi secara aktif di forum, dan fokus bekerja saat sendiri."
    },
    A: {
        high: "Belajarlah menetapkan batasan (boundary setting) yang sehat dan katakan 'tidak' jika suatu permintaan dirasa merugikan kesejahteraan emosional Anda.",
        low: "Latihlah mengekspresikan pendapat Anda dengan cara yang lebih berempati dan hindari komentar sarkastik yang bisa menyakiti perasaan orang lain.",
        mid: "Pertahankan sikap kooperatif Anda namun pastikan Anda tetap asertif saat memperjuangkan hak atau pendapat pribadi."
    },
    N: {
        high: "Latih kesadaran penuh (mindfulness) atau jurnalisme emosi untuk membantu Anda mengelola kecemasan sebelum berkembang menjadi stres berat.",
        low: "Stabilitas emosional Anda adalah aset besar. Gunakan ketenangan ini untuk memimpin di situasi kritis, namun pastikan tetap peka terhadap perasaan orang lain.",
        mid: "Kenali pemicu stres harian Anda agar emosi Anda tetap stabil dan terjaga dalam batas yang sehat."
    }
};

function calculateBigFiveScore() {
    let scores = { O: 0, C: 0, E: 0, A: 0, N: 0 };
    bigfiveQuestions.forEach(q => {
        const val = state.answers[q.id] || 0;
        scores[q.dimension] += (val * q.direction);
    });

    const normalize = (val) => Math.round(((val + 30) / 60) * 100);

    const normalized = {
        O: normalize(scores.O),
        C: normalize(scores.C),
        E: normalize(scores.E),
        A: normalize(scores.A),
        N: normalize(scores.N)
    };

    // Find dominant dimension (the one with highest percentage score)
    const dominant = Object.entries(normalized).sort((a, b) => b[1] - a[1])[0][0];

    return { scores: normalized, dominant };
}

function getBigFiveSW(scores) {
    let strengths = [];
    let weaknesses = [];

    Object.entries(scores).forEach(([key, val]) => {
        const dim = bigfiveDimensions[key];
        if (val > 60) {
            strengths.push(...dim.highStrengths.split(',').map(s => s.trim()));
            weaknesses.push(...dim.highWeaknesses.split(',').map(w => w.trim()));
        } else if (val < 40) {
            strengths.push(...dim.lowStrengths.split(',').map(s => s.trim()));
            weaknesses.push(...dim.lowWeaknesses.split(',').map(w => w.trim()));
        }
    });

    // Fallbacks if no extreme scores
    if (strengths.length === 0) {
        strengths.push("Fleksibel", "Seimbang dalam berinteraksi", "Realistis", "Mampu beradaptasi dengan baik");
    }
    if (weaknesses.length === 0) {
        weaknesses.push("Terkadang ragu-ragu di antara pilihan ekstrim", "Mungkin kurang menonjol pada spesialisasi tertentu yang butuh kepribadian ekstrim");
    }

    let swHTML = `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">`;
    swHTML += `<div><h5 style="color: #10b981; font-size: 1rem; margin-bottom: 8px; font-weight: 600;">💪 Kekuatan Anda:</h5><ul style="margin-left: 20px; line-height: 1.5;">`;
    strengths.slice(0, 6).forEach(s => {
        swHTML += `<li style="margin-bottom: 4px;">${s}</li>`;
    });
    swHTML += `</ul></div>`;
    swHTML += `<div><h5 style="color: #ef4444; font-size: 1rem; margin-bottom: 8px; font-weight: 600;">⚠️ Area Pengembangan:</h5><ul style="margin-left: 20px; line-height: 1.5;">`;
    weaknesses.slice(0, 6).forEach(w => {
        swHTML += `<li style="margin-bottom: 4px;">${w}</li>`;
    });
    swHTML += `</ul></div>`;
    swHTML += `</div>`;

    return swHTML;
}

function getBigFiveCareerRecommendations(scores, dominant) {
    const domDim = bigfiveDimensions[dominant];
    const domScore = scores[dominant];
    let primaryCareers = domScore > 50 ? domDim.highCareers : domDim.lowCareers;
    
    let secondaryCareers = [];
    Object.entries(scores).forEach(([key, val]) => {
        if (key !== dominant) {
            if (val > 65) {
                secondaryCareers.push(bigfiveDimensions[key].highCareers);
            } else if (val < 35) {
                secondaryCareers.push(bigfiveDimensions[key].lowCareers);
            }
        }
    });

    let recHTML = `<p>Berdasarkan dimensi dominan Anda, yaitu <strong>${domDim.nameId} (${domDim.name})</strong>, Anda akan sangat berkembang pada karir berikut:</p>`;
    recHTML += `<ul style="margin-left: 20px; margin-top: 10px; margin-bottom: 15px;">`;
    primaryCareers.split(',').forEach(c => {
        recHTML += `<li style="margin-bottom: 5px;"><strong>${c.trim()}</strong></li>`;
    });
    recHTML += `</ul>`;

    if (secondaryCareers.length > 0) {
        recHTML += `<p style="margin-top: 15px;">Rekomendasi karir alternatif berdasarkan dimensi kepribadian Anda yang lain:</p>`;
        recHTML += `<ul style="margin-left: 20px; margin-top: 10px;">`;
        let count = 0;
        for (let sec of secondaryCareers) {
            const list = sec.split(',');
            for (let c of list) {
                if (count < 4) {
                    recHTML += `<li style="margin-bottom: 5px;">${c.trim()}</li>`;
                    count++;
                }
            }
        }
        recHTML += `</ul>`;
    }
    return recHTML;
}

function getBigFiveTips(scores) {
    let tipsHTML = `<ul style="margin-left: 20px;">`;
    Object.entries(scores).forEach(([key, val]) => {
        const dim = bigfiveDimensions[key];
        let tipText = '';
        if (val > 60) {
            tipText = bigfiveTips[key].high;
        } else if (val < 40) {
            tipText = bigfiveTips[key].low;
        } else {
            tipText = bigfiveTips[key].mid;
        }
        tipsHTML += `<li style="margin-bottom: 8px;"><strong>${dim.nameId} (${val}%):</strong> ${tipText}</li>`;
    });
    tipsHTML += `</ul>`;
    return tipsHTML;
}

function showBigFiveResult(result) {
    const dominantDim = bigfiveDimensions[result.dominant];
    DOM.bigfiveResult.dominantName.textContent = `${dominantDim.nameId} (${dominantDim.name})`;

    // Animate progress bars
    DOM.bigfiveResult.scoreO.textContent = `${result.scores.O}%`;
    DOM.bigfiveResult.scoreC.textContent = `${result.scores.C}%`;
    DOM.bigfiveResult.scoreE.textContent = `${result.scores.E}%`;
    DOM.bigfiveResult.scoreA.textContent = `${result.scores.A}%`;
    DOM.bigfiveResult.scoreN.textContent = `${result.scores.N}%`;

    setTimeout(() => {
        DOM.bigfiveResult.barO.style.width = `${result.scores.O}%`;
        DOM.bigfiveResult.barC.style.width = `${result.scores.C}%`;
        DOM.bigfiveResult.barE.style.width = `${result.scores.E}%`;
        DOM.bigfiveResult.barA.style.width = `${result.scores.A}%`;
        DOM.bigfiveResult.barN.style.width = `${result.scores.N}%`;
    }, 100);

    // Dimension Details
    let detailsHTML = '';
    Object.entries(result.scores).forEach(([dimKey, score]) => {
        const dim = bigfiveDimensions[dimKey];
        let classification = '';
        let desc = '';
        let label = '';
        if (score > 60) {
            classification = 'Tinggi';
            desc = dim.highDesc;
            label = dim.highLabel;
        } else if (score < 40) {
            classification = 'Rendah';
            desc = dim.lowDesc;
            label = dim.lowLabel;
        } else {
            classification = 'Sedang';
            desc = dim.midDesc;
            label = 'Seimbang';
        }
        
        detailsHTML += `
            <div class="result-card" style="margin-bottom: 15px; border-radius: 12px; padding: 18px;">
                <h4 style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px; border-bottom: 2px solid ${dim.color};">
                    <span style="font-size: 1.2rem;">${dim.icon}</span>
                    <span style="color: var(--text-main); font-weight: 700;">${dim.nameId}</span>
                    <span style="font-size: 0.85rem; font-weight: 400; color: var(--text-muted);">(${dim.name})</span>
                </h4>
                <div style="margin: 8px 0; font-size: 0.95rem; font-weight: 600; color: var(--text-main);">
                    Skor: <span style="color: ${dim.color}; font-size: 1.1rem; font-weight: 700;">${score}%</span> — 
                    <span>Kategori: <strong style="color: ${dim.color};">${classification}</strong> (${label})</span>
                </div>
                <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-muted);">${desc}</p>
            </div>
        `;
    });
    DOM.bigfiveResult.dimensionDetails.innerHTML = detailsHTML;

    // SW, Recommendations, and Tips
    DOM.bigfiveResult.sw.innerHTML = getBigFiveSW(result.scores);
    DOM.bigfiveResult.recommendations.innerHTML = getBigFiveCareerRecommendations(result.scores, result.dominant);
    DOM.bigfiveResult.tips.innerHTML = getBigFiveTips(result.scores);

    showPage('bigfiveResult');
}

// ===========================
// RIASEC (HOLLAND INTERESTS) LOGIC
// ===========================
function calculateRIASECScore() {
    let scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    riasecQuestions.forEach(q => {
        const val = state.answers[q.id] || 0;
        scores[q.dimension] += (val * q.direction);
    });

    const normalize = (val) => Math.round(((val + 18) / 36) * 100);

    const normalized = {
        R: normalize(scores.R),
        I: normalize(scores.I),
        A: normalize(scores.A),
        S: normalize(scores.S),
        E: normalize(scores.E),
        C: normalize(scores.C)
    };

    // Sort descending to get dominant code
    const sorted = Object.entries(normalized).sort((a, b) => b[1] - a[1]);
    const dominantCode = sorted.slice(0, 3).map(entry => entry[0]).join('');
    const dominantNames = sorted.slice(0, 3).map(entry => riasecDimensions[entry[0]].name).join(' - ');

    return { scores: normalized, dominantCode, dominantNames };
}

function getRIASECRecommendations(scores, dominantCode) {
    const code = dominantCode;
    const top2 = code.substring(0, 2);
    const top1 = code.charAt(0);

    const matches3 = {
        'RIA': { title: 'Inovator Teknis / Desainer Produk', desc: 'Anda memiliki minat kuat pada pemecahan masalah teknis dengan sentuhan kreatif. Anda menyukai rancang bangun objek nyata menggunakan teknologi baru.' },
        'RIC': { title: 'Spesialis Sistem Informasi / Teknik Presisi', desc: 'Anda tertarik pada sistem kerja teknis yang terstruktur. Anda cocok dengan pengelolaan data teknis atau administrasi sistem IT.' },
        'IAS': { title: 'Desainer Pengalaman Pengguna (UX) / Peneliti Sosial', desc: 'Anda memadukan pemahaman perilaku manusia secara ilmiah dengan solusi desain kreatif.' },
        'ISE': { title: 'Konsultan Teknologi / Analis R&D Bisnis', desc: 'Anda mampu menganalisis data pasar atau teknologi untuk memimpin tim atau mengarahkan keputusan bisnis.' },
        'ASE': { title: 'Wirausahawan Kreatif / Event Conceptor', desc: 'Anda berjiwa ekspresif, persuasif, dan sosial. Anda sangat berkembang di industri kreatif, pemasaran, atau hiburan.' },
        'SEC': { title: 'Manajer Sumber Daya Manusia (HR) / Pengelola Layanan', desc: 'Kepedulian sosial tinggi Anda didukung kemampuan kepemimpinan dan manajemen organisasi terstruktur.' },
        'ESC': { title: 'Manajer Operasional / Konsultan Keuangan', desc: 'Anda berbakat memimpin organisasi bisnis yang terstruktur dengan kemampuan komunikasi persuasif.' },
        'CEI': { title: 'Analis Keuangan / Auditor Bisnis', desc: 'Anda memiliki kemampuan mendalam dalam organisasi data keuangan serta analisis risiko bisnis.' }
    };

    const matches2 = {
        'RI': { title: 'Teknik & Penelitian Mandiri', desc: 'Minat pada analisis teknis dan mekanis secara mandiri.' },
        'IR': { title: 'Teknik & Penelitian Mandiri', desc: 'Minat pada analisis teknis dan mekanis secara mandiri.' },
        'RA': { title: 'Desain Teknis & Kriya Kreatif', desc: 'Pemaduan keterampilan fisik praktis dengan desain kreatif.' },
        'AR': { title: 'Desain Teknis & Kriya Kreatif', desc: 'Pemaduan keterampilan fisik praktis dengan desain kreatif.' },
        'RS': { title: 'Pelayanan Lapangan & Praktis', desc: 'Aktivitas fisik lapangan yang bertujuan membantu makhluk hidup atau lingkungan.' },
        'SR': { title: 'Pelayanan Lapangan & Praktis', desc: 'Aktivitas fisik lapangan yang bertujuan membantu makhluk hidup atau lingkungan.' },
        'RE': { title: 'Manajemen Konstruksi / Proyek Teknis', desc: 'Kepemimpinan dalam tim teknis lapangan.' },
        'ER': { title: 'Manajemen Konstruksi / Proyek Teknis', desc: 'Kepemimpinan dalam tim teknis lapangan.' },
        'RC': { title: 'Ketelitian Operasional / QC', desc: 'Fokus pada kerapian, ketelitian, dan detail teknis mesin atau data.' },
        'CR': { title: 'Ketelitian Operasional / QC', desc: 'Fokus pada kerapian, ketelitian, dan detail teknis mesin atau data.' },
        'IA': { title: 'Riset Kreatif & Humaniora', desc: 'Penyelidikan mendalam yang membutuhkan kreativitas pemikiran bebas.' },
        'AI': { title: 'Riset Kreatif & Humaniora', desc: 'Penyelidikan mendalam yang membutuhkan kreativitas pemikiran bebas.' },
        'IS': { title: 'Sains Sosial & Layanan Medis', desc: 'Fokus pada riset ilmiah dan pelayanan/terapi kesehatan.' },
        'SI': { title: 'Sains Sosial & Layanan Medis', desc: 'Fokus pada riset ilmiah dan pelayanan/terapi kesehatan.' },
        'IE': { title: 'Analis Finansial & Konsultan Pasar', desc: 'Kemampuan analisis strategis untuk kebutuhan ekspansi bisnis.' },
        'EI': { title: 'Analis Finansial & Konsultan Pasar', desc: 'Kemampuan analisis strategis untuk kebutuhan ekspansi bisnis.' },
        'IC': { title: 'Pengolahan Statistik & Analisis Risiko', desc: 'Pengolahan data administratif yang kompleks dan kepatuhan hukum.' },
        'CI': { title: 'Pengolahan Statistik & Analisis Risiko', desc: 'Pengolahan data administratif yang kompleks dan kepatuhan hukum.' },
        'AS': { title: 'Pendidikan Kreatif & Komunikasi Sosial', desc: 'Membantu orang lain melalui bimbingan kreatif atau apresiasi seni.' },
        'SA': { title: 'Pendidikan Kreatif & Komunikasi Sosial', desc: 'Membantu orang lain melalui bimbingan kreatif atau apresiasi seni.' },
        'AE': { title: 'Komunikasi Pemasaran & Industri Kreatif', desc: 'Pengembangan konsep seni dengan nilai jual komersial tinggi.' },
        'EA': { title: 'Komunikasi Pemasaran & Industri Kreatif', desc: 'Pengembangan konsep seni dengan nilai jual komersial tinggi.' },
        'AC': { title: 'Administrasi Seni / Event Planner', desc: 'Mengorganisir proyek kreatif secara detail dan sistematis.' },
        'CA': { title: 'Administrasi Seni / Event Planner', desc: 'Mengorganisir proyek kreatif secara detail dan sistematis.' },
        'SE': { title: 'Manajemen Layanan & Hubungan Masyarakat', desc: 'Memimpin program sosial atau hubungan interpersonal korporat.' },
        'ES': { title: 'Manajemen Layanan & Hubungan Masyarakat', desc: 'Memimpin program sosial atau hubungan interpersonal korporat.' },
        'SC': { title: 'Layanan Administratif & Koordinasi', desc: 'Membantu pengelolaan organisasi dengan ketelitian tinggi.' },
        'CS': { title: 'Layanan Administratif & Koordinasi', desc: 'Membantu pengelolaan organisasi dengan ketelitian tinggi.' },
        'EC': { title: 'Keuangan & Manajemen Bisnis', desc: 'Negosiasi bisnis didukung oleh pengarsipan data yang rapi.' },
        'CE': { title: 'Keuangan & Manajemen Bisnis', desc: 'Negosiasi bisnis didukung oleh pengarsipan data yang rapi.' }
    };

    let title = '';
    let desc = '';

    if (matches3[code]) {
        title = matches3[code].title;
        desc = matches3[code].desc;
    } else if (matches3[code.split('').reverse().join('')]) {
        const rev = code.split('').reverse().join('');
        title = matches3[rev].title;
        desc = matches3[rev].desc;
    } else if (matches2[top2]) {
        title = matches2[top2].title;
        desc = matches2[top2].desc;
    } else {
        const dim1 = riasecDimensions[top1];
        title = `Spesialis Bidang ${dim1.name}`;
        desc = `Fokus utama Anda terletak pada tipe kepribadian ${dim1.name} (${dim1.nameId}).`;
    }

    let html = `<p style="font-size: 1.1rem; font-weight: 700; color: #3b82f6; margin-bottom: 8px;">Arah Karir Dominan: ${title}</p>`;
    html += `<p style="margin-bottom: 15px; color: var(--text-muted);">${desc}</p>`;

    html += `<p>Berikut adalah rekomendasi area kerja spesifik yang menggabungkan tipe kepribadian terkuat Anda (${code.split('').join('-')}):</p>`;
    html += `<ul style="margin-left: 20px; margin-top: 10px;">`;

    code.split('').forEach(char => {
        const dim = riasecDimensions[char];
        if (dim) {
            const list = dim.careers.split(',');
            html += `<li style="margin-bottom: 6px;"><strong>Bidang ${dim.name} (${dim.icon}):</strong> ${list[0].trim()}, ${list[1].trim()}</li>`;
        }
    });
    html += `</ul>`;

    return html;
}

function showRIASECResult(result) {
    const code = result.dominantCode;
    const sortedNames = result.dominantNames;

    DOM.riasecResult.dominantName.textContent = `${code} (${sortedNames})`;

    // Animate progress bars
    DOM.riasecResult.scoreR.textContent = `${result.scores.R}%`;
    DOM.riasecResult.scoreI.textContent = `${result.scores.I}%`;
    DOM.riasecResult.scoreA.textContent = `${result.scores.A}%`;
    DOM.riasecResult.scoreS.textContent = `${result.scores.S}%`;
    DOM.riasecResult.scoreE.textContent = `${result.scores.E}%`;
    DOM.riasecResult.scoreC.textContent = `${result.scores.C}%`;

    setTimeout(() => {
        DOM.riasecResult.barR.style.width = `${result.scores.R}%`;
        DOM.riasecResult.barI.style.width = `${result.scores.I}%`;
        DOM.riasecResult.barA.style.width = `${result.scores.A}%`;
        DOM.riasecResult.barS.style.width = `${result.scores.S}%`;
        DOM.riasecResult.barE.style.width = `${result.scores.E}%`;
        DOM.riasecResult.barC.style.width = `${result.scores.C}%`;
    }, 100);

    // Dimension Details for top 3
    let detailsHTML = '<h4 style="margin-top: 20px; margin-bottom: 15px;">Penjelasan 3 Tipe Minat Terkuat Anda</h4>';
    code.split('').forEach(char => {
        const dim = riasecDimensions[char];
        const score = result.scores[char];
        let classification = '';
        if (score > 60) classification = 'Tinggi';
        else if (score < 40) classification = 'Rendah';
        else classification = 'Sedang';

        detailsHTML += `
            <div class="result-card" style="margin-bottom: 15px; border-radius: 12px; padding: 18px;">
                <h4 style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px; border-bottom: 2px solid ${dim.color};">
                    <span style="font-size: 1.2rem;">${dim.icon}</span>
                    <span style="color: var(--text-main); font-weight: 700;">Tipe ${dim.name}</span>
                    <span style="font-size: 0.85rem; font-weight: 400; color: var(--text-muted);">(${dim.nameId})</span>
                </h4>
                <div style="margin: 8px 0; font-size: 0.95rem; font-weight: 600; color: var(--text-main);">
                    Skor Minat: <span style="color: ${dim.color}; font-size: 1.1rem; font-weight: 700;">${score}%</span> — 
                    <span>Kategori: <strong style="color: ${dim.color};">${classification}</strong></span>
                </div>
                <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-muted); margin-bottom: 10px;">${dim.desc}</p>
                <p style="font-size: 0.9rem; line-height: 1.4; color: var(--text-main);">
                    <strong>Kekuatan:</strong> ${dim.strengths}
                </p>
            </div>
        `;
    });
    DOM.riasecResult.dimensionDetails.innerHTML = detailsHTML;

    // Career recommendations matching Holland Code
    DOM.riasecResult.recommendations.innerHTML = getRIASECRecommendations(result.scores, code);

    showPage('riasecResult');
}

// --- PAPI Kostick ---
function calculatePAPIScore() {
    const scores = {};
    Object.keys(papiAspects).forEach(k => scores[k] = 0);
    papiQuestions.forEach(q => {
        const ans = state.answers[q.id];
        if (ans === 'A') scores[q.dimA]++;
        else if (ans === 'B') scores[q.dimB]++;
    });
    // Determine leadership style
    const leadScore = scores.L + scores.P + scores.I;
    let leadStyle = 'Moderat';
    if (leadScore >= 20) leadStyle = 'Sangat Dominan & Direktif';
    else if (leadScore >= 15) leadStyle = 'Dominan & Tegas';
    else if (leadScore >= 10) leadStyle = 'Moderat & Kolaboratif';
    else leadStyle = 'Suportif & Kooperatif';
    return { scores, leadStyle };
}

function showPAPIResult(result) {
    const s = result.scores;
    DOM.papiResult.summaryLead.textContent = result.leadStyle;
    
    // Leadership Cluster (L, P, I)
    const lTotal = s.L + s.P + s.I;
    let leadText = `Skor Kepemimpinan: <strong>${lTotal} / 27</strong> (Peran: L=${s.L}, Kontrol: P=${s.P}, Pengambil Keputusan: I=${s.I}).<br/><br/>`;
    if (lTotal >= 18) {
        leadText += `<strong>Kepemimpinan Kuat &amp; Direktif (Skor Tinggi):</strong> Anda adalah pemimpin yang asertif, dominan, dan proaktif. Anda memiliki dorongan kuat untuk mengendalikan situasi (P) dan mengarahkan tim menuju target (L). Kemudahan mengambil keputusan (I) membuat Anda andal di situasi krisis. Rekomendasi: Berhati-hatilah agar tidak terkesan otoriter; luangkan waktu untuk mendengarkan umpan balik dari anggota tim Anda agar iklim kerja tetap kondusif.`;
    } else if (lTotal >= 10) {
        leadText += `<strong>Kepemimpinan Partisipatif &amp; Kolaboratif (Skor Sedang):</strong> Gaya memimpin Anda cenderung demokratis. Anda mampu mengambil inisiatif memimpin ketika situasi menuntut (L), namun Anda juga nyaman mendelegasikan wewenang (P) dan meminta konsensus kelompok sebelum mengambil keputusan penting (I). Ini menciptakan kerja sama tim yang harmonis dan meningkatkan rasa kepemilikan bersama atas tujuan organisasi.`;
    } else {
        leadText += `<strong>Kontributor Mandiri &amp; Kooperatif (Skor Rendah):</strong> Anda lebih menyukai peran sebagai pelaksana tugas atau spesialis mandiri dibanding memimpin orang lain secara formal. Anda cenderung menghindari kontrol yang berlebihan (P) dan merasa lebih nyaman bekerja dalam koordinasi tim yang sejajar. Keunggulan Anda adalah keandalan dalam menyelesaikan porsi tugas Anda secara kooperatif tanpa memicu konflik dominasi kekuasaan.`;
    }
    DOM.papiResult.leadDesc.innerHTML = leadText;
    
    // Work Direction Cluster (G, A, N)
    const dTotal = s.G + s.A + s.N;
    let dirText = `Skor Arah Kerja: <strong>${dTotal} / 27</strong> (Ketekunan: G=${s.G}, Prestasi: A=${s.A}, Penyelesai: N=${s.N}).<br/><br/>`;
    if (dTotal >= 18) {
        dirText += `<strong>Sangat Berorientasi Hasil &amp; Gigih (Skor Tinggi):</strong> Anda adalah pekerja keras yang berdedikasi tinggi (G) dengan motivasi berprestasi luar biasa (A). Anda memiliki kebutuhan yang mendalam untuk menyelesaikan tugas secara tuntas hingga detail terkecil (N). Anda tidak mudah menyerah oleh kendala dan selalu berorientasi pada target performa tinggi. Rekomendasi: Jaga batas antara kerja dan kehidupan pribadi untuk menghindari kelelahan fisik/mental (burnout).`;
    } else if (dTotal >= 10) {
        dirText += `<strong>Pekerja Produktif &amp; Seimbang (Skor Sedang):</strong> Anda memiliki komitmen kerja yang baik dan sehat. Anda termotivasi untuk berprestasi (A) dan berupaya menyelesaikan tugas tepat waktu (N), tetapi Anda juga tahu kapan harus memperlambat tempo untuk beristirahat. Anda mampu mengatur prioritas secara efektif dan bekerja secara produktif tanpa stres yang berlebihan.`;
    } else {
        dirText += `<strong>Pekerja Santai &amp; Fleksibel (Skor Rendah):</strong> Ritme kerja Anda cenderung santai dan dinamis. Anda kurang termotivasi oleh tekanan target kuantitatif (A) atau kewajiban menyelesaikan tugas dengan prosedur baku yang kaku (N). Anda bekerja paling baik dalam kondisi yang fleksibel dan kreatif di mana kenyamanan proses kerja lebih diutamakan daripada sekadar pencapaian KPI yang agresif.`;
    }
    DOM.papiResult.directionDesc.innerHTML = dirText;
    
    // Work Activity Cluster (T, V)
    const aTotal = s.T + s.V;
    let actText = `Skor Aktivitas Kerja: <strong>${aTotal} / 18</strong> (Tempo: T=${s.T}, Vitalitas: V=${s.V}).<br/><br/>`;
    if (aTotal >= 12) {
        actText += `<strong>Dinamis, Cepat, &amp; Berenergi Tinggi (Skor Tinggi):</strong> Anda memiliki tempo kerja yang cepat (T) and vitalitas fisik yang melimpah (V). Anda menyukai lingkungan kerja yang fast-paced, dinamis, dan penuh aksi spontan. Anda mampu menangani banyak pekerjaan sekaligus secara energetik. Rekomendasi: Pastikan untuk melakukan pengecekan ulang terhadap kualitas kerja, karena kecepatan yang terlalu tinggi terkadang dapat mengurangi tingkat ketelitian.`;
    } else if (aTotal >= 6) {
        actText += `<strong>Sistematis &amp; Konsisten (Skor Sedang):</strong> Anda memiliki ritme aktivitas yang stabil dan terukur. Anda tidak tergesa-gesa namun juga tidak menunda-nunda pekerjaan. Anda mampu menjaga stamina dan konsistensi energi dengan sangat baik sepanjang hari, menghasilkan output kerja yang konsisten secara bertahap.`;
    } else {
        actText += `<strong>Tenang, Deliberat, &amp; Fokus Kualitas (Skor Rendah):</strong> Anda bekerja dengan tempo yang perlahan dan penuh konsentrasi. Anda lebih mengutamakan kedalaman berpikir, kehati-hatian, dan kualitas hasil kerja daripada sekadar kecepatan menyelesaikan tugas (T). Anda sangat cocok untuk tipe pekerjaan analitis mandiri yang membutuhkan fokus tinggi dan minim gangguan eksternal.`;
    }
    DOM.papiResult.activityDesc.innerHTML = actText;
    
    // Work Style Cluster (R, D, C)
    let styleText = `Analisis Gaya Kerja (Teoretis: R=${s.R}, Detail: D=${s.D}, Organisasi: C=${s.C}):<ul style="margin-left: 20px; margin-top: 10px; display: flex; flex-direction: column; gap: 8px;">`;
    styleText += `<li><strong>Tipe Teoretis (R):</strong> ` + (s.R >= 5 ? `Skor ${s.R} (Tinggi). Anda menyukai konsep abstrak, analisis mendalam, pemecahan masalah berbasis teori, serta perencanaan konseptual strategis.` : `Skor ${s.R} (Rendah). Anda cenderung praktis, pragmatis, dan berfokus pada eksekusi nyata di lapangan dibanding berteori.`) + `</li>`;
    styleText += `<li><strong>Minat pada Detail (D):</strong> ` + (s.D >= 5 ? `Skor ${s.D} (Tinggi). Anda sangat cermat, teliti, terstruktur, dan berupaya meminimalisir kesalahan sekecil apa pun dalam dokumen atau proses.` : `Skor ${s.D} (Rendah). Anda lebih menyukai sudut pandang global (big picture) dan menyerahkan urusan detail mikro kepada rekan kerja lainnya.`) + `</li>`;
    styleText += `<li><strong>Terorganisir (C):</strong> ` + (s.C >= 5 ? `Skor ${s.C} (Tinggi). Anda sangat teratur, menyukai jadwal yang terencana rapi, pengarsipan yang sistematis, dan alur kerja yang terprediksi.` : `Skor ${s.C} (Rendah). Anda sangat fleksibel, spontan, mudah menyesuaikan rencana secara dinamis, dan kurang nyaman dengan prosedur administrasi yang rumit.`) + `</li>`;
    styleText += `</ul>`;
    DOM.papiResult.styleDesc.innerHTML = styleText;
    
    // Social Nature Cluster (S, X, B, O)
    const socTotal = s.S + s.X + s.B + s.O;
    let socialText = `Skor Relasi Sosial: <strong>${socTotal} / 36</strong> (Sosialisasi: S=${s.S}, Kebutuhan Tampil: X=${s.X}, Butuh Kelompok: B=${s.B}, Kedekatan: O=${s.O}).<br/><br/>`;
    if (socTotal >= 20) {
        socialText += `<strong>Sangat Ekstrovert &amp; Hubungan Interpersonal Kuat (Skor Tinggi):</strong> Anda adalah pribadi yang sangat sosial dan menaruh perhatian besar pada dinamika hubungan antarpribadi. Anda gemar memperluas jaringan (S), menyukai eksposur dan pengakuan publik (X), serta bekerja dengan baik dalam tim (B) yang erat (O). Keunggulan Anda adalah kepiawaian dalam membangun kolaborasi dan sinergi kelompok, namun pastikan kemandirian kerja Anda tetap terjaga agar opini kelompok tidak mendikte keputusan penting Anda.`;
    } else if (socTotal >= 10) {
        socialText += `<strong>Sosialisasi Selektif &amp; Mandiri (Skor Sedang):</strong> Anda memiliki profil sosial yang seimbang. Anda ramah dan kooperatif dalam bekerja sama, tetapi juga menghargai waktu kerja mandiri tanpa perlu terlalu sering berinteraksi. Anda cenderung memilih kelompok kecil dengan hubungan kedekatan (O) yang tulus dibanding memperluas jaringan sosial secara dangkal.`;
    } else {
        socialText += `<strong>Independen, Introver, &amp; Berfokus Tugas (Skor Rendah):</strong> Anda adalah tipe pekerja mandiri yang tidak terlalu membutuhkan validasi sosial atau afiliasi kelompok (B). Anda lebih nyaman bekerja di balik layar tanpa eksposur berlebihan (X). Anda mengutamakan produktivitas tugas di atas sekadar obrolan sosial, yang membuat Anda sangat efisien untuk peran-peran spesifik dan mandiri.`;
    }
    DOM.papiResult.socialDesc.innerHTML = socialText;
    
    // Followership & Temperament Cluster (F, W, E, K, Z)
    let followText = `Analisis Kepatuhan &amp; Penyesuaian Diri (Otoritas: F=${s.F}, Aturan: W=${s.W}, Kontrol Emosi: E=${s.E}, Ketahanan Kritik: K=${s.K}, Perubahan: Z=${s.Z}):<ul style="margin-left: 20px; margin-top: 10px; display: flex; flex-direction: column; gap: 8px;">`;
    followText += `<li><strong>Dukungan Otoritas &amp; Aturan (F &amp; W):</strong> ` + (s.F + s.W >= 12 ? `Skor F=${s.F}, W=${s.W} (Tinggi). Anda loyal kepada pimpinan dan merasa nyaman bekerja dalam koridor hukum, standar operasi standar (SOP), serta aturan birokrasi yang tertulis jelas.` : `Skor F=${s.F}, W=${s.W} (Rendah). Anda adalah pemikir independen yang menyukai otonomi kerja. Anda lebih suka fleksibilitas dan tidak ragu menentang birokrasi yang kaku jika dinilai menghambat kemajuan.`) + `</li>`;
    followText += `<li><strong>Pengendalian Emosi (E):</strong> ` + (s.E >= 5 ? `Skor ${s.E} (Tinggi). Anda memiliki kecerdasan emosional yang baik, mampu bersikap tenang dan menyembunyikan kecemasan atau frustrasi saat menghadapi situasi stres tinggi.` : `Skor ${s.E} (Rendah). Ekspresi emosi Anda cenderung terbuka dan spontan. Orang lain mudah membaca suasana hati Anda, yang di satu sisi membuat Anda tampak tulus namun di sisi lain memerlukan pengendalian lebih di bawah tekanan.`) + `</li>`;
    followText += `<li><strong>Daya Tahan Kritik (K):</strong> ` + (s.K >= 5 ? `Skor ${s.K} (Tinggi). Anda memiliki mental tangguh dan objektif. Anda melihat kritik dari atasan atau kolega sebagai sarana konstruktif untuk memperbaiki kinerja Anda secara profesional.` : `Skor ${s.K} (Rendah). Anda cenderung sensitif terhadap masukan negatif dan mudah merasa tersinggung. Cobalah untuk memisahkan evaluasi performa kerja dari harga diri personal Anda.`) + `</li>`;
    followText += `<li><strong>Kebutuhan Perubahan (Z):</strong> ` + (s.Z >= 5 ? `Skor ${s.Z} (Tinggi). Anda menyukai variasi tugas, inovasi, perubahan lingkungan kerja secara dinamis, dan cepat merasa jenuh jika dihadapkan pada rutinitas yang monoton.` : `Skor ${s.Z} (Rendah). Anda menyukai konsistensi, stabilitas jangka panjang, alur kerja rutin yang dapat diprediksi, serta kurang nyaman dengan reorganisasi yang terlalu mendadak.`) + `</li>`;
    followText += `</ul>`;
    DOM.papiResult.followershipDesc.innerHTML = followText;
    
    // Render bars
    DOM.papiResult.aspectsBars.innerHTML = '';
    Object.entries(papiAspects).forEach(([key, aspect]) => {
        const score = s[key] || 0;
        const maxScore = 9;
        const pct = Math.round((score / maxScore) * 100);
        const bar = document.createElement('div');
        bar.className = 'papi-aspect-bar';
        bar.innerHTML = `<div class="papi-aspect-label"><span class="papi-aspect-code" style="background:${aspect.color}">${key}</span><span>${aspect.label}</span></div><div class="papi-bar-bg"><div class="papi-bar-fill" style="width:${pct}%;background:${aspect.color}"></div></div><span class="papi-bar-score">${score}</span>`;
        DOM.papiResult.aspectsBars.appendChild(bar);
    });
    showPage('papiResult');
}

// --- Cognitive ---
function calculateCognitiveScore() {
    let correct = 0;
    let verbal = 0, numeric = 0, problem = 0;
    cognitiveQuestions.forEach(q => {
        const ans = state.answers[q.id];
        if (ans === q.correct) {
            correct++;
            if (q.category === 'Verbal') verbal++;
            else if (q.category === 'Numerik') numeric++;
            else problem++;
        }
    });
    const total = cognitiveQuestions.length;
    let categoryKey = 'sedang';
    if (correct >= 12) categoryKey = 'tinggi';
    else if (correct >= 7) categoryKey = 'sedang';
    else categoryKey = 'rendah';
    return { correct, total, verbal, numeric, problem, categoryKey };
}

function showCognitiveResult(result) {
    DOM.cognitiveResult.scoreValue.textContent = `${result.correct}/${result.total}`;
    const cats = { tinggi: 'Tinggi (Superior)', sedang: 'Sedang (Rata-rata)', rendah: 'Rendah (Di Bawah Rata-rata)' };
    DOM.cognitiveResult.category.textContent = cats[result.categoryKey] || 'Sedang';
    DOM.cognitiveResult.category.style.background = result.categoryKey === 'tinggi' ? '#10b981' : result.categoryKey === 'rendah' ? '#ef4444' : '#3b82f6';
    DOM.cognitiveResult.scoreVerbal.textContent = `${result.verbal} / 5`;
    DOM.cognitiveResult.scoreNumeric.textContent = `${result.numeric} / 5`;
    DOM.cognitiveResult.scoreProblem.textContent = `${result.problem} / 5`;
    setTimeout(() => {
        DOM.cognitiveResult.barVerbal.style.width = `${(result.verbal/5)*100}%`;
        DOM.cognitiveResult.barNumeric.style.width = `${(result.numeric/5)*100}%`;
        DOM.cognitiveResult.barProblem.style.width = `${(result.problem/5)*100}%`;
    }, 100);
    
    // Detailed descriptions for subscales
    let verbalAnalysis = '';
    if (result.verbal >= 4) {
        verbalAnalysis = `<strong>Verbal (Skor ${result.verbal}/5 - Tinggi):</strong> Memiliki pemahaman bahasa, logika analogi, dan penalaran semantik yang sangat kuat. Mampu berkomunikasi secara efektif, menyusun argumen yang logis, serta cepat memahami konsep-konsep verbal yang kompleks.`;
    } else if (result.verbal >= 2) {
        verbalAnalysis = `<strong>Verbal (Skor ${result.verbal}/5 - Sedang):</strong> Memiliki pemahaman bahasa yang cukup baik. Mampu menangani komunikasi harian dan memahami instruksi standar dengan lancar, namun perlu konsentrasi ekstra ketika menganalisis teks hukum atau logika bahasa yang sangat rumit.`;
    } else {
        verbalAnalysis = `<strong>Verbal (Skor ${result.verbal}/5 - Rendah):</strong> Mengalami kesulitan dalam menghubungkan analogi kata atau menyimpulkan silogisme bahasa dasar. Disarankan melatih pemahaman bacaan analitis secara bertahap.`;
    }

    let numericAnalysis = '';
    if (result.numeric >= 4) {
        numericAnalysis = `<strong>Numerik (Skor ${result.numeric}/5 - Tinggi):</strong> Kemampuan analisis angka yang sangat tajam. Sangat cepat mendeteksi pola deret matematika, mengolah persentas, dan melakukan kalkulasi mental secara akurat. Sangat cocok untuk peran keuangan, data analitik, atau pemrograman.`;
    } else if (result.numeric >= 2) {
        numericAnalysis = `<strong>Numerik (Skor ${result.numeric}/5 - Sedang):</strong> Memiliki kemampuan hitung dasar yang memadai untuk kebutuhan operasional sehari-hari. Namun, memerlukan waktu lebih lama atau alat bantu hitung untuk menganalisis data statistik yang kompleks.`;
    } else {
        numericAnalysis = `<strong>Numerik (Skor ${result.numeric}/5 - Rendah):</strong> Sering merasa kesulitan atau cemas saat berhadapan dengan pola deret angka dan logika aritmatika praktis. Dianjurkan membiasakan latihan hitung cepat secara berkala.`;
    }

    let problemAnalysis = '';
    if (result.problem >= 4) {
        problemAnalysis = `<strong>Pemecahan Masalah (Skor ${result.problem}/5 - Tinggi):</strong> Logika posisi dan penalaran silogistik yang luar biasa. Sangat handal dalam mengurai informasi yang tumpang tindih untuk menarik kesimpulan yang objektif dan valid secara cepat.`;
    } else if (result.problem >= 2) {
        problemAnalysis = `<strong>Pemecahan Masalah (Skor ${result.problem}/5 - Sedang):</strong> Cukup mampu memecahkan masalah terstruktur dengan metode yang sudah ada. Namun, bisa merasa kebingungan ketika dihadapkan pada masalah yang tidak terduga atau data yang saling bertolak belakang.`;
    } else {
        problemAnalysis = `<strong>Pemecahan Masalah (Skor ${result.problem}/5 - Rendah):</strong> Cenderung menarik kesimpulan secara terburu-buru atau mengalami bias logika. Perlu melatih pemecahan masalah dengan metode langkah-demi-langkah (breakdown) dan bermain teka-teki logika.`;
    }

    let overallDesc = `Berdasarkan hasil tes, profil kemampuan kognitif Anda secara keseluruhan diklasifikasikan sebagai <strong>${cats[result.categoryKey]}</strong>. Berikut adalah analisis detail per bidang:<br/><br/>`;
    overallDesc += `<ul style="margin-left: 20px; display: flex; flex-direction: column; gap: 10px;">`;
    overallDesc += `<li>${verbalAnalysis}</li>`;
    overallDesc += `<li>${numericAnalysis}</li>`;
    overallDesc += `<li>${problemAnalysis}</li>`;
    overallDesc += `</ul>`;
    DOM.cognitiveResult.description.innerHTML = overallDesc;

    const tips = {
        tinggi: '<strong>Rekomendasi Pengembangan (Skor Tinggi):</strong><br/>Terus asah ketajaman berpikir Anda dengan mempelajari bidang-bidang baru seperti programming, analisis data tingkat lanjut, filsafat logika, atau membaca jurnal ilmiah. Hindari kepuasan diri yang berlebihan dan tantang diri Anda pada tugas-tugas penyelesaian masalah yang belum pernah Anda hadapi sebelumnya.',
        sedang: '<strong>Rekomendasi Pengembangan (Skor Sedang):</strong><br/>Perbanyak latihan soal penalaran logis, numerik, dan pemahaman teks secara berkala. Cobalah untuk menyelesaikan teka-teki logika, bermain game strategi, dan melatih kemampuan berhitung cepat tanpa kalkulator untuk melatih plastisitas otak.',
        rendah: '<strong>Rekomendasi Pengembangan (Skor Rendah):</strong><br/>Mulailah dengan latihan dasar penalaran secara bertahap dan teratur. Manfaatkan aplikasi pelatihan otak (brain training) harian, pelajari kembali konsep dasar aritmatika dan silogisme, serta jangan ragu untuk berdiskusi dengan mentor ketika menghadapi masalah rumit.'
    };
    DOM.cognitiveResult.tips.innerHTML = tips[result.categoryKey] || tips.sedang;
    showPage('cognitiveResult');
}

// --- Spatial ---
function calculateSpatialScore() {
    let correct = 0, score2d = 0, score3d = 0;
    spatialQuestions.forEach(q => {
        if (state.answers[q.id] === q.correct) {
            correct++;
            if (q.category === 'Visual 2D') score2d++;
            else score3d++;
        }
    });
    const total = spatialQuestions.length;
    let categoryKey = 'baik';
    if (correct >= 8) categoryKey = 'sangat_baik';
    else if (correct >= 5) categoryKey = 'baik';
    else if (correct >= 3) categoryKey = 'cukup';
    else categoryKey = 'perlu_latihan';
    return { correct, total, score2d, score3d, categoryKey };
}

function showSpatialResult(result) {
    DOM.spatialResult.scoreValue.textContent = `${result.correct}/${result.total}`;
    const cats = { sangat_baik:'Sangat Baik (Superior)', baik:'Baik (Di Atas Rata-rata)', cukup:'Cukup (Rata-rata)', perlu_latihan:'Perlu Latihan' };
    DOM.spatialResult.category.textContent = cats[result.categoryKey] || 'Baik';
    DOM.spatialResult.category.style.background = result.categoryKey === 'sangat_baik' ? '#10b981' : result.categoryKey === 'perlu_latihan' ? '#ef4444' : result.categoryKey === 'cukup' ? '#f59e0b' : '#3b82f6';
    DOM.spatialResult.score2d.textContent = `${result.score2d} / 5`;
    DOM.spatialResult.score3d.textContent = `${result.score3d} / 5`;
    setTimeout(() => {
        DOM.spatialResult.bar2d.style.width = `${(result.score2d/5)*100}%`;
        DOM.spatialResult.bar3d.style.width = `${(result.score3d/5)*100}%`;
    }, 100);
    
    let analysis2d = '';
    if (result.score2d >= 4) {
        analysis2d = `<strong>Visual 2D (Skor ${result.score2d}/5 - Tinggi):</strong> Anda memiliki kemampuan rotasi mental 2D, pencerminan, dan visualisasi lipatan kertas yang luar biasa. Anda sangat mahir mendeteksi hubungan spasial objek datar secara cepat dan presisi.`;
    } else if (result.score2d >= 2) {
        analysis2d = `<strong>Visual 2D (Skor ${result.score2d}/5 - Sedang):</strong> Kemampuan manipulasi visual 2D Anda berada di tingkat rata-rata. Anda mampu memahami rotasi dan simetri gambar datar standar, tetapi membutuhkan fokus tinggi untuk pola yang lebih abstrak.`;
    } else {
        analysis2d = `<strong>Visual 2D (Skor ${result.score2d}/5 - Rendah):</strong> Cenderung mengalami kesulitan memvisualisasikan objek datar setelah mengalami transformasi (seperti diputar atau dicerminkan). Latihan menggambar geometri dua dimensi akan sangat membantu.`;
    }

    let analysis3d = '';
    if (result.score3d >= 4) {
        analysis3d = `<strong>Visual 3D (Skor ${result.score3d}/5 - Tinggi):</strong> Luar biasa dalam memvisualisasikan ruang tiga dimensi. Anda dapat dengan mudah memutar objek solid secara mental (seperti kubus), menghitung balok tersembunyi, dan memetakan jaring-jaring 3D menjadi bentuk utuh. Sangat menunjang karir di bidang teknik, arsitektur, animasi 3D, atau bedah.`;
    } else if (result.score3d >= 2) {
        analysis3d = `<strong>Visual 3D (Skor ${result.score3d}/5 - Sedang):</strong> Pemahaman spasial 3D Anda cukup memadai. Anda mampu mengenali objek tiga dimensi dasar dan proyeksi sederhana, namun memerlukan konsentrasi tinggi ketika memecahkan soal hitung balok yang rumit atau jaring-jaring yang tidak simetris.`;
    } else {
        analysis3d = `<strong>Visual 3D (Skor ${result.score3d}/5 - Rendah):</strong> Kesulitan memvisualisasikan bentuk tiga dimensi berdasarkan representasi gambar 2D datar. Disarankan melatih kemampuan ini dengan aktivitas fisik seperti menyusun balok kayu atau origami 3D.`;
    }

    let overallDesc = `Kemampuan spasial-visual Anda dikategorikan sebagai <strong>${cats[result.categoryKey]}</strong>. Hasil analisis spesifik per dimensi spasial:<br/><br/>`;
    overallDesc += `<ul style="margin-left: 20px; display: flex; flex-direction: column; gap: 10px;">`;
    overallDesc += `<li>${analysis2d}</li>`;
    overallDesc += `<li>${analysis3d}</li>`;
    overallDesc += `</ul>`;
    DOM.spatialResult.description.innerHTML = overallDesc;

    const tips = {
        sangat_baik: '<strong>Saran Pengembangan &amp; Aplikasi Praktis:</strong><br/>Manfaatkan kecerdasan spasial tinggi Anda dalam bidang arsitektur, rekayasa mekanik (CAD/CAM), desain game, animasi 3D, atau pembedahan medis. Terus latih kemampuan Anda dengan mempelajari software desain 3D seperti Blender atau AutoCAD.',
        baik: '<strong>Saran Pengembangan &amp; Aplikasi Praktis:</strong><br/>Terus kembangkan kemampuan visualisasi Anda melalui hobi kreatif seperti fotografi perspektif, melukis, bermain game puzzle 3D yang kompleks, atau menggambar proyeksi teknis sederhana.',
        cukup: '<strong>Saran Pengembangan &amp; Aplikasi Praktis:</strong><br/>Latihlah orientasi spasial Anda dengan menyusun LEGO, bermain Tetris, merakit origami, atau mencoba merekonstruksi gambar denah rumah/ruangan menjadi bentuk nyata.',
        perlu_latihan: '<strong>Saran Pengembangan &amp; Aplikasi Praktis:</strong><br/>Mulailah dari latihan dasar: menyusun jigsaw puzzle fisik, menggambar bentuk kubus/silinder dari berbagai sudut pandang nyata, serta melipat origami sederhana secara bertahap untuk membangun ingatan spasial motorik Anda.'
    };
    DOM.spatialResult.tips.innerHTML = tips[result.categoryKey] || tips.baik;
    showPage('spatialResult');
}

// --- FINISH TEST ---
async function completeTestFlow(historyItem, resultRenderer) {
    if (isSharedGuestMode()) {
        try {
            await submitSharedGuestResult(historyItem);
            showGuestCompletionPage();
        } catch (err) {
            console.error('Gagal sinkron hasil shared guest:', err);
            alert('Hasil tes gagal disinkronkan ke aplikasi utama. Pastikan link masih aktif dan perangkat terhubung ke jaringan yang sama.');
            showPage('testSelect');
        }
        return;
    }

    state.history.push(historyItem);
    saveHistory();

    if (isGuestUser()) {
        showGuestCompletionPage();
        return;
    }

    resultRenderer();
}

async function finishTest() {
    clearInterval(timerInterval);
    const now = new Date();
    const dateStr = now.toLocaleDateString('id-ID');
    const completedAt = now.getTime();
    const durationSeconds = state.testStartedAt ? Math.max(0, Math.round((completedAt - state.testStartedAt) / 1000)) : 0;
    const durationMinutes = Math.floor(durationSeconds / 60);
    const durationRemainderSeconds = durationSeconds % 60;
    const durationFormatted = `${durationMinutes} menit ${durationRemainderSeconds} detik`;

    let historyItem = {
        id: Date.now(),
        testType: state.currentTestType,
        name: state.currentUser.name,
        age: state.currentUser.age,
        date: dateStr,
        startedAt: state.testStartedAt,
        completedAt,
        durationSeconds,
        durationFormatted
    };

    if (state.currentTestType === 'mbti') {
        const result = calculateMBTIScore();
        historyItem.type = result.type;
        historyItem.percentages = result.percentages;
        await completeTestFlow(historyItem, () => showMBTIResult(result));
    } else if (state.currentTestType === 'disc') {
        const result = calculateDISCScore();
        historyItem.discScores = result.scores;
        historyItem.discType = result.dominant;
        await completeTestFlow(historyItem, () => showDISCResult(result));
    } else if (state.currentTestType === 'iq') {
        const result = calculateIQScore();
        historyItem.iqScore = result.iq;
        historyItem.iqCategory = result.categoryKey;
        historyItem.iqCorrect = result.correct;
        historyItem.iqTotal = result.total;
        await completeTestFlow(historyItem, () => showIQResult(result));
    } else if (state.currentTestType === 'wpt') {
        const result = calculateWPTScore();
        historyItem.wptScore = result.score;
        historyItem.wptCategory = result.categoryKey;
        historyItem.wptRecommendations = result.recommendations;
        historyItem.wptBreakdown = result.breakdown;
        historyItem.wptCounts = result.counts;
        await completeTestFlow(historyItem, () => showWPTResult(result));
    } else if (state.currentTestType === 'bigfive') {
        const result = calculateBigFiveScore();
        historyItem.bigfiveScores = result.scores;
        historyItem.bigfiveDominant = result.dominant;
        await completeTestFlow(historyItem, () => showBigFiveResult(result));
    } else if (state.currentTestType === 'riasec') {
        const result = calculateRIASECScore();
        historyItem.riasecScores = result.scores;
        historyItem.hollandCode = result.dominantCode;
        historyItem.riasecNames = result.dominantNames;
        await completeTestFlow(historyItem, () => showRIASECResult(result));
    } else if (state.currentTestType === 'papi') {
        const result = calculatePAPIScore();
        historyItem.papiScores = result.scores;
        historyItem.papiLeadStyle = result.leadStyle;
        await completeTestFlow(historyItem, () => showPAPIResult(result));
    } else if (state.currentTestType === 'cognitive') {
        const result = calculateCognitiveScore();
        historyItem.cognitiveCorrect = result.correct;
        historyItem.cognitiveTotal = result.total;
        historyItem.cognitiveVerbal = result.verbal;
        historyItem.cognitiveNumeric = result.numeric;
        historyItem.cognitiveProblem = result.problem;
        historyItem.cognitiveCategory = result.categoryKey;
        await completeTestFlow(historyItem, () => showCognitiveResult(result));
    } else if (state.currentTestType === 'spatial') {
        const result = calculateSpatialScore();
        historyItem.spatialCorrect = result.correct;
        historyItem.spatialTotal = result.total;
        historyItem.spatial2d = result.score2d;
        historyItem.spatial3d = result.score3d;
        historyItem.spatialCategory = result.categoryKey;
        await completeTestFlow(historyItem, () => showSpatialResult(result));
    }

    state.testStartedAt = null;
}

// ===========================
// RESULT NAVIGATION
// ===========================
DOM.result.retakeBtn.addEventListener('click', () => {
    if (state.isViewingHistory) {
        state.isViewingHistory = false;
        showPage('history');
    } else {
        showPage('testSelect');
    }
});

DOM.discResult.retakeBtn.addEventListener('click', () => {
    if (state.isViewingHistory) {
        state.isViewingHistory = false;
        showPage('history');
    } else {
        showPage('testSelect');
    }
});

DOM.iqResult.retakeBtn.addEventListener('click', () => {
    if (state.isViewingHistory) {
        state.isViewingHistory = false;
        showPage('history');
    } else {
        showPage('testSelect');
    }
});

DOM.wptResult.retakeBtn.addEventListener('click', () => {
    if (state.isViewingHistory) {
        state.isViewingHistory = false;
        showPage('history');
    } else {
        showPage('testSelect');
    }
});

DOM.bigfiveResult.retakeBtn.addEventListener('click', () => {
    if (state.isViewingHistory) {
        state.isViewingHistory = false;
        showPage('history');
    } else {
        showPage('testSelect');
    }
});

DOM.riasecResult.retakeBtn.addEventListener('click', () => {
    if (state.isViewingHistory) {
        state.isViewingHistory = false;
        showPage('history');
    } else {
        showPage('testSelect');
    }
});

DOM.papiResult.retakeBtn.addEventListener('click', () => {
    if (state.isViewingHistory) {
        state.isViewingHistory = false;
        showPage('history');
    } else {
        showPage('testSelect');
    }
});

DOM.cognitiveResult.retakeBtn.addEventListener('click', () => {
    if (state.isViewingHistory) {
        state.isViewingHistory = false;
        showPage('history');
    } else {
        showPage('testSelect');
    }
});

DOM.spatialResult.retakeBtn.addEventListener('click', () => {
    if (state.isViewingHistory) {
        state.isViewingHistory = false;
        showPage('history');
    } else {
        showPage('testSelect');
    }
});

DOM.thankyou.doneBtn.addEventListener('click', () => {
    window.clearTimeout(window.__guestReturnTimer);
    DOM.intro.name.value = '';
    DOM.intro.age.value = '';
    state.answers = {};
    state.currentQuestionIndex = 0;

    if (isGuestUser()) {
        showPage('testSelect');
        return;
    }

    DOM.login.username.value = '';
    DOM.login.pass.value = '';
    showPage('login');
});

// ===========================
// HISTORY
// ===========================
function renderHistory() {
    DOM.history.list.innerHTML = '';

    let filtered = state.historyFilter === 'all'
        ? state.history
        : state.history.filter(h => h.testType === state.historyFilter);

    if (state.historySearch) {
        const searchLower = state.historySearch.toLowerCase();
        filtered = filtered.filter(h => h.name && h.name.toLowerCase().includes(searchLower));
    }

    if (filtered.length === 0) {
        DOM.history.list.innerHTML = '<p style="text-align:center;">Belum ada riwayat tes.</p>';
        return;
    }

    const reversed = [...filtered].reverse();

    reversed.forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-item';

        const badgeClass = item.testType || 'mbti';
        const testLabel = (item.testType || 'mbti').toUpperCase();

        let resultText = '';
        if (item.testType === 'mbti' || !item.testType) {
            resultText = item.type || '-';
        } else if (item.testType === 'disc') {
            resultText = item.discType || '-';
        } else if (item.testType === 'iq') {
            resultText = `IQ: ${item.iqScore || '-'}`;
        } else if (item.testType === 'wpt') {
            resultText = `WPT: ${item.wptScore || '0'}/50`;
        } else if (item.testType === 'bigfive') {
            const domDim = bigfiveDimensions[item.bigfiveDominant];
            const domName = domDim ? domDim.nameId : (item.bigfiveDominant || '-');
            resultText = `OCEAN: ${domName}`;
        } else if (item.testType === 'riasec') {
            resultText = `RIASEC: ${item.hollandCode || '-'}`;
        } else if (item.testType === 'papi') {
            resultText = `Gaya: ${item.papiLeadStyle || '-'}`;
        } else if (item.testType === 'cognitive') {
            resultText = `Skor: ${item.cognitiveCorrect || 0}/${item.cognitiveTotal || 15}`;
        } else if (item.testType === 'spatial') {
            resultText = `Skor: ${item.spatialCorrect || 0}/${item.spatialTotal || 10}`;
        }

        div.innerHTML = `
            <div class="history-info">
                <strong>${item.name} <span class="history-test-badge ${badgeClass}">${testLabel}</span></strong>
                <span>Usia: ${item.age} | Tanggal: ${item.date}</span>
            </div>
            <div class="history-actions" style="display:flex; align-items:center; gap:15px;">
                <div class="history-type">${resultText}</div>
                <button class="btn-primary" style="padding: 8px 14px; font-size: 0.85rem;" onclick="viewHistoryItem(${item.id})">Lihat Hasil</button>
            </div>
        `;
        DOM.history.list.appendChild(div);
    });
}

// History filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.historyFilter = btn.dataset.filter;
        renderHistory();
    });
});

if (DOM.history.searchInput) {
    DOM.history.searchInput.addEventListener('input', (e) => {
        state.historySearch = e.target.value.trim();
        renderHistory();
    });
}

window.viewHistoryItem = function (id) {
    const item = state.history.find(h => h.id === id);
    if (!item) {
        alert("Data tidak ditemukan.");
        return;
    }

    state.isViewingHistory = true;
    state.currentUser.name = item.name;

    const testType = item.testType || 'mbti';

    if (testType === 'mbti') {
        if (item.percentages) {
            showMBTIResult({ type: item.type, percentages: item.percentages });
        } else {
            alert("Data hasil lama tidak memiliki detail persentase.");
        }
    } else if (testType === 'disc') {
        if (item.discScores) {
            showDISCResult({ scores: item.discScores, dominant: item.discType });
        } else {
            alert("Data hasil DISC tidak lengkap.");
        }
    } else if (testType === 'iq') {
        if (item.iqScore !== undefined) {
            showIQResult({
                iq: item.iqScore,
                correct: item.iqCorrect || 0,
                total: item.iqTotal || 20,
                categoryKey: item.iqCategory || 'ratarata'
            });
        } else {
            alert("Data hasil IQ tidak lengkap.");
        }
    } else if (testType === 'wpt') {
        if (item.wptScore !== undefined) {
            showWPTResult({
                score: item.wptScore,
                total: 50,
                categoryKey: item.wptCategory || 'sedang',
                breakdown: item.wptBreakdown || { numeric: 0, verbal: 0, spatial: 0, deductive: 0, general: 0, detail: 0 },
                counts: item.wptCounts || { numeric: 8, verbal: 9, spatial: 8, deductive: 8, general: 9, detail: 8 },
                recommendations: item.wptRecommendations || ''
            });
        } else {
            alert("Data hasil WPT tidak lengkap.");
        }
    } else if (testType === 'bigfive') {
        if (item.bigfiveScores) {
            showBigFiveResult({ scores: item.bigfiveScores, dominant: item.bigfiveDominant });
        } else {
            alert("Data hasil Big Five tidak lengkap.");
        }
    } else if (testType === 'riasec') {
        if (item.riasecScores) {
            showRIASECResult({ scores: item.riasecScores, dominantCode: item.hollandCode, dominantNames: item.riasecNames });
        } else {
            alert("Data hasil RIASEC tidak lengkap.");
        }
    } else if (testType === 'papi') {
        if (item.papiScores) {
            showPAPIResult({ scores: item.papiScores, leadStyle: item.papiLeadStyle || 'Moderat' });
        } else {
            alert("Data hasil PAPI tidak lengkap.");
        }
    } else if (testType === 'cognitive') {
        if (item.cognitiveCorrect !== undefined) {
            showCognitiveResult({
                correct: item.cognitiveCorrect,
                total: item.cognitiveTotal || 15,
                verbal: item.cognitiveVerbal || 0,
                numeric: item.cognitiveNumeric || 0,
                problem: item.cognitiveProblem || 0,
                categoryKey: item.cognitiveCategory || 'sedang'
            });
        } else {
            alert("Data hasil Kognitif tidak lengkap.");
        }
    } else if (testType === 'spatial') {
        if (item.spatialCorrect !== undefined) {
            showSpatialResult({
                correct: item.spatialCorrect,
                total: item.spatialTotal || 10,
                score2d: item.spatial2d || 0,
                score3d: item.spatial3d || 0,
                categoryKey: item.spatialCategory || 'baik'
            });
        } else {
            alert("Data hasil Spasial tidak lengkap.");
        }
    }
};

// ===========================
// PDF DOWNLOAD
// ===========================
async function downloadPDF(contentId, actionsId, filename) {
    const actionsEl = document.getElementById(actionsId);
    if (actionsEl) actionsEl.classList.add('hidden');

    const element = document.getElementById(contentId);

    try {
        const canvas = await html2canvas(element, {
            scale: 2,
            backgroundColor: '#f6f8fc',
            logging: false
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf.jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 10, pdfWidth, pdfHeight);
        pdf.save(filename);

    } catch (err) {
        console.error('Error generating PDF:', err);
        alert('Gagal mendownload PDF. Silakan coba lagi.');
    } finally {
        if (actionsEl) actionsEl.classList.remove('hidden');
    }
}

// ===========================
// PRINT SUPPORT
// ===========================
let activePrintCleanup = null;

function getPrintUserName() {
    return state.currentUser?.name || state.currentUser?.username || 'Peserta';
}

function cleanupPrintStage() {
    if (activePrintCleanup) activePrintCleanup();
}

function openNativePrint(title, contentNode) {
    cleanupPrintStage();

    const stage = document.createElement('section');
    stage.id = 'print-stage';
    stage.className = 'print-stage print-target';
    stage.setAttribute('aria-hidden', 'true');
    stage.appendChild(contentNode);

    const previousTitle = document.title;
    document.body.appendChild(stage);
    document.body.classList.add('print-mode');
    document.title = title;

    activePrintCleanup = () => {
        stage.remove();
        document.body.classList.remove('print-mode');
        document.title = previousTitle;
        activePrintCleanup = null;
    };

    window.setTimeout(() => {
        if (window.KarakterKuPrint && typeof window.KarakterKuPrint.print === 'function') {
            window.KarakterKuPrint.print(title);
            window.setTimeout(cleanupPrintStage, 15000);
            return;
        }

        window.print();
    }, 120);
}

function printResult(contentId, title) {
    const source = document.getElementById(contentId);
    if (!source) {
        alert('Konten hasil tes tidak ditemukan.');
        return;
    }

    openNativePrint(title, source.cloneNode(true));
}

function printTestPage() {
    const now = new Date().toLocaleString('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const sheet = document.createElement('div');
    sheet.className = 'print-test-sheet';
    sheet.innerHTML = `
        <header class="print-test-header">
            <img src="Karakter.ku.png" alt="Karakter.ku">
            <div>
                <h1>Karakter.ku</h1>
                <p>Halaman Test Print</p>
            </div>
        </header>
        <main class="print-test-body">
            <h2>Printer siap digunakan</h2>
            <p>Jika halaman ini tercetak atau tersimpan sebagai PDF, perangkat Anda sudah terhubung dengan layanan print sistem.</p>
            <dl>
                <div><dt>Pengguna</dt><dd>${getPrintUserName()}</dd></div>
                <div><dt>Waktu test</dt><dd>${now}</dd></div>
                <div><dt>Output</dt><dd>Printer fisik atau Save as PDF dari dialog print perangkat</dd></div>
            </dl>
            <div class="print-test-grid">
                <span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span>
            </div>
        </main>
    `;

    openNativePrint('Karakter.ku - Test Print', sheet);
}

window.addEventListener('afterprint', cleanupPrintStage);

DOM.result.downloadBtn.addEventListener('click', () => {
    downloadPDF('pdf-content', 'result-actions', `Hasil_MBTI_${state.currentUser.name}.pdf`);
});

DOM.discResult.downloadBtn.addEventListener('click', () => {
    downloadPDF('disc-pdf-content', 'disc-result-actions', `Hasil_DISC_${state.currentUser.name}.pdf`);
});

DOM.iqResult.downloadBtn.addEventListener('click', () => {
    downloadPDF('iq-pdf-content', 'iq-result-actions', `Hasil_IQ_${state.currentUser.name}.pdf`);
});

DOM.wptResult.downloadBtn.addEventListener('click', () => {
    downloadPDF('wpt-pdf-content', 'wpt-result-actions', `Hasil_WPT_${state.currentUser.name}.pdf`);
});

DOM.bigfiveResult.downloadBtn.addEventListener('click', () => {
    downloadPDF('bigfive-pdf-content', 'bigfive-result-actions', `Hasil_BigFive_${state.currentUser.name}.pdf`);
});

DOM.riasecResult.downloadBtn.addEventListener('click', () => {
    downloadPDF('riasec-pdf-content', 'riasec-result-actions', `Hasil_RIASEC_${state.currentUser.name}.pdf`);
});

DOM.papiResult.downloadBtn.addEventListener('click', () => {
    downloadPDF('papi-pdf-content', 'papi-result-actions', `Hasil_PAPI_${state.currentUser.name}.pdf`);
});

DOM.cognitiveResult.downloadBtn.addEventListener('click', () => {
    downloadPDF('cognitive-pdf-content', 'cognitive-result-actions', `Hasil_Kognitif_${state.currentUser.name}.pdf`);
});

DOM.spatialResult.downloadBtn.addEventListener('click', () => {
    downloadPDF('spatial-pdf-content', 'spatial-result-actions', `Hasil_Spasial_${state.currentUser.name}.pdf`);
});

[
    ['print-result-btn', 'pdf-content', 'Karakter.ku - Hasil MBTI'],
    ['disc-print-result-btn', 'disc-pdf-content', 'Karakter.ku - Hasil DISC'],
    ['iq-print-result-btn', 'iq-pdf-content', 'Karakter.ku - Hasil IQ'],
    ['wpt-print-result-btn', 'wpt-pdf-content', 'Karakter.ku - Hasil WPT'],
    ['bigfive-print-result-btn', 'bigfive-pdf-content', 'Karakter.ku - Hasil Big Five'],
    ['riasec-print-result-btn', 'riasec-pdf-content', 'Karakter.ku - Hasil RIASEC'],
    ['papi-print-result-btn', 'papi-pdf-content', 'Karakter.ku - Hasil PAPI'],
    ['cognitive-print-result-btn', 'cognitive-pdf-content', 'Karakter.ku - Hasil Kognitif'],
    ['spatial-print-result-btn', 'spatial-pdf-content', 'Karakter.ku - Hasil Spasial']
].forEach(([buttonId, contentId, title]) => {
    document.getElementById(buttonId)?.addEventListener('click', () => {
        printResult(contentId, `${title} - ${getPrintUserName()}`);
    });
});

document.getElementById('test-print-btn')?.addEventListener('click', printTestPage);

// ===========================
// SHARE LINK TAMU
// ===========================
function renderShareSessions() {
    if (!DOM.shareGuest.list || !DOM.shareGuest.empty) return;

    const sessions = state.shareSessions || [];
    DOM.shareGuest.list.innerHTML = '';
    DOM.shareGuest.empty.classList.toggle('hidden', sessions.length > 0);

    sessions.forEach(session => {
        const item = document.createElement('div');
        item.className = 'share-session-item';
        item.innerHTML = `
            <div class="share-session-top">
                <div>
                    <div class="share-session-title">${session.label || 'Sesi Tamu'}</div>
                    <div class="share-session-meta">Dibuat ${formatDateTime(session.createdAt)} • Sinkron ${session.submissionCount || 0} hasil</div>
                </div>
                <span class="share-session-chip">${session.lastSubmissionAt ? `Terakhir ${formatDateTime(session.lastSubmissionAt)}` : 'Belum ada hasil'}</span>
            </div>
            <input class="share-session-link" type="text" readonly value="${session.link || ''}">
            <div class="share-session-buttons">
                <button type="button" class="btn-primary" data-action="copy">Salin Link</button>
                <button type="button" class="btn-secondary" data-action="close">Tutup Sesi</button>
            </div>
        `;

        const input = item.querySelector('.share-session-link');
        item.querySelector('[data-action="copy"]').addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(session.link || '');
                input.select();
                alert('Link tamu berhasil disalin.');
            } catch (_err) {
                input.select();
                document.execCommand('copy');
                alert('Link tamu siap disalin dari kolom yang dipilih.');
            }
        });

        item.querySelector('[data-action="close"]').addEventListener('click', async () => {
            if (!window.electronAPI || !window.electronAPI.closeShareSession) return;
            const result = await window.electronAPI.closeShareSession(session.id);
            if (!result || result.success === false) {
                alert(result?.error || 'Gagal menutup sesi tamu.');
                return;
            }
            await refreshShareSessions();
        });

        DOM.shareGuest.list.appendChild(item);
    });
}

async function refreshShareSessions() {
    if (!canManageShareSessions() || !window.electronAPI?.getShareSessions) return;
    const result = await window.electronAPI.getShareSessions();
    state.shareSessions = result?.sessions || [];
    renderShareSessions();
}

async function createShareSession() {
    if (!canManageShareSessions() || !window.electronAPI?.createShareSession) return;

    const result = await window.electronAPI.createShareSession({
        createdBy: state.userRole,
        createdByName: DOM.navbar.username.textContent || ''
    });

    if (!result || result.success === false || !result.session) {
        alert(result?.error || 'Gagal membuat link tamu.');
        return;
    }

    await refreshShareSessions();
    try {
        await navigator.clipboard.writeText(result.session.link || '');
        alert('Link tamu berhasil dibuat dan sudah disalin ke clipboard.');
    } catch (_err) {
        alert(`Link tamu berhasil dibuat:\n${result.session.link}`);
    }
}

async function initSharedGuestMode() {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get('sharedSession');
    const isHttpContext = window.location.protocol === 'http:' || window.location.protocol === 'https:';

    if (!sessionId || !isHttpContext) return false;

    try {
        const response = await fetch(`${window.location.origin}/api/share/sessions/${encodeURIComponent(sessionId)}`);
        const data = await response.json();
        if (!response.ok || !data.success || !data.session) {
            throw new Error(data.error || 'Sesi tamu tidak ditemukan.');
        }

        state.userRole = 'tamu';
        state.guestSession = {
            isSharedGuest: true,
            sessionId,
            serverBase: window.location.origin,
            label: data.session.label || 'Tamu'
        };

        if (!state.settings.access) state.settings.access = {};
        state.settings.access.tamu = { ...(state.settings.access.tamu || {}), ...(data.session.access || {}) };
        state.settings.theme = data.session.theme || state.settings.theme;

        DOM.navbar.username.textContent = data.session.label || 'Mode Tamu';
        DOM.navbar.avatar.style.display = 'none';
        DOM.navbar.iconDefault.style.display = '';
        DOM.login.error.classList.add('hidden');

        configureThankYouPage();
        applyAccessControl();
        showPage('testSelect');
        return true;
    } catch (err) {
        console.error('Gagal memulai shared guest mode:', err);
        alert(err.message || 'Link tamu tidak valid atau sudah tidak aktif.');
        return false;
    }
}

// ===========================
// PERSISTENCE & INIT
// ===========================
function saveHistory() {
    if (window.electronAPI) {
        window.electronAPI.saveHistory(state.history);
    } else {
        if (!isSharedGuestMode()) {
            localStorage.setItem('mbti_history', JSON.stringify(state.history));
        }
    }
}

function saveSettingsToDisk() {
    normalizeAccountSettings();
    if (window.electronAPI && window.electronAPI.saveSettings) {
        window.electronAPI.saveSettings(state.settings);
    } else {
        localStorage.setItem('mbti_settings', JSON.stringify(state.settings));
    }
}

function normalizeAccountSettings() {
    if (!state.settings.owners) state.settings.owners = [];
    state.settings.owners.forEach((account, index) => {
        const role = getAccountRole(account);
        account.role = role;
        account.username = role;
        account.accessCode = normalizeAccessCode(account.accessCode || account.username || `user${index + 1}`);
        account.limitType = getAccountLimitType(account);
        if (!account.createdAt) account.createdAt = new Date().toISOString();
    });
}

// Init history and settings
if (window.electronAPI) {
    window.electronAPI.loadHistory().then(data => {
        state.history = data || [];
    });
    if (window.electronAPI.loadSettings) {
        window.electronAPI.loadSettings().then(data => {
            if (data) {
                const normalizedAccess = data.access || ((data.superadmin || data.owner || data.manager || data.tamu) ? data : state.settings.access);
                state.settings = {
                    ...state.settings,
                    ...(data.access || data.theme || data.owners ? data : {}),
                    adminContact: data.adminContact || state.settings.adminContact,
                    owners: data.owners || state.settings.owners,
                    theme: data.theme || state.settings.theme,
                    access: normalizedAccess || state.settings.access
                };
                normalizeAccountSettings();
                applyAccessControl();
            }
        });
    }
} else {
    const sharedSessionId = new URLSearchParams(window.location.search).get('sharedSession');
    if (!sharedSessionId) {
        state.history = JSON.parse(localStorage.getItem('mbti_history')) || [];
        const localSettings = JSON.parse(localStorage.getItem('mbti_settings'));
        if (localSettings) state.settings = localSettings;
        normalizeAccountSettings();
    }
}

// ===========================
// RBAC LOGIC (ACCESS CONTROL)
// ===========================
function applyAccessControl() {
    const access = state.settings.access || state.settings;
    const rolePerms = access[state.userRole] || access['tamu'] || {};

    // Apply to Test Cards
    DOM.testSelect.mbtiBtn.style.display = (rolePerms.mbti !== false) ? 'flex' : 'none';
    DOM.testSelect.discBtn.style.display = (rolePerms.disc !== false) ? 'flex' : 'none';
    DOM.testSelect.iqBtn.style.display = (rolePerms.iq !== false) ? 'flex' : 'none';
    DOM.testSelect.wptBtn.style.display = (rolePerms.wpt !== false) ? 'flex' : 'none';
    DOM.testSelect.bigfiveBtn.style.display = (rolePerms.bigfive !== false) ? 'flex' : 'none';
    DOM.testSelect.riasecBtn.style.display = (rolePerms.riasec !== false) ? 'flex' : 'none';
    DOM.testSelect.papiBtn.style.display = (rolePerms.papi !== false) ? 'flex' : 'none';
    DOM.testSelect.cognitiveBtn.style.display = (rolePerms.cognitive !== false) ? 'flex' : 'none';
    DOM.testSelect.spatialBtn.style.display = (rolePerms.spatial !== false) ? 'flex' : 'none';

    // Apply to Action Buttons (Navbar)
    DOM.navbar.historyBtn.classList.toggle('hidden', !rolePerms.riwayat);
    DOM.navbar.settingsBtn.classList.toggle('hidden', !rolePerms.pengaturan);
    if (DOM.shareGuest.panel) {
        DOM.shareGuest.panel.classList.toggle('hidden', !canManageShareSessions());
    }
    updateSettingsPermissionUI();

    // Apply theme
    applyTheme(state.settings.theme || 'elegant-spectrum');
}

// ===========================
// SETTINGS UI LOGIC
// ===========================
const featuresList = [
    { id: 'mbti', label: 'Tes MBTI' },
    { id: 'disc', label: 'Tes DISC' },
    { id: 'iq', label: 'Tes IQ' },
    { id: 'wpt', label: 'Tes WPT' },
    { id: 'bigfive', label: 'Tes Big Five' },
    { id: 'riasec', label: 'Tes RIASEC' },
    { id: 'papi', label: 'Tes PAPI Kostick' },
    { id: 'cognitive', label: 'Tes Kognitif' },
    { id: 'spatial', label: 'Tes Spasial' },
    { id: 'riwayat', label: 'Riwayat Tes' },
    { id: 'pengaturan', label: 'Menu Pengaturan' },
    { id: 'pengaturan_users', label: 'Pengaturan - Tab Manajemen User' },
    { id: 'pengaturan_users_add', label: 'Pengaturan - Tambah User' },
    { id: 'pengaturan_users_edit', label: 'Pengaturan - Edit User' },
    { id: 'pengaturan_users_delete', label: 'Pengaturan - Hapus User' },
    { id: 'pengaturan_access', label: 'Pengaturan - Tab Hak Akses' },
    { id: 'pengaturan_theme', label: 'Pengaturan - Tab Tema Warna' },
    { id: 'pengaturan_printer', label: 'Pengaturan - Tab Printer' },
    { id: 'pengaturan_admin_contact', label: 'Pengaturan - Tab Kontak Admin' },
    { id: 'pengaturan_save', label: 'Pengaturan - Simpan Perubahan' }
];

const rolesList = ['superadmin', 'owner', 'manager', 'tamu'];

const accountLimitOptions = [
    { id: 'daily', label: 'Harian' },
    { id: 'monthly', label: 'Bulanan' },
    { id: 'permanent', label: 'Permanen' }
];

const pastelThemes = [
    { id: 'elegant-spectrum', name: 'Elegant Spectrum', primary: '#315f9c', hover: '#264d82', bg: 'radial-gradient(circle at 10% 6%, rgba(49, 95, 156, 0.16), transparent 28%), radial-gradient(circle at 86% 12%, rgba(184, 91, 122, 0.14), transparent 28%), radial-gradient(circle at 82% 82%, rgba(40, 119, 95, 0.12), transparent 30%), linear-gradient(135deg, #f7f9fc 0%, #eef5f8 43%, #faf4ee 100%)' },
    { id: 'professional-teal', name: 'Profesional Teal', primary: '#2f6f73', hover: '#245a5d', bg: 'radial-gradient(circle at top left, rgba(47, 111, 115, 0.12), transparent 34%), linear-gradient(135deg, #f8fafc 0%, #eef4f7 48%, #f7f4ed 100%)' },
    { id: 'pastel-blue', name: 'Biru Langit', primary: '#a3bffa', hover: '#8daaf0', bg: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)' },
    { id: 'pastel-pink', name: 'Merah Muda', primary: '#f9a8d4', hover: '#f472b6', bg: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)' },
    { id: 'pastel-green', name: 'Hijau Mint', primary: '#86efac', hover: '#4ade80', bg: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)' },
    { id: 'pastel-purple', name: 'Ungu Lavender', primary: '#c4b5fd', hover: '#a78bfa', bg: 'linear-gradient(135deg, #faf5ff 0%, #ede9fe 100%)' },
    { id: 'pastel-peach', name: 'Persik', primary: '#fdba74', hover: '#fb923c', bg: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)' },
    { id: 'pastel-teal', name: 'Teal Segar', primary: '#5eead4', hover: '#2dd4bf', bg: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)' },
    { id: 'pastel-rose', name: 'Mawar', primary: '#fda4af', hover: '#fb7185', bg: 'linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)' },
    { id: 'pastel-sky', name: 'Biru Laut', primary: '#7dd3fc', hover: '#38bdf8', bg: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)' }
];

// --- Settings Tab Switching ---
function getCurrentRolePerms() {
    const access = state.settings.access || state.settings;
    return access[state.userRole] || access['tamu'] || {};
}

function hasSettingPermission(permissionId) {
    const perms = getCurrentRolePerms();
    return perms.pengaturan !== false && perms[permissionId] !== false;
}

function activateSettingsTab(tabName = 'owners') {
    document.querySelectorAll('.settings-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.tab === tabName);
    });
    document.querySelectorAll('.settings-panel').forEach(p => p.classList.add('hidden'));
    const panel = document.getElementById('settings-panel-' + tabName);
    if (panel) panel.classList.remove('hidden');
}

function hasNonSuperadminUser() {
    return (state.settings.owners || []).some(owner => getAccountRole(owner) !== 'superadmin');
}

function updateAccessTabVisibility() {
    const accessTab = document.querySelector('.settings-tab[data-tab="access"]');
    const accessPanel = document.getElementById('settings-panel-access');
    const shouldShow = hasNonSuperadminUser() && hasSettingPermission('pengaturan_access');
    if (!accessTab || !accessPanel) return;

    accessTab.classList.toggle('hidden', !shouldShow);
    if (!shouldShow) {
        accessPanel.classList.add('hidden');
        if (accessTab.classList.contains('active')) {
            activateSettingsTab('owners');
        }
    }
}

function updateSettingsPermissionUI() {
    const tabPermissions = {
        owners: 'pengaturan_users',
        access: 'pengaturan_access',
        theme: 'pengaturan_theme',
        printer: 'pengaturan_printer',
        adminContact: 'pengaturan_admin_contact'
    };

    Object.entries(tabPermissions).forEach(([tabName, permissionId]) => {
        const tab = document.querySelector(`.settings-tab[data-tab="${tabName}"]`);
        const panel = document.getElementById('settings-panel-' + tabName);
        const allowed = hasSettingPermission(permissionId);
        if (tab) tab.classList.toggle('hidden', !allowed);
        if (!allowed && panel) panel.classList.add('hidden');
    });

    updateAccessTabVisibility();

    const activeTab = document.querySelector('.settings-tab.active:not(.hidden)');
    if (!activeTab) {
        const firstVisible = document.querySelector('.settings-tab:not(.hidden)');
        if (firstVisible) activateSettingsTab(firstVisible.dataset.tab);
    }

    if (DOM.settings.addOwnerBtn) {
        DOM.settings.addOwnerBtn.classList.toggle('hidden', !hasSettingPermission('pengaturan_users_add'));
    }

    if (DOM.settings.saveBtn) {
        DOM.settings.saveBtn.classList.toggle('hidden', !hasSettingPermission('pengaturan_save'));
    }
}

document.querySelectorAll('.settings-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        if (tab.classList.contains('hidden')) return;
        activateSettingsTab(tab.dataset.tab);
    });
});

// --- Owners Management ---
function renderOwners() {
    DOM.settings.ownersList.innerHTML = '';
    const owners = state.settings.owners || [];
    const canEditUsers = hasSettingPermission('pengaturan_users_edit');
    const canDeleteUsers = hasSettingPermission('pengaturan_users_delete');
    owners.forEach((owner, idx) => {
        const row = document.createElement('div');
        row.className = 'owner-row';

        // Photo area
        const photoWrap = document.createElement('div');
        photoWrap.className = 'owner-photo-wrap';
        const photoPreview = document.createElement('img');
        photoPreview.className = 'owner-photo-preview';
        if (owner.photo) {
            photoPreview.src = owner.photo;
        } else {
            photoPreview.src = '';
            photoPreview.style.display = 'none';
        }
        const photoPlaceholder = document.createElement('div');
        photoPlaceholder.className = 'owner-photo-placeholder';
        photoPlaceholder.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
        if (owner.photo) photoPlaceholder.style.display = 'none';

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.className = 'owner-photo-input';
        fileInput.disabled = !canEditUsers;
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
                const img = new Image();
                img.onload = () => {
                    // Resize to max 80x80 to keep data small
                    const canvas = document.createElement('canvas');
                    const size = 80;
                    canvas.width = size;
                    canvas.height = size;
                    const ctx = canvas.getContext('2d');
                    const min = Math.min(img.width, img.height);
                    const sx = (img.width - min) / 2;
                    const sy = (img.height - min) / 2;
                    ctx.drawImage(img, sx, sy, min, min, 0, 0, size, size);
                    const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
                    state.settings.owners[idx].photo = dataUrl;
                    photoPreview.src = dataUrl;
                    photoPreview.style.display = 'block';
                    photoPlaceholder.style.display = 'none';
                };
                img.src = ev.target.result;
            };
            reader.readAsDataURL(file);
        });

        photoWrap.appendChild(photoPreview);
        photoWrap.appendChild(photoPlaceholder);
        photoWrap.appendChild(fileInput);
        photoWrap.classList.toggle('disabled', !canEditUsers);
        photoWrap.addEventListener('click', () => {
            if (canEditUsers) fileInput.click();
        });

        if (!owner.createdAt) owner.createdAt = new Date().toISOString();
        if (!owner.limitType) owner.limitType = 'permanent';
        if (!owner.role) owner.role = rolesList.includes(owner.username) ? owner.username : 'tamu';
        if (!owner.accessCode) owner.accessCode = owner.username || owner.role || 'tamu';

        const fieldsWrap = document.createElement('div');
        fieldsWrap.className = 'owner-fields';

        const identityGroup = document.createElement('div');
        identityGroup.className = 'owner-field-group';

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.value = owner.name || '';
        nameInput.placeholder = 'Nama user';
        nameInput.disabled = !canEditUsers;
        nameInput.addEventListener('input', (e) => {
            state.settings.owners[idx].name = e.target.value;
        });

        const codeInput = document.createElement('input');
        codeInput.type = 'text';
        codeInput.value = owner.accessCode || owner.username || '';
        codeInput.placeholder = 'Kode akses login';
        codeInput.disabled = !canEditUsers;
        codeInput.addEventListener('input', (e) => {
            const code = normalizeAccessCode(e.target.value);
            state.settings.owners[idx].accessCode = code;
            if (!state.settings.owners[idx].role) state.settings.owners[idx].role = getAccountRole(state.settings.owners[idx]);
        });
        identityGroup.appendChild(nameInput);
        identityGroup.appendChild(codeInput);

        const passwordInput = document.createElement('input');
        passwordInput.type = 'password';
        passwordInput.value = owner.password || '';
        passwordInput.placeholder = 'Password opsional';
        passwordInput.disabled = !canEditUsers;
        passwordInput.addEventListener('input', (e) => {
            state.settings.owners[idx].password = e.target.value;
        });
        identityGroup.appendChild(passwordInput);

        const controlGroup = document.createElement('div');
        controlGroup.className = 'owner-field-group owner-field-group-compact';

        const roleSelect = document.createElement('select');
        rolesList.forEach(r => {
            const opt = document.createElement('option');
            opt.value = r;
            opt.textContent = r.charAt(0).toUpperCase() + r.slice(1);
            if (getAccountRole(owner) === r) opt.selected = true;
            roleSelect.appendChild(opt);
        });
        roleSelect.addEventListener('change', (e) => {
            state.settings.owners[idx].role = e.target.value;
            state.settings.owners[idx].username = e.target.value;
            updateAccessTabVisibility();
        });
        roleSelect.disabled = !canEditUsers;

        const limitSelect = document.createElement('select');
        accountLimitOptions.forEach(limit => {
            const opt = document.createElement('option');
            opt.value = limit.id;
            opt.textContent = limit.label;
            if (getAccountLimitType(owner) === limit.id) opt.selected = true;
            limitSelect.appendChild(opt);
        });
        limitSelect.addEventListener('change', (e) => {
            state.settings.owners[idx].limitType = e.target.value;
            state.settings.owners[idx].createdAt = new Date().toISOString();
            renderOwners();
        });
        limitSelect.disabled = !canEditUsers;

        controlGroup.appendChild(roleSelect);
        controlGroup.appendChild(limitSelect);

        const status = getAccountStatus(owner);
        const statusBadge = document.createElement('div');
        statusBadge.className = 'owner-limit-badge' + (status.expired ? ' expired' : '');
        statusBadge.textContent = status.label;

        fieldsWrap.appendChild(identityGroup);
        fieldsWrap.appendChild(controlGroup);
        fieldsWrap.appendChild(statusBadge);

        // Remove button
        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn-remove-owner';
        removeBtn.innerHTML = '&times;';
        removeBtn.title = 'Hapus';
        removeBtn.classList.toggle('hidden', !canDeleteUsers);
        removeBtn.addEventListener('click', () => {
            state.settings.owners.splice(idx, 1);
            renderOwners();
        });

        row.appendChild(photoWrap);
        row.appendChild(fieldsWrap);
        row.appendChild(removeBtn);
        DOM.settings.ownersList.appendChild(row);
    });
    updateAccessTabVisibility();
    updateSettingsPermissionUI();
}

DOM.settings.addOwnerBtn.addEventListener('click', () => {
    if (!state.settings.owners) state.settings.owners = [];
    const createdAt = new Date().toISOString();
    state.settings.owners.push({
        name: '',
        accessCode: `user${state.settings.owners.length + 1}`,
        username: 'tamu',
        role: 'tamu',
        limitType: 'daily',
        createdAt,
        password: '',
        photo: ''
    });
    renderOwners();
});

// --- Theme Picker ---
function renderThemes() {
    DOM.settings.themeGrid.innerHTML = '';
    const currentTheme = state.settings.theme || 'elegant-spectrum';
    pastelThemes.forEach(theme => {
        const swatch = document.createElement('div');
        swatch.className = 'theme-swatch' + (theme.id === currentTheme ? ' active' : '');
        swatch.innerHTML = `
            <div class="swatch-preview" style="background: ${theme.primary};"></div>
            <span class="swatch-name">${theme.name}</span>
        `;
        swatch.addEventListener('click', () => {
            state.settings.theme = theme.id;
            document.querySelectorAll('.theme-swatch').forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');
            applyTheme(theme.id);
        });
        DOM.settings.themeGrid.appendChild(swatch);
    });
}

function renderAdminContact() {
    if (!state.settings.adminContact) {
        state.settings.adminContact = { email: 'admin@karakterku.id', whatsapp: '6281234567890' };
    }

    if (DOM.settings.adminEmailInput) {
        DOM.settings.adminEmailInput.value = state.settings.adminContact.email || '';
        DOM.settings.adminEmailInput.oninput = (e) => {
            state.settings.adminContact.email = e.target.value.trim();
        };
    }

    if (DOM.settings.adminWhatsappInput) {
        DOM.settings.adminWhatsappInput.value = state.settings.adminContact.whatsapp || '';
        DOM.settings.adminWhatsappInput.oninput = (e) => {
            state.settings.adminContact.whatsapp = e.target.value.replace(/[^\d+]/g, '');
        };
    }
}

function applyTheme(themeId) {
    const theme = pastelThemes.find(t => t.id === themeId);
    if (!theme) return;
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--primary-hover', theme.hover);
    document.body.style.background = theme.bg;
}

// --- Access Table (unchanged logic) ---
function renderAccessTable() {
    DOM.settings.tbody.innerHTML = '';
    const access = state.settings.access || state.settings;
    let lastCategory = '';
    featuresList.forEach(feat => {
        const category = feat.id.startsWith('pengaturan') ? 'Detail Menu Pengaturan' : (feat.id === 'riwayat' ? 'Navigasi' : 'Akses Tes');
        if (category !== lastCategory) {
            const sectionTr = document.createElement('tr');
            sectionTr.className = 'access-section-row';
            const sectionTd = document.createElement('td');
            sectionTd.colSpan = rolesList.length + 1;
            sectionTd.textContent = category;
            sectionTr.appendChild(sectionTd);
            DOM.settings.tbody.appendChild(sectionTr);
            lastCategory = category;
        }

        const tr = document.createElement('tr');
        const tdFeat = document.createElement('td');
        tdFeat.textContent = feat.label;
        tr.appendChild(tdFeat);

        rolesList.forEach(role => {
            const tdRole = document.createElement('td');
            const cb = document.createElement('input');
            cb.type = 'checkbox';
            const isSuperadminSettingLock = role === 'superadmin' && feat.id.startsWith('pengaturan');
            cb.checked = isSuperadminSettingLock ? true : (access[role] ? (access[role][feat.id] !== false) : true);
            
            if (isSuperadminSettingLock) {
                cb.disabled = true;
            }

            cb.addEventListener('change', (e) => {
                if (!state.settings.access) state.settings.access = {};
                if (!state.settings.access[role]) state.settings.access[role] = {};
                state.settings.access[role][feat.id] = e.target.checked;
                updateSettingsPermissionUI();
                renderOwners();
            });

            tdRole.appendChild(cb);
            tr.appendChild(tdRole);
        });
        DOM.settings.tbody.appendChild(tr);
    });
}

// --- Combined render ---
function renderSettings() {
    renderOwners();
    renderAccessTable();
    renderThemes();
    renderAdminContact();
    updateAccessTabVisibility();
}

DOM.settings.saveBtn.addEventListener('click', () => {
    saveSettingsToDisk();
    applyAccessControl();
    alert('Pengaturan berhasil disimpan!');
    showPage('testSelect');
});

DOM.settings.backBtn.addEventListener('click', () => {
    showPage('testSelect');
});

if (DOM.shareGuest.createBtn) {
    DOM.shareGuest.createBtn.addEventListener('click', createShareSession);
}

if (DOM.shareGuest.refreshBtn) {
    DOM.shareGuest.refreshBtn.addEventListener('click', refreshShareSessions);
}

window.setInterval(async () => {
    if (canManageShareSessions() && !document.hidden) {
        await refreshShareSessions();
    }

    const historyVisible = DOM.containers.history && !DOM.containers.history.classList.contains('hidden');
    if (historyVisible && window.electronAPI && !document.hidden) {
        await reloadHistoryFromSource();
        renderHistory();
    }
}, 5000);

// ===========================
// WHATSAPP SHARE
// ===========================
function shareToWhatsApp(testType) {
    const name = state.currentUser.name || 'Peserta';
    let msg = `*Hasil Tes Karakter.ku*\n\nNama: ${name}\nJenis Tes: `;
    if (testType === 'mbti') {
        const type = document.getElementById('mbti-type')?.textContent || '';
        const alias = document.getElementById('mbti-alias')?.textContent || '';
        msg += `MBTI\nTipe: ${type} - ${alias}`;
    } else if (testType === 'disc') {
        const type = document.getElementById('disc-type')?.textContent || '';
        const typeName = document.getElementById('disc-type-name')?.textContent || '';
        msg += `DISC\nProfil: ${type} - ${typeName}`;
    } else if (testType === 'iq') {
        const score = document.getElementById('iq-score-value')?.textContent || '';
        const cat = document.getElementById('iq-category')?.textContent || '';
        msg += `IQ\nSkor: ${score} (${cat})`;
    } else if (testType === 'wpt') {
        const score = document.getElementById('wpt-score-value')?.textContent || '';
        const cat = document.getElementById('wpt-category')?.textContent || '';
        msg += `WPT (Wonderlic)\nSkor: ${score} (${cat})`;
    } else if (testType === 'bigfive') {
        const dom = document.getElementById('bigfive-dominant-name')?.textContent || '';
        msg += `Big Five\nDimensi Dominan: ${dom}`;
    } else if (testType === 'riasec') {
        const code = document.getElementById('riasec-dominant-name')?.textContent || '';
        msg += `RIASEC\nHolland Code: ${code}`;
    } else if (testType === 'papi') {
        const lead = document.getElementById('papi-summary-lead')?.textContent || '';
        msg += `PAPI Kostick\nGaya Kepemimpinan: ${lead}\nDetail Profil Gaya Kerja telah dianalisis berdasarkan 20 dimensi kepribadian PAPI Kostick (Kepemimpinan, Arah Kerja, Aktivitas Kerja, Gaya Kerja, Relasi Sosial, Kepatuhan & Temperamen).`;
    } else if (testType === 'cognitive') {
        const score = document.getElementById('cognitive-score-value')?.textContent || '';
        const cat = document.getElementById('cognitive-category')?.textContent || '';
        const verbal = document.getElementById('cognitive-score-verbal')?.textContent || '0 / 5';
        const numeric = document.getElementById('cognitive-score-numeric')?.textContent || '0 / 5';
        const problem = document.getElementById('cognitive-score-problem')?.textContent || '0 / 5';
        msg += `Tes Kognitif\nHasil: ${cat} (Total Skor: ${score})\nDetail Nilai:\n- Penalaran Verbal: ${verbal}\n- Penalaran Numerik: ${numeric}\n- Pemecahan Masalah: ${problem}`;
    } else if (testType === 'spatial') {
        const score = document.getElementById('spatial-score-value')?.textContent || '';
        const cat = document.getElementById('spatial-category')?.textContent || '';
        const s2d = document.getElementById('spatial-score-2d')?.textContent || '0 / 5';
        const s3d = document.getElementById('spatial-score-3d')?.textContent || '0 / 5';
        msg += `Tes Spasial\nHasil: ${cat} (Total Skor: ${score})\nDetail Nilai:\n- Spasial 2D: ${s2d}\n- Spasial 3D: ${s3d}`;
    }
    msg += `\n\n_Dihasilkan oleh Karakter.ku - Pusat Tes Psikologi_`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}

// WA button listeners
document.getElementById('share-wa-btn')?.addEventListener('click', () => shareToWhatsApp('mbti'));
document.getElementById('disc-share-wa-btn')?.addEventListener('click', () => shareToWhatsApp('disc'));
document.getElementById('iq-share-wa-btn')?.addEventListener('click', () => shareToWhatsApp('iq'));
document.getElementById('wpt-share-wa-btn')?.addEventListener('click', () => shareToWhatsApp('wpt'));
document.getElementById('bigfive-share-wa-btn')?.addEventListener('click', () => shareToWhatsApp('bigfive'));
document.getElementById('riasec-share-wa-btn')?.addEventListener('click', () => shareToWhatsApp('riasec'));
document.getElementById('papi-share-wa-btn')?.addEventListener('click', () => shareToWhatsApp('papi'));
document.getElementById('cognitive-share-wa-btn')?.addEventListener('click', () => shareToWhatsApp('cognitive'));
document.getElementById('spatial-share-wa-btn')?.addEventListener('click', () => shareToWhatsApp('spatial'));

(async function initApp() {
    initColorMode();
    const sharedGuestInitialized = await initSharedGuestMode();
    if (sharedGuestInitialized) {
        return;
    }

    configureThankYouPage();
    if (window.electronAPI) {
        applyAccessControl();
        await refreshShareSessions();
    }
})();
