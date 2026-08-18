import { ArrowDown, ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <section className="relative flex min-h-screen overflow-hidden bg-[#0c0e16]">

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-360 flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-[42px] font-medium leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-[68px]">
            The Point of Sale System for
            <br className="hidden sm:block" />
            <span> Growing Businesses</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-white/65 md:text-base">
            Driblets POS helps businesses manage sales, inventory, customers,
            and reports in one easy-to-use platform. Built for speed,
            simplicity, and growth, it gives you everything you need to run
            your business smarter.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="#platform"
              className="group flex items-center gap-4 rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:bg-white/15"
            >
              Start Your Journey

              <ArrowRight
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        <a
          href="#platform"
          className="absolute bottom-8 flex items-center gap-2 text-xs text-white/70 transition hover:text-white"
        >
          Scroll down
          <ArrowDown size={14} strokeWidth={1.7} />
        </a>
      </div>
    </section>
  )
}

export default Hero