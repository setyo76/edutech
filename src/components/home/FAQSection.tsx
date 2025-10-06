import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    question: 'Apa itu Edutech?',
    answer:
      'Edutech adalah platform pembelajaran digital yang menyediakan materi, latihan soal, dan konsultasi untuk berbagai jenjang pendidikan secara gratis dan interaktif.',
  },
  {
    question: 'Apakah semua materi gratis?',
    answer:
      'Ya! Semua materi dasar dapat diakses secara gratis. Kami juga menyediakan paket premium untuk fitur lanjutan seperti analisis hasil belajar dan kelas live.',
  },
  {
    question: 'Bagaimana cara bergabung?',
    answer:
      'Kamu hanya perlu mendaftar dengan email aktif, lalu bisa langsung mengakses berbagai materi sesuai jenjangmu. Tidak ada biaya tersembunyi!',
  },
  {
    question: 'Apakah tersedia versi mobile?',
    answer:
      'Tentu! Website ini dirancang responsif dan bisa diakses lewat HP, tablet, maupun laptop tanpa perlu instal aplikasi tambahan.',
  },
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
      {/* Background pola puzzle lembut */}
      <div className="absolute inset-0 opacity-10 grid grid-cols-6 gap-2 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={i}
            className={`bg-white rounded-[30%] ${
              i % 2 === 0 ? 'rounded-tr-none rounded-bl-none' : 'rounded-tl-none rounded-br-none'
            }`}
          ></div>
        ))}
      </div>

      <div className="relative container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-dark mb-12"
        >
          Pertanyaan yang Sering Diajukan
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => {
            const isActive = activeIndex === index
            return (
              <motion.div
                key={index}
                layout
                initial={{ borderRadius: 20 }}
                className={`group relative bg-white shadow-md overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isActive ? 'border-blue-500 shadow-lg scale-[1.02]' : 'border-transparent hover:shadow-lg'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                {/* Puzzle connector efek */}
                <div
                  className={`absolute -top-2 left-8 w-8 h-4 bg-blue-300 rounded-b-full transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                ></div>

                <div className="p-5 md:p-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-dark pr-4">{faq.question}</h3>
                  <motion.div
                    initial={false}
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isActive ? (
                      <Minus className="text-blue-500" size={20} />
                    ) : (
                      <Plus className="text-blue-500" size={20} />
                    )}
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="px-5 md:px-6 pb-5 text-slate-gray leading-relaxed bg-blue-50/50 border-t"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
