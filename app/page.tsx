import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Teams from '@/components/Teams'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#111111] min-h-screen text-white overflow-hidden selection:bg-[#00AAFF]/30 selection:text-white">
      <Navbar />
      <div className="flex flex-col w-full">
        <Hero />
        <About />
        <Services />
        <Teams />
        <Gallery />
        <Testimonials />
      </div>
      <Footer />
    </main>
  )
}
