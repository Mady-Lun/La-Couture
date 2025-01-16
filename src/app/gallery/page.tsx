import Navigation from '../components/navigation'
import Image from 'next/image'
import Footer from '../components/footer'

// Define an array of gallery images
const galleryImages = [
  {
    src: "/kay-jay.jpg",
    alt: "Traditional couple in wedding attire",
  },
  {
    src: "/kay-jay.jpg",
    alt: "Golden traditional wedding attire",
  },
  {
    src: "/kay-jay.jpg",
    alt: "White and gold wedding outfit",
  },
  {
    src: "/kay-jay.jpg",
    alt: "Blue and gold wedding ensemble",
  },
  {
    src: "/kay-jay.jpg",
    alt: "Couple in traditional attire outdoors",
  },
  {
    src: "/kay-jay.jpg",
    alt: "Green and gold wedding outfit",
  },
]

const modernGown = [
  {
    src: "/kay-jay.jpg",
    alt: "Traditional couple in wedding attire",
  },
  {
    src: "/kay-jay.jpg",
    alt: "Golden traditional wedding attire",
  },
  {
    src: "/kay-jay.jpg",
    alt: "White and gold wedding outfit",
  },
  {
    src: "/kay-jay.jpg",
    alt: "Blue and gold wedding ensemble",
  },
  {
    src: "/kay-jay.jpg",
    alt: "Couple in traditional attire outdoors",
  },
  {
    src: "/kay-jay.jpg",
    alt: "Green and gold wedding outfit",
  },
]

export default function GalleryPage() {
  return (
    <main className="bg-[#e6f7f7] min-h-screen">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl text-black md:text-4xl font-light mb-4">
            Traditional Attires For Weddings
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Embrace timeless elegance and cultural charm with our exquisite collection of traditional 
            wedding attires—crafted to make every moment unforgettable and you the center of admiration 
            on your special day!
          </p>
        </div>

        {/* Featured Image */}
        <div className="max-w-2xl mx-auto mb-16 flex items-center justify-center ">
          <Image
            src="/kay-jay.jpg"
            alt="Featured couple in traditional wedding attire"
            width={300}
            height={300}
            className="w-full h-auto max-w-sm"
          />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="aspect-[3/4] p-4">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={533}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl text-black md:text-4xl font-light mt-16">
            Modern Attires For Aisle Walk
          </h1>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modernGown.map((image, index) => (
            <div key={index} className="aspect-[3/4] p-4">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={533}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}

