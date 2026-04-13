// components/Contact.tsx
'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#141414] border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto bg-[#1a1a1a] p-10 rounded-2xl border border-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <input type="text" placeholder="Name" className="w-full bg-[#111] border border-gray-700 p-4 rounded text-white focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <input type="email" placeholder="Email" className="w-full bg-[#111] border border-gray-700 p-4 rounded text-white focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <textarea placeholder="Message" rows={4} className="w-full bg-[#111] border border-gray-700 p-4 rounded text-white focus:outline-none focus:border-primary transition-colors"></textarea>
            </div>
            <button type="button" className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
