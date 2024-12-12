'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden'
  }

  return (
    <header className="fixed top-0 w-full bg-white p-4 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="#" className="flex items-center gap-4">
          <div className="w-[35px] h-[35px]">
            <Image src="/imgAttachment/IconoTresNegro.png" alt="Tres Arquitectura Logo" width={35} height={35} />
          </div>
        </Link>
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'} text-2xl`}></i>
        </div>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent`}>
          <ul className="flex flex-col md:flex-row items-center gap-8 p-4 md:p-0">
            <li><Link href="#servicios" className="text-gray-600 hover:text-black font-bold">Servicios</Link></li>
            <li><Link href="#proyectos" className="text-gray-600 hover:text-black font-bold">Proyectos</Link></li>
            <li><Link href="#nosotros" className="text-gray-600 hover:text-black font-bold">Nosotros</Link></li>
            <li><Link href="#contacto" className="text-gray-600 hover:text-black font-bold">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

