"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`
          w-full border-b transition-all duration-300
          ${
            scrolled || mobileMenuOpen
              ? "border-white/10 bg-[#0c0e16]/85 shadow-sm backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }
        `}
      >

        <div className="grid h-18 w-full grid-cols-[1fr_auto] items-center px-5 md:px-10 md:grid-cols-[1fr_auto_1fr]">

          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex w-fit items-center gap-2"
          >
            <div className="relative h-8 w-8 shrink-0">
              <Image
                src="/logo.png"
                alt="Driblets logo"
                fill
                sizes="32px"
                className="object-contain"
                priority
              />
            </div>

            <span className="text-xl font-medium tracking-tight text-white">
              driblets
            </span>
          </Link>

          <nav className="hidden items-center justify-center gap-8 md:flex lg:gap-10">
            <Link
              href="#platform"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Platform
            </Link>

            <Link
              href="#features"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Features
            </Link>

            <Link
              href="#solutions"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Solutions
            </Link>

            <Link
              href="#services"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Services
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center justify-end gap-2">
            <Link
              href="#get-started"
              className="hidden items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10 sm:inline-flex"
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
            >
              {mobileMenuOpen ? (
                <X size={20} strokeWidth={1.8} />
              ) : (
                <Menu size={20} strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-white/10 md:hidden"
          >
            <nav className="flex w-full flex-col px-5 py-5">
              <Link
                href="#platform"
                onClick={closeMobileMenu}
                className="border-b border-white/10 py-4 text-sm font-medium text-white/75 transition-colors hover:text-white"
              >
                Platform
              </Link>

              <Link
                href="#features"
                onClick={closeMobileMenu}
                className="border-b border-white/10 py-4 text-sm font-medium text-white/75 transition-colors hover:text-white"
              >
                Features
              </Link>

              <Link
                href="#solutions"
                onClick={closeMobileMenu}
                className="border-b border-white/10 py-4 text-sm font-medium text-white/75 transition-colors hover:text-white"
              >
                Solutions
              </Link>

              <Link
                href="#services"
                onClick={closeMobileMenu}
                className="py-4 text-sm font-medium text-white/75 transition-colors hover:text-white"
              >
                Services
              </Link>

              <Link
                href="#get-started"
                onClick={closeMobileMenu}
                className="mt-3 flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/15 sm:hidden"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar