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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full"
    >
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
    </motion.div>
  )
}

export default MaterialCard