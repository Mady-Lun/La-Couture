import Navigation from '../components/navigation'
import Image from 'next/image'
import Footer from '../components/footer'

const reviews = [
  {
    id: 1,
    names: "Trey & Alex",
    image: "/kay-jay.jpg",
    quote: "I felt like a princess on my wedding day, thanks to this boutique! The service was everything I dreamed of&mdash;elegant, comfortable, and absolutely stunning. The team went above and beyond to ensure every detail was perfect. Highly recommend for brides-to-be!"
  },
  {
    id: 2,
    names: "Kay & Jay",
    image: "/trey-alex.jpg",
    quote: "Finding the perfect wedding dress seemed impossible until I came here. The collection was breathtaking, and the staff made me feel so special throughout the process. My dress was tailored to perfection, and I received endless compliments. Truly the best experience!"
  },
  {
    id: 3,
    names: "James & Jimmy",
    image: "/james-janes.jpg",
    quote: "This boutique is a gem! From the moment I walked in, I was treated like family. The consultants listened to my vision and helped me find the gown of my dreams. It made my big day even more magical. I can&rsquo;t thank them enough!"
  },
  {
    id: 4,
    names: "Jammy & Jany",
    image: "/jimmy-jany.jpg",
    quote: "Choosing this boutique was the best decision for my wedding. Their gowns are a perfect blend of tradition and modern elegance. The customization options were fantastic, and the attention to detail was incredible. I couldn&rsquo;t have asked for a better experience!"
  }
]

export default function ReviewsPage() {
  return (
    <main className="bg-[#e6f7f7] min-h-screen">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-3xl text-black md:text-4xl font-light text-center mb-16">
          Our Client Experience
        </h1>

        <div className="space-y-8">
          {reviews.map((review, index) => (
            <div 
              key={review.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={review.image || "/placeholder.svg"}
                  alt={`Wedding photo of ${review.names}`}
                  width={400}
                  height={600}
                  className="rounded-lg ml-auto mr-auto "
                />
              </div>
              
              <div className="w-full text-black md:w-1/2 bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-light mb-4 text-center md:text-left">
                  {review.names}
                </h2>
                <p className="text-black-600 italic leading-relaxed text-center md:text-left">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <a
            href="/contact"
            className="bg-[#008B98] text-white italic px-16 py-3 text-lg font-light hover:bg-[#33BBC8] hover:text-black transition-colors rounded"
          >
            Book Your Experience Today
          </a>
        </div>
      </div>
      <Footer />
    </main>
  )
}
