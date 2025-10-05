import { GraduationCap } from 'lucide-react'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const programs = [
    'Robotik Arduino',
    'Desain Digital',
    'Web Development',
    'Matematika',
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Program', href: '#programs' },
    { name: 'Materi & Soal', href: '#materials' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Kontak', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:bg-blue-vivid' },
    { icon: Twitter, href: '#', color: 'hover:bg-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
    { icon: Youtube, href: '#', color: 'hover:bg-red-600' },
  ]

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-vivid flex items-center justify-center">
                <GraduationCap className="text-white" size={20} />
              </div>
              <span className="font-bold text-xl">EduTech</span>
            </div>
            <p className="text-gray-400">
              Membangun generasi unggul melalui pendidikan teknologi dan matematika
              yang berkualitas.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold mb-4">Program</h3>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center ${social.color} transition-colors`}
                  aria-label={`Social media link ${index + 1}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 EduTech by <a href="https://kampusnlp.com/">Indonesia Training Center</a>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer