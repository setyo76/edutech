import Navbar from "../components/layout/Navbar"; 
import Footer from "../components/layout/Footer";
import WhatsAppFloat from "../components/layout/WhatsAppFloat";
import HeroSection from '@/components/home/HeroSection' 
import ContactSection from '@/components/home/ContactSection'
import MaterialsSection from "@/components/home/ProgramsSection";
import ProgramsSection from "@/components/home/MaterialsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AboutSection from "@/components/home/AboutSection";  

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProgramsSection />
        <MaterialsSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default Home