import {
  ChartNoAxesCombined,
  CircleDollarSign,
  PackageSearch,
  SlidersHorizontal,
  Users,
} from "lucide-react"

const features = [
  {
    title: "Sales Management",
    description:
      "Process transactions quickly and accurately with a smooth checkout experience. Manage payments, discounts, receipts, and daily sales from one easy interface.",
    icon: CircleDollarSign,
    className: "lg:col-span-3",
  },
  {
    title: "Inventory Control",
    description:
      "Track stock levels in real time, monitor product movement, and reduce inventory errors. Stay updated on available products and restocking needs.",
    icon: PackageSearch,
    className: "lg:col-span-3",
  },
  {
    title: "Reports & Analytics",
    description:
      "Access clear sales reports and performance insights to understand trends, track revenue, and make informed business decisions faster.",
    icon: ChartNoAxesCombined,
    className: "lg:col-span-2",
  },
  {
    title: "Customer Management",
    description:
      "Store customer details, monitor purchase history, and build stronger relationships through better service and personalized experiences.",
    icon: Users,
    className: "lg:col-span-2",
  },
  {
    title: "Customizable System",
    description:
      "Adapt Driblets POS to fit your workflow with flexible settings, categories, product organization, and business-specific preferences.",
    icon: SlidersHorizontal,
    className: "lg:col-span-2",
  },
]

const Features = () => {
  return (
    <section
      id="features"
      className="bg-[#111d29] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-360">
        {/* Section Header */}
        <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-20">
          <div>
            <p className="mb-4 text-lg font-medium text-cyan-800">
              Features
            </p>

            <h2 className="max-w-lg text-3xl font-medium leading-[1.1] tracking-[-0.03em] text-white sm:text-4xl lg:text-[44px]">
              Everything you need,
              <br />
              in one POS
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-md text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
              Driblets POS gives you the essential tools to manage operations,
              improve efficiency, and grow your business with confidence.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <article
                key={feature.title}
                className={`
                  group rounded-2xl border border-white/5
                  bg-[#24313d] p-6
                  transition-all duration-300
                  hover:-translate-y-1 hover:bg-[#2a3946]
                  sm:p-7 lg:min-h-60
                  ${feature.className}
                `}
              >
                {/* Icon */}
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#17374a]">
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="mb-3 text-lg font-medium tracking-tight text-white">
                    {feature.title}
                  </h3>

                  <p className="max-w-xl text-sm leading-6 text-white/60">
                    {feature.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features