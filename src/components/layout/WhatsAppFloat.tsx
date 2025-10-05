import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_BASE_URL } from '@/constants/programs'

const WhatsAppFloat = () => {
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=Halo,%20saya%20tertarik%20dengan%20program%20EduTech`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 w-16 h-16 bg-[#25d366] hover:bg-[#128C7E] text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={32} />
    </motion.a>
  )
}

export default WhatsAppFloat