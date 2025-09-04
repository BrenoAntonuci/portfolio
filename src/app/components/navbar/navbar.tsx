"use client"

import { useState } from "react"
import Link from "next/link"
import { ModeToggle } from "../theme/mode-toggle"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full shadow-md z-50 bg-background">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="font-bold text-xl">Breno Antonuci</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <Link href="#home" scroll={false}>Home</Link>
          </li>
          <li>
            <Link href="#about" scroll={false}>Sobre</Link>
          </li>
          <li>
            <Link href="#projects" scroll={false}>Projetos</Link>
          </li>
          <li>
            <Link href="#contact" scroll={false}>Contato</Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>

        {/* Mobile button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden shadow-lg">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <Link href="#home" scroll={false} onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" scroll={false} onClick={() => setIsOpen(false)}>
                Sobre
              </Link>
            </li>
            <li>
              <Link href="#projects" scroll={false} onClick={() => setIsOpen(false)}>
                Projetos
              </Link>
            </li>
            <li>
              <Link href="#contact" scroll={false} onClick={() => setIsOpen(false)}>
                Contato
              </Link>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
