import Link from "next/link"
import { ModeToggle } from "../theme/mode-toggle"

export default function Navbar() {
    return (
        <nav>
            <div className="container mx-auto flex justify-between items-center p-4">
                <h1 className="font-bold text-xl">Breno Antonuci</h1>
                <ul className="flex gap-6 items-center">
                    <li>
                        <Link href="#home">Home</Link>
                    </li>
                    <li>
                        <Link href="#about">Sobre</Link>
                    </li>
                    <li>
                        <Link href="#projects">Projetos</Link>
                    </li>
                    <li>
                        <Link href="#contact">Contato</Link>
                    </li>
                    <li>
                        <ModeToggle />
                    </li>
                </ul>
            </div>
        </nav>
    )
}
