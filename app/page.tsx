import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Insights from '@/components/Insights'
import Testimonials from '@/components/Testimonials'
import Teams from '@/components/Teams'
import Gallery from '@/components/Gallery'
import Careers from '@/components/Careers'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#111111] min-h-screen text-white overflow-hidden selection:bg-[#00AAFF]/30 selection:text-white">
      <Navbar />

      <div className="flex flex-col w-full">
        <Hero />          {/* id="home" */}
        <About />         {/* id="about" */}
        <Services />      {/* id="services" */}
        <Insights />      {/* id="insights" */}
        <Testimonials />  {/* id="testimonials" */}
        <Teams />         {/* id="teams" */}
        <Gallery />       {/* id="gallery" */}
        <Careers />       {/* id="careers" */}
        <Contact />       {/* id="contact" */}
      </div>

      <Footer />
    </main>
  )
}
