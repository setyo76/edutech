import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  // Fallback image berdasarkan nama agar tetap konsisten tampil
  const getFallbackImage = (name: string) => {
    if (name.toLowerCase().includes('siti')) {
      return 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80' // ibu oriental tersenyum lembut
    }
    if (name.toLowerCase().includes('rina')) {
      return 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' // ibu indonesia elegan
    }
    if (name.toLowerCase().includes('budi')) {
      return 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=600&q=80' // remaja laki-laki 15 tahun
    }
    return testimonial.image
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-light-gray rounded-xl p-6 shadow-md hover:shadow-lg transition"
    >
      <div className="flex items-center mb-4">
        <img
          src={getFallbackImage(testimonial.name)}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4 border border-white shadow-sm"
        />
        <div>
          <h4 className="font-bold text-dark">{testimonial.name}</h4>
          <div className="flex text-yellow-400">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-slate-gray italic">"{testimonial.text}"</p>
    </motion.div>
  )
}

export default TestimonialCard
