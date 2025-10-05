import { motion } from 'framer-motion'
import TestimonialCard from '@/components/ui/TestimonialCard'
import { TESTIMONIALS } from '@/constants/programs'

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-slate-gray max-w-2xl mx-auto">
            Testimoni dari peserta didik dan orang tua yang telah bergabung bersama
            kami
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection