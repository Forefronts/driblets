import GradientWaves from "@/src/components/GradientWaves"
import Hero from "@/src/components/sections/Hero"
import Navbar from "@/src/components/layout/NavBar"

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* <Navbar /> */}

      <section className="relative min-h-screen w-full overflow-hidden bg-[#120F17]">
        <GradientWaves
          className="absolute inset-0 z-0 h-full w-full"
          horizonColor="#499fc4"
          waveColor="#0a76a5"
          crestColor="#449abf"
          speed={0.4}
          amplitude={2.5}
          waveScale={0.6}
          waveRatio={0.9}
          swell={35}
          turbulence={20}
          tilt={1.11}
          zoom={1}
          height={5.5}
          fogDepth={15}
          detail="medium"
          brightness={1}
          opacity={1}
          mouseInteraction
          parallaxStrength={0.5}
          grain
          grainIntensity={0.05}
        />
      </section>
    </main>
  )
}