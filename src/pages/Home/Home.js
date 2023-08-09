import "../../App.css";
import { Navbar } from "../../components";
import { About, Footer, Hero, Highlights, Testimonials } from "../../containers";

const Home = () => {
  return (
    <section id="home">
      <Navbar />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </section>
  );
};

export default Home;
