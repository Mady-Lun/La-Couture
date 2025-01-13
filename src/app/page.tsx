import Navigation from './components/navigation'
import HeroSection from './components/hero-section'
import ClientReviews from './components/client-reviews'
import Footer from './components/footer'
export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ClientReviews />
      <Footer />
    </main>
  )
}

