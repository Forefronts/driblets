import Hero from "@/src/components/sections/Hero"
import Navbar from "@/src/components/layout/NavBar"

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />

      <section className="mx-auto max-w-360 px-5 py-20 text-center">

      </section>
    </main>
  )
}