import { motion } from 'framer-motion'
import { Users, MessageCircle, Info } from 'lucide-react'
import * as Icons from 'lucide-react'
import { Program } from '@/types'

interface ProgramCardProps {
  program: Program
  index: number
}

const ProgramCard = ({ program, index }: ProgramCardProps) => {
  const Icon = Icons[program.icon as keyof typeof Icons] as React.FC<{ size?: number; className?: string }>

  // Nomor WhatsApp utama
  const WHATSAPP_NUMBER = '081213265482'
  const encodedText = encodeURIComponent(program.whatsappText || `Halo, saya tertarik dengan program ${program.title}`)
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`

  // Deteksi apakah layanan lembaga
  const isInstitutional =
    program.id === 'school-training' || program.id === 'extracurricular'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className={`relative rounded-xl overflow-hidden shadow-lg bg-white border border-slate-200 transition-all duration-500 
        ${isInstitutional ? 'mx-auto md:max-w-md hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]' : ''}
      `}
    >
      {/* Aksen gradien atas */}
      <div
        className={`h-2 ${
          isInstitutional
            ? 'bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500'
            : program.gradient
        }`}
      />

      <div className="p-6">
        {/* Ikon program */}
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
            isInstitutional
              ? 'bg-gradient-to-tr from-cyan-500 to-fuchsia-600 shadow-md shadow-cyan-400/30'
              : program.bgColor
          }`}
        >
          <Icon
            className={`${isInstitutional ? 'text-white' : program.color}`}
            size={32}
          />
        </div>

        {/* Judul & Deskripsi */}
        <h3
          className={`text-xl font-bold mb-2 ${
            isInstitutional ? 'text-gray-900' : 'text-dark'
          }`}
        >
          {program.title}
        </h3>
        <p
          className={`mb-4 ${
            isInstitutional ? 'text-slate-600' : 'text-slate-gray'
          }`}
        >
          {program.description}
        </p>

        {/* Target peserta */}
        <div
          className={`flex items-center text-sm mb-4 ${
            isInstitutional ? 'text-slate-500' : 'text-slate-gray'
          }`}
        >
          <Users size={16} className="mr-2" />
          <span>{program.targetAudience}</span>
        </div>

        {/* Tombol utama (WhatsApp) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center justify-center gap-2 w-full font-medium py-2 px-4 rounded-lg text-center transition-all duration-300 hover:shadow-md ${
            isInstitutional
              ? 'bg-gradient-to-r from-green-400 to-emerald-600 text-white hover:from-green-500 hover:to-emerald-700 shadow-[0_0_10px_rgba(16,185,129,0.3)]'
              : `${program.gradient} text-white hover:opacity-90`
          }`}
        >
          <MessageCircle
            size={18}
            className="transition-transform group-hover:scale-110"
          />
          {isInstitutional ? 'Hubungi Kami' : 'Daftar Sekarang'}
        </a>

        {/* Tombol Info Lebih Lanjut (khusus layanan lembaga) */}
        {isInstitutional && (
          <a
            href={`/layanan/${program.id}`}
            className="group flex items-center justify-center gap-2 w-full mt-3 font-medium py-2 px-4 rounded-lg text-center transition-all duration-300 text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 hover:shadow-[0_0_12px_rgba(59,130,246,0.4)]"
          >
            <Info
              size={18}
              className="transition-transform group-hover:scale-110"
            />
            Info Lebih Lanjut
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default ProgramCard


