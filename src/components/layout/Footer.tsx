import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram } from "react-icons/fa"

const productLinks = [
  "POS Features",
  "Inventory Management",
  "Sales Reports",
  "Customer Management",
]

const solutionLinks = [
  "Retail Stores",
  "Cafes",
  "Restaurants",
  "Small Businesses",
  "Growing Businesses",
]

const supportLinks = [
  "Help Center",
  "FAQs",
  "Contact Support",
  "Documentation",
  "System Status",
]

const companyLinks = [
  "About Driblets",
  "Pricing",
  "Contact",
  "Privacy Policy",
  "Terms of Service",
]

const Footer = () => {
  return (
    <footer className="bg-[#0c111b] px-5 pb-8 pt-16 text-white lg:pt-20">
      {/* Main Footer */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] lg:gap-10">
        {/* Brand */}
        <div className="max-w-sm">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="relative h-10 w-10">
              <Image
                src="/logo.png"
                alt="Driblets logo"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>

            <span className="text-3xl font-medium tracking-tight">
              driblets
            </span>
          </Link>

          <p className="mt-7 max-w-xs text-sm leading-6 text-white/60">
            Your go-to point of sale system for smarter sales, inventory
            control, customer management, and business growth.
          </p>

          {/* Socials */}
          <div className="mt-6 flex items-center gap-4">
            <Link
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-sm font-semibold text-white/60 transition hover:border-white/30 hover:text-white"
            >
              <FaFacebookF />
            </Link>

            <Link
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-white/30 hover:text-white"
            >
              <FaInstagram size={17} strokeWidth={1.8} />
            </Link>
          </div>
        </div>

        {/* Product */}
        <FooterColumn
          title="Product"
          links={productLinks}
        />

        {/* Solutions */}
        <FooterColumn
          title="Solutions"
          links={solutionLinks}
        />

        {/* Support */}
        <FooterColumn
          title="Support"
          links={supportLinks}
        />

        {/* Company */}
        <FooterColumn
          title="Company"
          links={companyLinks}
        />
      </div>

      {/* Bottom */}
      <div className="mt-16 border-t border-white/10 pt-6 text-center lg:mt-24">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Driblets. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string
  links: string[]
}

const FooterColumn = ({
  title,
  links,
}: FooterColumnProps) => {
  return (
    <div>
      <h3 className="mb-5 text-base font-medium text-white">
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link}>
            <Link
              href="#"
              className="text-sm text-white/55 transition-colors hover:text-white"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Footer