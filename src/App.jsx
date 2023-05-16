import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Booking from "./components/Booking"
import Features from "./components/Features"
import RentalCars from "./components/RentalCars"
import Business from "./components/Business"
import ChooseUs from "./components/ChooseUs"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

const App = () => (
    <div className="bg-white w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Booking />
      <Features />
      <RentalCars />
      <Business />
      <ChooseUs />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )

export default App