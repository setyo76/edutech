import { motion } from 'framer-motion'
import { CheckCircle, MessageCircle } from 'lucide-react'
import * as Icons from 'lucide-react'
import { WHY_CHOOSE_US, WHATSAPP_BASE_URL } from '@/constants/programs'

const AboutSection = () => {
  const companyInfo = [
    'Berdiri sejak tahun 2011',
    'NIB: 9120101290169',
    'Legalitas terjamin',
  ]

  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=Halo,%20saya%20mau%20bertanya%20tentang%20Indonesia%20Training%20Center`

  return (
    <section id="about" className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Tentang Edu Tech
            </h2>
            <p className="text-slate-gray mb-6">
              Edu Tech berada di naungan perusahaan Indonesia Training Center,sebuah perusahaan yang bergerak dalam
              bidang Pengembangan Sumber Daya Manusia (SDM) baik yang bersifat
              perorangan maupun korporasi/lembaga.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-4 mb-6 shadow-sm"
            >
              {companyInfo.map((info, index) => (
                <div key={index} className="flex items-center mb-2 last:mb-0">
                  <CheckCircle className="text-green-fresh mr-2 flex-shrink-0" size={20} />
                  <span className="text-slate-gray">{info}</span>
                </div>
              ))}
            </motion.div>

            <p className="text-slate-gray mb-6">
              Dengan pengalaman lebih dari 20 tahun, kami telah membantu ribuan
              SDM Indonesia mengembangkan potensi diri dan mencapai prestasi
              terbaiknya.
            </p>

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-vivid hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg inline-flex items-center transition"
            >
              <MessageCircle size={20} className="mr-2" />
              Hubungi Kami
            </motion.a>
          </motion.div>

          {/* Right Content - Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-dark mb-4">
                Mengapa Memilih Kami?
              </h3>
              <div className="space-y-4">
                {WHY_CHOOSE_US.map((item, index) => {
                  const Icon = Icons[item.icon as keyof typeof Icons] as React.FC<{
                    size?: number
                    className?: string
                  }>
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div
                        className={`w-10 h-10 rounded-full ${item.bgColor} flex items-center justify-center mr-4 flex-shrink-0`}
                      >
                        <Icon className={item.color} size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-dark">{item.title}</h4>
                        <p className="text-slate-gray">{item.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
