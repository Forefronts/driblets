import Hero from "@/src/components/sections/Hero"
import Navbar from "@/src/components/layout/NavBar"
import About from "@/src/components/sections/About"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />

    </main>
  )
}