import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-360 items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden">
            <Image
              src="/logo.png"
              alt="Driblets logo"
              fill
              className="rounded-full object-cover"
            />
          </div>

          <span className="text-xl font-semibold tracking-tight text-white">
            driblets
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="#platform"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Platform
          </Link>

          <Link
            href="#features"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Features
          </Link>

          <Link
            href="#solutions"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Solutions
          </Link>

          <Link
            href="#services"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Services
          </Link>
        </nav>

        <Link
          href="#get-started"
          className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10"
        >
          Get Started
        </Link>
      </div>
    </header>
  )
}

export default Navbar