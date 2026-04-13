'use client'

import Image from 'next/image'

const navItemsColumn1 = ['Home', 'Services', 'Insights', 'Teams']
const navItemsColumn2 = ['Gallery', 'About', 'Careers', 'Contact']

export default function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-900 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        
        {/* LEFT: Logo */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollTo('home')}>
          <Image src="https://iili.io/FC3KC6g.png" alt="EntryLab" width={140} height={45} />
          <p className="text-gray-500 text-sm mt-4 text-center md:text-left">
            Where Every Search Has a Value.
          </p>
        </div>

        {/* CENTER: 2-Column Menu */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-center md:text-left">
          <div className="flex flex-col space-y-3">
            {navItemsColumn1.map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="text-gray-400 hover:text-[#19b2ff] transition-colors text-sm font-medium w-fit">
                {item}
              </button>
            ))}
          </div>
          <div className="flex flex-col space-y-3">
            {navItemsColumn2.map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="text-gray-400 hover:text-[#19b2ff] transition-colors text-sm font-medium w-fit">
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Social Icons */}
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-[#19b2ff] transition-colors text-2xl">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-[#19b2ff] transition-colors text-2xl">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-[#19b2ff] transition-colors text-2xl">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-12 pt-6 border-t border-gray-900/50 text-center text-gray-600 text-xs">
        © {new Date().getFullYear()} EntryLab. All rights reserved.
      </div>
    </footer>
  )
}
