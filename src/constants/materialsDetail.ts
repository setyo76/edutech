export interface MaterialDetailItem {
  title: string
  description: string
  topics: string[]
  benefits: string[]
  duration: string
  level: string
}

export interface MaterialsDetailData {
  level: string
  levelDescription: string
  materials: MaterialDetailItem[]
}

export const MATERIALS_DETAIL: Record<string, MaterialsDetailData> = {
  sd: {
    level: 'SD',
    levelDescription: 'Materi pembelajaran yang dirancang khusus untuk siswa Sekolah Dasar dengan pendekatan yang menyenangkan dan mudah dipahami.',
    materials: [
      {
        title: 'Matematika Dasar',
        description: 'Pembelajaran matematika fundamental yang menyenangkan dengan pendekatan visual dan interaktif untuk membangun fondasi yang kuat.',
        topics: [
          'Operasi Hitung Dasar (Penjumlahan, Pengurangan, Perkalian, Pembagian)',
          'Bilangan Bulat dan Pecahan Sederhana',
          'Geometri Dasar (Bangun Datar dan Bangun Ruang)',
          'Pengukuran (Panjang, Berat, Waktu, Uang)',
          'Statistika Sederhana (Diagram dan Grafik)'
        ],
        benefits: [
          'Membangun pemahaman konsep matematika yang kuat',
          'Meningkatkan kemampuan logika dan pemecahan masalah',
          'Belajar dengan cara yang menyenangkan melalui games dan aktivitas',
          'Persiapan matang untuk jenjang pendidikan selanjutnya'
        ],
        duration: '12 pertemuan (@ 60 menit)',
        level: 'Pemula'
      },
      {
        title: 'Pengenalan Robotik Sederhana',
        description: 'Memperkenalkan konsep robotika dasar melalui aktivitas hands-on yang menyenangkan, menggunakan komponen sederhana yang aman untuk anak.',
        topics: [
          'Pengenalan Komponen Elektronika Dasar',
          'Konsep Input dan Output',
          'Membuat Robot Sederhana dengan Motor',
          'Pengenalan Sensor Cahaya dan Suara',
          'Proyek: Robot Line Follower Sederhana'
        ],
        benefits: [
          'Mengembangkan kreativitas dan imajinasi',
          'Memahami konsep sebab-akibat dalam teknologi',
          'Melatih keterampilan motorik halus',
          'Menumbuhkan minat terhadap STEM sejak dini'
        ],
        duration: '8 pertemuan (@ 90 menit)',
        level: 'Pemula'
      },
      {
        title: 'STEAM SD',
        description: 'Program terintegrasi yang menggabungkan Science, Technology, Engineering, Arts, dan Mathematics melalui proyek-proyek kreatif.',
        topics: [
          'Eksperimen Sains Sederhana',
          'Teknologi dalam Kehidupan Sehari-hari',
          'Engineering: Membuat Struktur Sederhana',
          'Seni dan Kreativitas dalam STEM',
          'Project-Based Learning'
        ],
        benefits: [
          'Pembelajaran holistik dan terintegrasi',
          'Mengembangkan critical thinking',
          'Meningkatkan kemampuan kolaborasi',
          'Memahami aplikasi ilmu pengetahuan dalam kehidupan nyata'
        ],
        duration: '10 pertemuan (@ 75 menit)',
        level: 'Pemula'
      },
      {
        title: 'Koding dengan Scratch',
        description: 'Belajar pemrograman visual yang menyenangkan menggunakan Scratch, platform coding khusus untuk anak-anak.',
        topics: [
          'Pengenalan Interface Scratch',
          'Konsep Sequence, Loop, dan Conditional',
          'Membuat Animasi dan Games Sederhana',
          'Sprite, Costume, dan Sound',
          'Proyek: Membuat Game Interaktif'
        ],
        benefits: [
          'Memahami logika pemrograman tanpa syntax yang rumit',
          'Mengembangkan computational thinking',
          'Meningkatkan kreativitas dalam berkarya digital',
          'Fondasi kuat untuk belajar coding lanjutan'
        ],
        duration: '12 pertemuan (@ 60 menit)',
        level: 'Pemula'
      },
      {
        title: 'Desain dengan Canva',
        description: 'Belajar membuat desain grafis sederhana seperti poster, kartu ucapan, dan presentasi menggunakan Canva.',
        topics: [
          'Pengenalan Interface Canva',
          'Dasar-dasar Desain: Warna, Font, Layout',
          'Membuat Poster dan Kartu Ucapan',
          'Desain untuk Tugas Sekolah',
          'Proyek: Membuat Presentasi Kreatif'
        ],
        benefits: [
          'Mengembangkan kemampuan visual dan estetika',
          'Belajar menyampaikan ide secara visual',
          'Meningkatkan kualitas tugas sekolah',
          'Skill praktis untuk kehidupan sehari-hari'
        ],
        duration: '8 pertemuan (@ 60 menit)',
        level: 'Pemula'
      }
    ]
  },
  
  smp: {
    level: 'SMP',
    levelDescription: 'Program pembelajaran yang dirancang untuk siswa SMP dengan materi yang lebih mendalam dan aplikatif.',
    materials: [
      {
        title: 'Matematika SMP',
        description: 'Materi matematika tingkat SMP yang komprehensif dengan fokus pada pemahaman konsep dan aplikasi dalam kehidupan nyata.',
        topics: [
          'Aljabar: Persamaan dan Pertidaksamaan',
          'Fungsi dan Grafik',
          'Geometri dan Trigonometri Dasar',
          'Statistika dan Peluang',
          'Penerapan Matematika dalam Pemecahan Masalah'
        ],
        benefits: [
          'Pemahaman konsep matematika yang mendalam',
          'Persiapan ujian sekolah dan OSN',
          'Aplikasi matematika dalam kehidupan nyata',
          'Meningkatkan nilai rapor dan prestasi akademik'
        ],
        duration: '16 pertemuan (@ 90 menit)',
        level: 'Menengah'
      },
      {
        title: 'Arduino untuk Pemula',
        description: 'Belajar pemrograman mikrokontroler Arduino dari dasar, membuat berbagai proyek elektronika interaktif.',
        topics: [
          'Pengenalan Arduino dan Komponen Elektronika',
          'Pemrograman Arduino IDE (Bahasa C/C++)',
          'Input/Output Digital dan Analog',
          'Sensor dan Aktuator',
          'Proyek: Smart Home Sederhana, Robot Line Follower'
        ],
        benefits: [
          'Memahami konsep programming embedded systems',
          'Kemampuan membuat proyek IoT sederhana',
          'Fondasi untuk kompetisi robotika',
          'Skill praktis yang applicable'
        ],
        duration: '12 pertemuan (@ 120 menit)',
        level: 'Menengah'
      },
      {
        title: 'STEAM SMP',
        description: 'Program STEAM tingkat menengah dengan proyek-proyek yang lebih kompleks dan terintegrasi.',
        topics: [
          'Metode Ilmiah dan Eksperimen',
          'Teknologi dan Inovasi',
          'Engineering Design Process',
          'Integrasi Seni dalam STEM',
          'Proyek Inovasi Berkelanjutan'
        ],
        benefits: [
          'Kemampuan berpikir sistematis dan analitis',
          'Persiapan untuk kompetisi sains',
          'Pengembangan inovasi dan kreativitas',
          'Pembelajaran berbasis proyek nyata'
        ],
        duration: '14 pertemuan (@ 90 menit)',
        level: 'Menengah'
      },
      {
        title: 'Frontend Web Development (HTML, CSS, Javascript)',
        description: 'Belajar membuat website interaktif dengan HTML, CSS, dan JavaScript dari dasar hingga mahir.',
        topics: [
          'HTML: Struktur Website',
          'CSS: Styling dan Layout (Flexbox, Grid)',
          'JavaScript: Programming Dasar dan DOM Manipulation',
          'Responsive Web Design',
          'Proyek: Personal Website dan Landing Page'
        ],
        benefits: [
          'Kemampuan membuat website sendiri',
          'Skill yang marketable untuk freelance',
          'Fondasi untuk belajar framework modern',
          'Portfolio proyek untuk masa depan'
        ],
        duration: '16 pertemuan (@ 120 menit)',
        level: 'Menengah'
      },
      {
        title: 'Desain Grafis dengan Canva',
        description: 'Pembelajaran desain grafis tingkat menengah untuk berbagai kebutuhan digital dan cetak.',
        topics: [
          'Prinsip Desain Grafis Profesional',
          'Typography dan Color Theory',
          'Desain untuk Social Media',
          'Branding dan Identity',
          'Proyek: Campaign Visual dan Poster Event'
        ],
        benefits: [
          'Kemampuan desain untuk kebutuhan organisasi',
          'Skill yang applicable untuk OSIS/ekstrakurikuler',
          'Potensi income dari jasa desain',
          'Portfolio profesional'
        ],
        duration: '10 pertemuan (@ 90 menit)',
        level: 'Menengah'
      },
      {
        title: 'Desain Grafis dengan Figma',
        description: 'Belajar UI/UX design menggunakan Figma, tool profesional untuk desain digital.',
        topics: [
          'Pengenalan Interface Figma',
          'Dasar UI/UX Design',
          'Component dan Auto Layout',
          'Prototyping dan Interaction',
          'Proyek: Desain Aplikasi Mobile'
        ],
        benefits: [
          'Skill design tool profesional',
          'Pemahaman UI/UX principles',
          'Kemampuan membuat prototype interaktif',
          'Persiapan karir di bidang design'
        ],
        duration: '12 pertemuan (@ 90 menit)',
        level: 'Menengah'
      },
      {
        title: 'Desain dengan Tinkercad',
        description: 'Belajar desain 3D dan elektronika menggunakan Tinkercad untuk pembuatan prototype.',
        topics: [
          'Pengenalan 3D Modeling dengan Tinkercad',
          'Desain Objek 3D untuk 3D Printing',
          'Circuit Design dan Simulasi',
          'Arduino Simulator di Tinkercad',
          'Proyek: Prototype Produk 3D'
        ],
        benefits: [
          'Kemampuan visualisasi 3D',
          'Skill untuk maker dan prototype',
          'Simulasi sebelum implementasi hardware',
          'Persiapan untuk kompetisi inovasi'
        ],
        duration: '10 pertemuan (@ 90 menit)',
        level: 'Menengah'
      }
    ]
  },
  
  sma: {
    level: 'SMA/SMK',
    levelDescription: 'Program pembelajaran tingkat lanjut untuk siswa SMA/SMK yang mempersiapkan mereka menghadapi dunia kerja dan perguruan tinggi.',
    materials: [
      {
        title: 'Matematika SMA/SMK',
        description: 'Matematika tingkat lanjut dengan fokus pada persiapan UTBK, Olimpiade, dan aplikasi dalam berbagai bidang.',
        topics: [
          'Kalkulus: Limit, Turunan, Integral',
          'Matriks dan Transformasi',
          'Trigonometri Lanjut',
          'Statistika dan Probabilitas',
          'Matematika untuk UTBK dan Olimpiade'
        ],
        benefits: [
          'Persiapan optimal UTBK/SNBT',
          'Pemahaman matematika tingkat universitas',
          'Kemampuan problem solving tingkat tinggi',
          'Persiapan kompetisi matematika'
        ],
        duration: '20 pertemuan (@ 120 menit)',
        level: 'Lanjut'
      },
      {
        title: 'Arduino Tingkat Lanjut',
        description: 'Pembelajaran Arduino tingkat mahir dengan integrasi IoT, AI, dan sistem kompleks.',
        topics: [
          'Advanced Arduino Programming',
          'Internet of Things (IoT) dengan ESP32/ESP8266',
          'Integrasi dengan Cloud (Firebase, Blynk)',
          'Machine Learning di Embedded Systems',
          'Proyek: Smart City/Agriculture System'
        ],
        benefits: [
          'Skill IoT yang sangat marketable',
          'Kemampuan membuat sistem automation',
          'Persiapan kompetisi robotika nasional/internasional',
          'Portfolio untuk kuliah dan karir'
        ],
        duration: '16 pertemuan (@ 150 menit)',
        level: 'Lanjut'
      },
      {
        title: 'STEAM SMA/SMK',
        description: 'Program STEAM tingkat advanced dengan fokus pada research dan inovasi berkelanjutan.',
        topics: [
          'Research Methodology',
          'Innovation dan Entrepreneurship',
          'Advanced Engineering Design',
          'Technology for Social Impact',
          'Proyek: Research Paper dan Kompetisi'
        ],
        benefits: [
          'Kemampuan melakukan riset ilmiah',
          'Persiapan kompetisi LKTI, PIMNAS',
          'Skill entrepreneurship',
          'Portfolio untuk beasiswa dan kuliah'
        ],
        duration: '18 pertemuan (@ 120 menit)',
        level: 'Lanjut'
      },
      {
        title: 'Fullstack Web Development',
        description: 'Belajar web development secara menyeluruh dari frontend hingga backend dan database.',
        topics: [
          'Advanced JavaScript dan TypeScript',
          'Frontend: React.js/Next.js',
          'Backend: Node.js, Express.js',
          'Database: MongoDB, PostgreSQL',
          'Deployment dan DevOps',
          'Proyek: Web Application Lengkap'
        ],
        benefits: [
          'Skill fullstack developer profesional',
          'Kemampuan membuat aplikasi web kompleks',
          'Potensi freelance dan part-time job',
          'Portfolio untuk magang dan kerja'
        ],
        duration: '24 pertemuan (@ 150 menit)',
        level: 'Lanjut'
      },
      {
        title: 'Desain Grafis dengan Canva',
        description: 'Desain grafis tingkat profesional untuk branding dan marketing.',
        topics: [
          'Advanced Design Principles',
          'Brand Identity dan Guidelines',
          'Marketing Design Strategy',
          'Motion Graphics dengan Canva',
          'Proyek: Complete Brand Campaign'
        ],
        benefits: [
          'Skill desain profesional untuk bisnis',
          'Kemampuan membuat brand identity',
          'Potensi income dari jasa desain',
          'Portfolio untuk freelance dan agency'
        ],
        duration: '12 pertemuan (@ 120 menit)',
        level: 'Lanjut'
      },
      {
        title: 'Desain UI/UX dengan Figma',
        description: 'Pembelajaran UI/UX design profesional dengan Figma untuk aplikasi dan website.',
        topics: [
          'UX Research dan User Testing',
          'Information Architecture',
          'Advanced Prototyping dan Micro-interactions',
          'Design System dan Component Library',
          'Collaboration dan Handoff ke Developer',
          'Proyek: Complete App Design'
        ],
        benefits: [
          'Skill UI/UX designer profesional',
          'Kemampuan design thinking',
          'Portfolio untuk magang di startup/tech company',
          'Persiapan karir sebagai Product Designer'
        ],
        duration: '16 pertemuan (@ 120 menit)',
        level: 'Lanjut'
      },
      {
        title: 'Desain dengan Tinkercad',
        description: '3D modeling dan circuit design tingkat advanced untuk product development.',
        topics: [
          'Advanced 3D Modeling Techniques',
          'Product Design dan Prototyping',
          'Complex Circuit Design',
          'Integration dengan Arduino dan IoT',
          'Proyek: Product Design End-to-End'
        ],
        benefits: [
          'Skill product designer',
          'Kemampuan dari konsep hingga prototype',
          'Persiapan kompetisi inovasi teknologi',
          'Portfolio untuk kuliah teknik/desain'
        ],
        duration: '14 pertemuan (@ 120 menit)',
        level: 'Lanjut'
      }
    ]
  },
    institutional: {
    level: 'Layanan untuk Sekolah',
    levelDescription: 'Program kerja sama yang dirancang khusus bagi sekolah untuk meningkatkan kualitas pembelajaran teknologi, coding, dan robotika.',
    materials: [
      {
        title: 'Pelatihan untuk Sekolah',
        description: 'Program kolaboratif antara Edutech dan sekolah mitra dalam bentuk pelatihan klasikal, baik untuk guru maupun siswa.',
        topics: [
          'Workshop Guru: Integrasi STEAM & Teknologi dalam Pembelajaran',
          'Workshop Siswa: Coding, Robotika, dan Desain Digital',
          'Implementasi Kurikulum STEAM Sekolah',
          'Pelatihan Kurikulum Berbasis Proyek (Project-Based Learning)',
          'Sesi Evaluasi & Sertifikasi Peserta'
        ],
        benefits: [
          'Meningkatkan kompetensi guru di bidang teknologi pendidikan',
          'Meningkatkan motivasi dan kemampuan digital siswa',
          'Dapat disesuaikan dengan kebutuhan dan jadwal sekolah',
          'Mendapatkan sertifikat untuk guru dan siswa',
          'Menjalin kemitraan jangka panjang dengan Edutech'
        ],
        duration: 'Durasi fleksibel (1 hari – 4 minggu, sesuai kebutuhan)',
        level: 'Institusional'
      },
      {
        title: 'Pembina Ekstrakurikuler Robotic & Coding Sekolah',
        description: 'Layanan pembimbingan rutin oleh mentor ahli untuk kegiatan ekstrakurikuler robotik dan coding di sekolah mitra.',
        topics: [
          'Pendampingan Klub Robotika Sekolah',
          'Kurikulum & Modul Ekskul Robotik dan Coding',
          'Pelatihan Persiapan Lomba (Robotika & Programming)',
          'Proyek Inovasi Sekolah',
          'Evaluasi dan Showcase Hasil Ekskul'
        ],
        benefits: [
          'Mendapatkan pembimbing profesional dari Edutech',
          'Program berkelanjutan sepanjang tahun ajaran',
          'Meningkatkan prestasi siswa di bidang teknologi dan sains',
          'Mendukung branding sekolah berbasis teknologi',
          'Laporan perkembangan dan hasil proyek setiap semester'
        ],
        duration: 'Program tahunan (1–2 kali per minggu)',
        level: 'Institusional'
      }
    ]
  }
}