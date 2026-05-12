import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Teams from '@/components/Teams'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#111111] min-h-screen text-white overflow-hidden selection:bg-[#00AAFF]/30 selection:text-white">
      <Navbar />
      <div className="flex flex-col w-full">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Teams />
        <Gallery />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
