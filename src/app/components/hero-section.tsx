import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="bg-[#e6f7f7] w-full">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="relative flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="relative w-full md:w-1/2">
            <div className="absolute top-[-20px] left-[-20px] w-[90%] h-[90%] bg-[#1e4d4d] z-0"></div>
            <div className="relative z-10 p-4">
            <Image
              src="/hero-image.jpg"
              alt="Wedding couple in traditional attire"
              width={200}
              height={200}
              className="w-full h-[450px] object-cover"
            />
          </div>
        </div>
        <div className="w-full space-y-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-light leading-tight text-black">
            La Couture Always Brings You the Next Level Wedding
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/consultation"
              className="lg:text-2xl bg-[#7FD4D4] text-white px-8 py-3 rounded-md hover:bg-[#6BC4C4] transition-colors text-center flex-1 w-full sm:w-auto"
            >
              Book a Consultation
            </Link>
            <Link
              href="/gallery"
              className="lg:text-2xl bg-[#7FD4D4] text-white px-8 py-3 rounded-md hover:bg-[#6BC4C4] transition-colors text-center flex-1 w-full sm:w-auto"
            >
              View Our Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

