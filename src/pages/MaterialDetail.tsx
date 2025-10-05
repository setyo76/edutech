import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, BarChart, CheckCircle, MessageCircle } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import { MATERIALS_DETAIL } from '@/constants/materialsDetail'
import { WHATSAPP_BASE_URL } from '@/constants/programs'

const MaterialDetail = () => {
  const { level } = useParams<{ level: string }>()
  const materialData = level ? MATERIALS_DETAIL[level] : null

  if (!materialData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark mb-4">Materi Tidak Ditemukan</h1>
          <Link to="/" className="text-blue-vivid hover:underline">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    )
  }

  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=Halo,%20saya%20tertarik%20dengan%20materi%20${materialData.level}`

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/#materials"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition"
            >
              <ArrowLeft size={20} className="mr-2" />
              Kembali ke Beranda
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Materi {materialData.level}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {materialData.levelDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Materials List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {materialData.materials.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-light-gray rounded-xl p-6 md:p-8 shadow-lg"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-dark mb-3">
                      {material.title}
                    </h2>
                    <p className="text-slate-gray text-lg mb-4">
                      {material.description}
                    </p>
                  </div>
                  <div className="flex gap-3 flex-shrink-0">
                    <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                      <Clock size={18} className="text-blue-vivid mr-2" />
                      <span className="text-sm font-medium text-slate-gray">
                        {material.duration}
                      </span>
                    </div>
                    <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                      <BarChart size={18} className="text-purple-modern mr-2" />
                      <span className="text-sm font-medium text-slate-gray">
                        {material.level}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Topics */}
                  <div>
                    <h3 className="text-lg font-bold text-dark mb-3 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                        <CheckCircle className="text-blue-vivid" size={18} />
                      </div>
                      Materi yang Dipelajari
                    </h3>
                    <ul className="space-y-2">
                      {material.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle
                            className="text-green-fresh mt-1 mr-2 flex-shrink-0"
                            size={18}
                          />
                          <span className="text-slate-gray">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-lg font-bold text-dark mb-3 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                        <CheckCircle className="text-purple-modern" size={18} />
                      </div>
                      Manfaat Program
                    </h3>
                    <ul className="space-y-2">
                      {material.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle
                            className="text-green-fresh mt-1 mr-2 flex-shrink-0"
                            size={18}
                          />
                          <span className="text-slate-gray">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6 pt-6 border-t border-gray-300">
                  <motion.a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center bg-green-fresh hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition"
                  >
                    <MessageCircle size={20} className="mr-2" />
                    Daftar {material.title}
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-gradient-primary text-white rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Siap Memulai Perjalanan Belajar?
            </h2>
            <p className="text-lg mb-6 text-white/90">
              Hubungi kami sekarang untuk informasi lebih lanjut dan pendaftaran
            </p>
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-white text-blue-vivid hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition"
            >
              <MessageCircle size={20} className="mr-2" />
              Hubungi Kami via WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default MaterialDetail