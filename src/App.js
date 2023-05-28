import { useState, useEffect } from "react";
import { Navbar, Loader } from "./components";
import { About, Footer, Hero, Highlights, Testimonials } from "./containers";
import "./app.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Hero />
          <Highlights />
          <Testimonials />
          <About />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
