import Image from 'next/image'

const reviews = [
  { id: 1, names: "Trey & Alex", image: "/kay-jay.jpg" },
  { id: 2, names: "Kay & Jay", image: "/trey-alex.jpg" },
  { id: 3, names: "James & Jimmy", image: "/james-janes.jpg" },
  { id: 4, names: "Jammy & Jany", image: "/jimmy-jany.jpg" },
]

export default function ClientReviews() {
  return (

    <div className="w-full mx-auto px-4 py-12 bg-white">
      <h2 className="text-2xl font-light mb-8 text-black">Our Client Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <Image
              src={review.image}
              alt={`Wedding photo of ${review.names}`}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white text-center">{review.names}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

