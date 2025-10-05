import { motion } from 'framer-motion'
import ProgramCard from '@/components/ui/ProgramCard'
import { PROGRAMS } from '@/constants/programs'

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Program Unggulan Kami
          </h2>
          <p className="text-slate-gray max-w-2xl mx-auto">
            Pilih program yang sesuai dengan minat dan kebutuhan belajar anak Anda
          </p>
        </motion.div>

        {/* Grid Section with centered animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center place-items-center max-w-6xl mx-auto"
        >
          {PROGRAMS.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="w-full flex justify-center"
            >
              <ProgramCard program={program} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProgramsSection
