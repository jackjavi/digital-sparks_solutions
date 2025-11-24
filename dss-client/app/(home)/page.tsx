import Home from "../components/Home";
import Services from "../components/Services";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
// import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Page() {
  return (
    <div>
      <Home />

      <Services />

      <About />

      <WhyChooseUs />

      {/* <Portfolio /> */}

      <Testimonials />

      <Contact />
    </div>
  );
}
