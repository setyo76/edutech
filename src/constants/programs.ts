import { Program, Material, Testimonial, ContactInfo, WhyChooseUs } from '@/types'

export const WHATSAPP_NUMBER = '6281213265482'
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export const PROGRAMS: Program[] = [
  {
    id: 'robotics',
    title: 'Robotik Arduino',
    description: 'Pelatihan merakit dan program robot menggunakan Arduino untuk tingkat dasar hingga mahir',
    icon: 'Bot',
    gradient: 'gradient-primary',
    bgColor: 'bg-blue-100',
    color: 'text-blue-vivid',
    targetAudience: 'SD, SMP, SMA',
    whatsappText: 'Halo,%20saya%20tertarik%20dengan%20program%20Robotik%20Arduino'
  },
  {
    id: 'design',
    title: 'Desain Digital',
    description: 'Pelatihan desain grafis menggunakan Canva, Figma, dan Tinkercad untuk pemula hingga mahir',
    icon: 'Palette',
    gradient: 'gradient-secondary',
    bgColor: 'bg-purple-100',
    color: 'text-purple-modern',
    targetAudience: 'SD, SMP, SMA',
    whatsappText: 'Halo,%20saya%20tertarik%20dengan%20program%20Desain%20Digital'
  },
  {
    id: 'webdev',
    title: 'Web Development',
    description: 'Les private coding dari Frontend hingga Fullstack untuk membuat website interaktif',
    icon: 'Code',
    gradient: 'gradient-cta',
    bgColor: 'bg-orange-100',
    color: 'text-orange-energetic',
    targetAudience: 'SMP, SMA',
    whatsappText: 'Halo,%20saya%20tertarik%20dengan%20program%20Web%20Development'
  },
  {
    id: 'math',
    title: 'Matematika',
    description: 'Les private matematika online dengan metode pembelajaran yang menyenangkan',
    icon: 'Calculator',
    gradient: 'gradient-success',
    bgColor: 'bg-green-100',
    color: 'text-green-fresh',
    targetAudience: 'SD, SMP, SMA',
    whatsappText: 'Halo,%20saya%20tertarik%20dengan%20program%20Matematika'
  },
  {
    id: 'school-training',
    title: 'Pelatihan untuk Sekolah',
    description: 'Program pelatihan khusus untuk sekolah dalam bidang robotika, coding, dan STEAM education',
    icon: 'School',
    gradient: 'gradient-primary',
    bgColor: 'bg-blue-100',
    color: 'text-blue-vivid',
    targetAudience: 'Sekolah & Institusi',
    whatsappText: 'Halo,%20saya%20tertarik%20dengan%20program%20Pelatihan%20untuk%20Sekolah'
  },
  {
    id: 'extracurricular',
    title: 'Pembina Ekstrakurikuler Robotic & Coding',
    description: 'Pendampingan dan pelatihan pembina ekstrakurikuler robotika dan coding di sekolah',
    icon: 'Users',
    gradient: 'gradient-secondary',
    bgColor: 'bg-purple-100',
    color: 'text-purple-modern',
    targetAudience: 'Guru & Pembina',
    whatsappText: 'Halo,%20saya%20tertarik%20dengan%20program%20Pembina%20Ekstrakurikuler'
  }
]

export const MATERIALS: Material[] = [
  {
    id: 'sd',
    level: 'SD',
    icon: 'Baby',
    bgColor: 'bg-blue-100',
    color: 'text-blue-vivid',
    items: [
      'Matematika Dasar',
      'Pengenalan Robotik Sederhana',
      'STEAM SD',
      'Koding dengan Scratch',
      'Desain dengan Canva'
    ]
  },
  {
    id: 'smp',
    level: 'SMP',
    icon: 'GraduationCap',
    bgColor: 'bg-purple-100',
    color: 'text-purple-modern',
    items: [
      'Matematika SMP',
      'Arduino untuk Pemula',
      'STEAM SMP',
      'Frontend Web Development (HTML, CSS, Javascript)',
      'Desain Grafis dengan Canva',
      'Desain Grafis dengan Figma',
      'Desain dengan Tinkercad'
    ]
  },
  {
    id: 'sma',
    level: 'SMA/SMK',
    icon: 'User',
    bgColor: 'bg-orange-100',
    color: 'text-orange-energetic',
    items: [
      'Matematika SMA/SMK',
      'Arduino Tingkat Lanjut',
      'STEAM SMA/SMK',
      'Fullstack Web Development',
      'Desain Grafis dengan Canva',
      'Desain UI/UX dengan Figma',
      'Desain dengan Tinkercad'
    ]
  }
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ibu Siti',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    rating: 5,
    text: 'Anak saya jadi lebih semangat belajar matematika setelah ikut les di sini. Guru-gurunya sangat sabar dan mengajarkan dengan metode yang menyenangkan.'
  },
  {
    id: '2',
    name: 'Budi, 15 tahun',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    rating: 5,
    text: 'Pelatihan robotiknya seru banget! Sekarang saya bisa bikin robot sederhana sendiri dan program sesuai keinginan saya.'
  },
  {
    id: '3',
    name: 'Ibu Rina',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    rating: 5,
    text: 'Anak saya yang SMA sekarang jago desain grafis berkat pelatihan Canva dan Figma. Bahkan sudah mulai dapat proyek freelance!'
  }
]

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: 'MapPin',
    label: 'Alamat',
    value: 'Indonesia Training Center',
    bgColor: 'bg-blue-100',
    color: 'text-blue-vivid'
  },
  {
    icon: 'Phone',
    label: 'Telepon',
    value: '0812-1326-5482',
    bgColor: 'bg-green-100',
    color: 'text-green-fresh'
  },
  {
    icon: 'Mail',
    label: 'Email',
    value: 'info@indonesiatrainingcenter.com',
    bgColor: 'bg-purple-100',
    color: 'text-purple-modern'
  },
  {
    icon: 'Globe',
    label: 'Website',
    value: 'edutech.sch.id',
    bgColor: 'bg-orange-100',
    color: 'text-orange-energetic'
  }
]

export const WHY_CHOOSE_US: WhyChooseUs[] = [
  {
    icon: 'Users',
    title: 'Mentor Berpengalaman',
    description: 'Diajar oleh para profesional yang berpengalaman di bidangnya masing-masing',
    bgColor: 'bg-blue-100',
    color: 'text-blue-vivid'
  },
  {
    icon: 'Laptop',
    title: 'Fleksibel',
    description: 'Pilihan belajar online atau offline sesuai kebutuhan dan kenyamanan Anda',
    bgColor: 'bg-purple-100',
    color: 'text-purple-modern'
  },
  {
    icon: 'Award',
    title: 'Sertifikat',
    description: 'Dapatkan sertifikat resmi setelah menyelesaikan program pelatihan',
    bgColor: 'bg-green-100',
    color: 'text-green-fresh'
  },
  {
    icon: 'Heart',
    title: 'Bimbingan Penuh',
    description: 'Dibimbing secara intensif hingga benar-benar menguasai materi',
    bgColor: 'bg-orange-100',
    color: 'text-orange-energetic'
  }
]