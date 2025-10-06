import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import * as Icons from 'lucide-react'
import { Program } from '@/types'
import { WHATSAPP_BASE_URL } from '@/constants/programs'

interface ProgramCardProps {
  program: Program
  index: number
}

const ProgramCard = ({ program, index }: ProgramCardProps) => {
  const Icon = Icons[program.icon as keyof typeof Icons] as React.FC<{ 
    size?: number
    className?: string 
  }>
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${program.whatsappText}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-light-gray rounded-xl overflow-hidden shadow-lg flex flex-col w-full h-full"
    >
      <div className={`h-2 ${program.gradient}`} />
      <div className="p-6 flex flex-col flex-grow">
        <div className={`w-16 h-16 rounded-full ${program.bgColor} flex items-center justify-center mb-4`}>
          <Icon className={program.color} size={32} />
        </div>
        <h3 className="text-xl font-bold text-dark mb-2">{program.title}</h3>
        <p className="text-slate-gray mb-4 flex-grow">{program.description}</p>
        <div className="flex items-center text-sm text-slate-gray mb-4">
          <Users size={16} className="mr-2" />
          <span>{program.targetAudience}</span>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full ${program.gradient} text-white font-medium py-2 px-4 rounded-lg text-center transition-opacity hover:opacity-90`}
        >
          Daftar Sekarang
        </a>
      </div>
    </motion.div>
  )
}

export default ProgramCard


