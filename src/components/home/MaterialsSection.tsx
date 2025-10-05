import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import MaterialCard from '@/components/ui/MaterialCard'
import { MATERIALS, WHATSAPP_BASE_URL } from '@/constants/programs'

const MaterialsSection = () => {
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=Halo,%20saya%20mau%20bertanya%20tentang%20materi%20gratis`

  return (
    <section id="materials" className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Materi & Soal Gratis
          </h2>
          <p className="text-slate-gray max-w-2xl mx-auto">
            Akses berbagai materi pembelajaran dan soal latihan berkualitas untuk
            meningkatkan pemahaman
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MATERIALS.map((material, index) => (
            <MaterialCard key={material.id} material={material} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-vivid hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg inline-flex items-center transition"
          >
            <MessageCircle size={20} className="mr-2" />
            Konsultasi materi via WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default MaterialsSection