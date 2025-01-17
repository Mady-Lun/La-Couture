import Navigation from "../components/navigation";
import Image from "next/image";
import Footer from "../components/footer";

export default function AboutPage() {
  return (
    <main className="bg-[#e6f7f7]">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 text-center">
            <p className="text-2xl md:text-3xl lg:text-3xl leading-relaxed text-black">
              Welcome to <span className="italic">La Couture</span>, where
              timeless tradition meets modern elegance. We are passionately
              committed to crafting luxurious wedding gowns that celebrate Khmer
              heritage while embracing contemporary design.
            </p>
          </div>

          <div className="relative w-full md:w-1/2">
            <div className="absolute bottom-8 left-8 w-full h-full bg-[#1e4d4d] z-0"></div>
            <div className="relative z-10">
              <Image
                src="/13.jpg"
                alt="Traditional wedding couple"
                width={500}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Specialization Section */}
      <div className="bg-[#145F66] text-white mt-6 ">
        {/* Full-width background */}
        <div className="max-w-5xl mx-auto py-10 px-8 flex flex-col md:flex-row items-center justify-between gap-20">
          <div className="w-full md:w-1/2">
            <Image
              src="/14.jpg"
              alt="Couple in light blue traditional attire"
              width={500}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 text-center">
            <p className="text-2xl md:text-3xl ">
              At <span className="italic">La Couture</span>, we specialize in
              seamlessly blending the rich aesthetics of Khmer culture with the
              latest fashion trends. From intricate detailing to premium
              materials, every gown is a testament to our dedication to quality
              and artistry.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
          <h2 className="text-5xl font-medium mb-8 text-black">Why Us?</h2>
            <p className=" md:text-3xl lg:text-3xl text-black text-left">

                <li>Expert craftsmanship inspired by Khmer elegance.</li>
                <li>Personalized designs tailored to your dream look.</li>
                <li>A curated collection blending cultural heritage with modern sophistication.</li>
              
            </p>
          </div>

          <div className="relative w-full md:w-1/2">
            <div className="absolute top-8 left-8 w-full h-full bg-[#1e4d4d] z-0"></div>
            <div className="relative z-10">
              <Image
                src="/15.jpg"
                alt="Traditional wedding couple"
                width={500}
                height={600}
                className="w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
