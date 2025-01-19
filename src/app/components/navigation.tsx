import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-white border-b text-black">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl italic font-light">
            La Couture
          </Link>
          <div className="hidden md:flex items-center space-x-8 lg:text-xl">
            <Link href="/">Home</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/contact" className="bg-[#00BACB] text-white px-10 py-2 rounded-md">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

