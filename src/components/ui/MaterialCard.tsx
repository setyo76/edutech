import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { Material } from '@/types'

interface MaterialCardProps {
  material: Material
  index: number
}

const MaterialCard = ({ material, index }: MaterialCardProps) => {
  const Icon = Icons[material.icon as keyof typeof Icons] as React.FC<{
    size?: number
    className?: string
  }>

  // Tentukan background image sesuai jenjang
const getBackgroundImage = (level: string) => {
  const lower = level.toLowerCase()
  if (lower.includes('sd')) return '/images/SD.png'
  if (lower.includes('smp')) return '/images/SMP.png'
  if (lower.includes('sma')) return '/images/SMA.png'
  if (lower.includes('smk')) return '/images/SMA.png' // bisa pakai sama untuk SMA/SMK
  return '/images/default.png'
}

  const bgImage = getBackgroundImage(material.level)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }} // sedikit membesar seluruh card
      className="group relative bg-white rounded-xl shadow-lg p-6 flex flex-col h-full overflow-hidden transition-all duration-500 hover:shadow-2xl"
    >
      {/* Background image transparan dengan efek zoom-in */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out opacity-0 group-hover:opacity-60"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        ></div>
      </div>

      {/* Overlay agar teks tetap terbaca */}
      <div className="absolute inset-0 bg-white/70 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

      {/* Konten utama */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div
            className={`w-12 h-12 rounded-full ${material.bgColor} flex items-center justify-center mr-4`}
          >
            <Icon className={material.color} size={24} />
          </div>
          <h3 className="text-xl font-bold text-dark">Materi {material.level}</h3>
        </div>

        <ul className="space-y-3 mb-6 flex-grow">
          {material.items.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <CheckCircle
                className="text-green-fresh mt-1 mr-2 flex-shrink-0"
                size={20}
              />
              <span className="text-slate-gray">{item}</span>
            </li>
          ))}
        </ul>

        <Link
          to={`/materi/${material.id}`}
          className="text-blue-vivid font-medium hover:underline inline-flex items-center mt-auto"
        >
          Lihat semua materi {material.level}
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  )
}

export default MaterialCard

