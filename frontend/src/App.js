// import "./App.css";
import Experiences from "./sections/Experiences/Experiences";
import Navbar from "./components/Navbar/Navbar";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import SocialMedia from "./sections/SocialMedia/SocialMeida";
import Portfolio from "./sections/Portfolio/Portfolio";
import Testimonials from "./sections/Testimonials/Testimonials.jsx";
import Contact from "./sections/Contact/Contact.jsx";
import Footer from "./sections/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />

      <SocialMedia />
    </div>
  );
}

export default App;
