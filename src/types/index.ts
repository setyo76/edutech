export interface Program {
  id: string
  title: string
  description: string
  icon: string
  gradient: string
  bgColor: string
  color: string
  targetAudience: string
  whatsappText: string
}

export interface Material {
  id: string
  level: string
  icon: string
  bgColor: string
  color: string
  items: string[]
}

export interface Testimonial {
  id: string
  name: string
  image: string
  rating: number
  text: string
}

export interface ContactInfo {
  icon: string
  label: string
  value: string
  bgColor: string
  color: string
}

export interface WhyChooseUs {
  icon: string
  title: string
  description: string
  bgColor: string
  color: string
}

export interface FormData {
  name: string
  email: string
  message: string
}