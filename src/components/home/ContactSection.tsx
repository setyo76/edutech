import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { MessageCircle } from 'lucide-react'
import * as Icons from 'lucide-react'
import { CONTACT_INFO, WHATSAPP_BASE_URL } from '@/constants/programs'
import { FormData } from '@/types'

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    const message = `Halo,%20saya%20mau%20bertanya%20tentang%20program%20EduTech%0A%0ANama:%20${encodeURIComponent(
      data.name
    )}%0AEmail:%20${encodeURIComponent(data.email)}%0APesan:%20${encodeURIComponent(
      data.message
    )}`
    window.open(`${WHATSAPP_BASE_URL}?text=${message}`, '_blank')
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Hubungi Kami
          </h2>
          <p className="text-slate-gray max-w-2xl mx-auto">
            Ada pertanyaan? Silakan hubungi kami untuk informasi lebih lanjut
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-light-gray rounded-xl shadow-lg p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-bold text-dark mb-4">
                  Informasi Kontak
                </h3>
                <div className="space-y-4">
                  {CONTACT_INFO.map((contact, index) => {
                    const Icon = Icons[contact.icon as keyof typeof Icons] as React.FC<{
                      size?: number
                      className?: string
                    }>
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <div
                          className={`w-10 h-10 rounded-full ${contact.bgColor} flex items-center justify-center mr-4`}
                        >
                          <Icon className={contact.color} size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-dark">{contact.label}</h4>
                          <p className="text-slate-gray">{contact.value}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-xl font-bold text-dark mb-4">Kirim Pesan</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-slate-gray mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Nama wajib diisi' })}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-vivid ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-slate-gray mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', {
                        required: 'Email wajib diisi',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email tidak valid',
                        },
                      })}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-vivid ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="block text-slate-gray mb-2">
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register('message', { required: 'Pesan wajib diisi' })}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-vivid ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-vivid hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition inline-flex items-center justify-center"
                  >
                    <MessageCircle size={20} className="mr-2" />
                    Kirim via WhatsApp
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection