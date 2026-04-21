import Preloader from '@/components/Preloader'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Insights from '@/components/Insights'
import Teams from '@/components/Teams'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import Careers from '@/components/Careers'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="relative bg-background">
      <Preloader />
      <Navbar />
      <Hero />
      <Services />
      <Insights />
      <Teams />
      <Gallery />
      <About />
      <Careers />
      <Contact />
      <Footer />
      <Testimonials />
      
      <footer className="bg-[#0a0a0a] py-8 text-center border-t border-gray-900">
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} EntryLab. Where Every Search Has a Value</p>
      </footer>
    </main>
  )
}
