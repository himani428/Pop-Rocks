import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Classes from "../components/Classes.jsx";
import Trainers from "../components/Trainers.jsx";
import Services from "../components/Services.jsx";
import Pricing from "../components/Pricing.jsx";
import Gallery from "../components/Gallery.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 60);
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <About />
      <Classes />
      <Trainers />
      <Services />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}
