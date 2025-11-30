import Home from "./_components/Home";
import Services from "./_components/Services";
import About from "./_components/About";
import WhyChooseUs from "./_components/WhyChooseUs";
// import Portfolio from "../components/Portfolio";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";

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
