import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <main className="bg-[#111111] min-h-screen text-white overflow-hidden selection:bg-[#00AAFF]/30 selection:text-white">
      <Navbar />
      <div className="flex flex-col w-full">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
