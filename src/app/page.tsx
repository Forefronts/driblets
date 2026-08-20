import Hero from "@/src/components/sections/Hero"
import Navbar from "@/src/components/layout/NavBar"
import About from "@/src/components/sections/About"
import Features from "@/src/components/sections/Features"
import ProductShowcase from "@/src/components/sections/ProductShowcase"
import Testimonials from "@/src/components/sections/Testimonials"
import Footer from "@/src/components/layout/Footer"


export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <ProductShowcase />
      <Testimonials />
      <Footer />

    </main>
  )
}