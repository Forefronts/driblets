import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

const benefits = [
  "Fast and reliable checkout",
  "Real-time inventory tracking",
  "Sales reports and business insights",
]

const ProductShowcase = () => {
  return (
    <section
      id="solutions"
      className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-360">
        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          <div className="max-w-xl">
            <p className="mb-4 text-lg font-medium text-cyan-900">
              Powerful & Easy
            </p>

            <h2 className="text-3xl font-medium leading-[1.1] tracking-[-0.03em] text-neutral-900 sm:text-4xl lg:text-[46px]">
              A POS that works
              <br className="hidden sm:block" />
              {" "}the way you do
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
              Driblets POS is built to support the way modern businesses
              operate. From daily checkout to inventory tracking and reporting,
              the system helps you save time, reduce manual work, and stay in
              control.
            </p>


            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3 text-sm font-medium text-neutral-800 sm:text-base"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-900 text-white">
                    <Check size={14} strokeWidth={2.2} />
                  </span>

                  {benefit}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#get-started"
              className="group mt-10 inline-flex items-center gap-3 text-sm font-medium text-cyan-900 transition-colors hover:text-cyan-700 sm:text-base"
            >
              View Demo

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="relative">
            <Image
              src="/pos-mock.png"
              alt="Driblets POS dashboard displayed on laptop and mobile devices"
              width={1100}
              height={720}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase