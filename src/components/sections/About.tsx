import Image from "next/image"
import { ArrowRight } from "lucide-react"

const About = () => {
  return (
    <section
      id="platform"
      className="bg-white px-5 py-15 sm:px-8 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-360">
        <div className="mx-auto mb-16 max-w-4xl text-center lg:mb-20">
          <p className="mb-4 text-lg font-medium text-cyan-900">
            Modern POS Software
          </p>

          <h2 className="text-3xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Everything you need to run your business with one powerful POS system
          </h2>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/droplets.png"
              alt="Water droplets representing Driblets"
              width={720}
              height={470}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div className="flex flex-col items-start">
            <p className="mb-5 text-lg font-medium text-cyan-900">
              About Driblets
            </p>

            <h3 className="max-w-xl text-2xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl">
              A point of sale system built for speed, control, and growth
            </h3>

            <p className="mt-6 max-w-xl text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
              Driblets POS is designed to help business owners manage
              transactions, products, stock, and customer activity from one
              centralized system. Whether you run a small shop or a growing
              business, Driblets gives you the tools to stay organized,
              improve service, and make better decisions.
            </p>

            <div className="my-8 w-full border-t border-neutral-200" />

            <button
              type="button"
              className="group flex items-center gap-3 text-sm font-medium text-cyan-900 transition-colors duration-300 hover:text-cyan-700 sm:text-base"
            >
              Learn More

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About