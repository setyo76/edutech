import { motion } from 'framer-motion';
import { MessageCircle, Bot, Code } from 'lucide-react';
import { WHATSAPP_BASE_URL } from '@/constants/programs';

const HeroSection = () => {
  const badges = ['Robotics', 'Coding', 'Design', 'Matematika'];
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=Halo,%20saya%20tertarik%20dengan%20program%20EduTech`;

  // Bintang luar
  const stars = Array.from({ length: 12 }).map((_,) => {
    const baseSize = Math.random() * 6 + 4;
    const sizeMultiplier = [1, 4, 12][Math.floor(Math.random() * 3)];
    return {
      x: Math.random() * 400 - 200,
      y: Math.random() * 400 - 200,
      size: baseSize * sizeMultiplier,
      delay: Math.random() * 2,
    };
  });

  return (
    <section id='home' className='gradient-primary text-white py-20 md:py-32 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center'>
          {/* === LEFT CONTENT === */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='md:w-1/2 mb-10 md:mb-0 md:pl-12'
          >
            <motion.h1 className='text-4xl md:text-5xl font-extrabold mb-4 pb-2 bg-gradient-to-r from-white via-orange to-yellow-500 bg-clip-text text-transparent animate-gradient'>
              Dari Nol Sampai Jago!
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='flex flex-wrap gap-2 mb-6'
            >
              {badges.map((badge, index) => (
                <motion.span
                  key={badge}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className='bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm backdrop-blur-sm'
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className='text-xl mb-8'
            >
              Kembangkan Potensi Maksimal Anak Anda di Era Digital. Belajar
              Online atau Offline dengan Mentor Berpengalaman.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className='flex flex-col sm:flex-row gap-4'
            >
              <motion.a
                href={whatsappUrl}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-orange-energetic hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg text-center transition inline-flex items-center justify-center'
              >
                <MessageCircle size={20} className='mr-2' />
                Daftar Sekarang
              </motion.a>
              <motion.a
                href='#programs'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium py-3 px-6 rounded-lg text-center transition backdrop-blur-sm'
              >
                Lihat Program
              </motion.a>
            </motion.div>
          </motion.div>

          {/* === RIGHT: VIDEO + BINTANG === */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='md:w-1/2 flex justify-center relative'
          >
            <div className='relative'>
              {/* Bintang Futuristik */}
              {stars.map((star, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{
                    duration: 2.5,
                    delay: star.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className='absolute rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 blur-sm shadow-lg'
                  style={{
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    top: `calc(50% + ${star.y}px)`,
                    left: `calc(50% + ${star.x}px)`,
                  }}
                />
              ))}

              {/* Lingkaran Video - statis, tidak berputar */}
              <div
                className='w-64 h-64 md:w-80 md:h-80 rounded-full bg-white bg-opacity-10 flex items-center justify-center backdrop-blur-md overflow-hidden border border-white/20 shadow-[0_0_30px_rgba(255,200,0,0.5)]'
              >
                <video
                  src='/Arduino.mp4'
                  autoPlay
                  loop
                  muted
                  playsInline
                  className='w-full h-full object-cover rounded-full'
                />
              </div>

              {/* Ikon Futuristik */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                whileHover={{ scale: 1.1 }}
                className='absolute -top-4 -right-4 bg-green-fresh text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg'
              >
                <Bot size={32} />
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                whileHover={{ scale: 1.1 }}
                className='absolute -bottom-4 -left-4 bg-purple-modern text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg'
              >
                <Code size={32} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

