"use client"

import { Quote } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    quote:
      "Driblets has made managing our daily operations much easier. Sales, inventory, and customer information are all in one place, which saves us time and helps us stay organized.",
    name: "John Doe",
    role: "Cafe Owner",
    initials: "JD",
  },
  {
    id: 2,
    quote:
      "The system is simple to use and gives us the information we need without making things complicated. Tracking our products and daily sales has become much more efficient.",
    name: "Claire John",
    role: "Laundry Shop Owner",
    initials: "CJ",
  },
  {
    id: 3,
    quote:
      "Driblets gives us better visibility over our business. We can quickly review sales, monitor inventory, and make better decisions based on real information.",
    name: "John Doe",
    role: "Cafe Owner",
    initials: "JD",
  },
]

const sliderPages = [0, 1, 2, 3]

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <section
      id="testimonials"
      className="bg-white px-5 py-20 lg:py-28"
    >
      {/* Heading */}
      <div className="mb-12 text-center">
        <p className="mb-3 text-lg font-medium text-cyan-900">
          Trusted by businesses
        </p>

        <h2 className="text-3xl font-medium tracking-[-0.03em] text-neutral-900 sm:text-4xl">
          What our clients say
        </h2>
      </div>

      {/* Testimonials */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.id}
            className="flex min-h-65 flex-col rounded-2xl bg-[#17384a] p-6 text-white transition-transform duration-300 hover:-translate-y-1 sm:p-7"
          >

            <Quote
              size={34}
              strokeWidth={1.5}
              className="mb-5 fill-white text-white"
            />


            <p className="text-sm leading-6 text-white/80">
              {testimonial.quote}
            </p>


            <div className="mt-auto flex items-center gap-3 pt-8">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs font-semibold text-white">
                {testimonial.initials}
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  {testimonial.name}
                </p>

                <p className="text-xs text-white/50">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>


      <div
        className="mt-10 flex items-center justify-center gap-2"
        aria-label="Testimonial slider"
      >
        {sliderPages.map((slide) => (
          <button
            key={slide}
            type="button"
            aria-label={`Go to testimonial slide ${slide + 1}`}
            aria-current={activeSlide === slide ? "true" : undefined}
            onClick={() => setActiveSlide(slide)}
            className={`
              h-2 rounded-full transition-all duration-300
              ${
                activeSlide === slide
                  ? "w-6 bg-cyan-900"
                  : "w-2 bg-neutral-300 hover:bg-neutral-400"
              }
            `}
          />
        ))}
      </div>
    </section>
  )
}

export default Testimonials