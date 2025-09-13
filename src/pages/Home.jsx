import AboutSection from "../components/HomePage/AboutSection"
import FeaturesSection from "../components/HomePage/FeaturesSection"
import Footer from "../components/Footer"
import HeroSection from "../components/HomePage/HeroSection"
import NavBar from "../components/NavBar"

function Home() {
    return (
        <div>
            <NavBar />
            <div className="mb-5"></div>
            <HeroSection />
            <div className="mb-5"></div>
            <FeaturesSection />
            <div className="mb-5"></div>
            <AboutSection />
            <div className="mb-5"></div>
            <Footer />
        </div>
    )
}

export default Home
