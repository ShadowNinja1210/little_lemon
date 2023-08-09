import { useState, useEffect } from "react";
import { Loader } from "./components";
import Home from "./Home";
import "./App.css";

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
        <div id="home">
          <Home />
        </div>
      )}
    </div>
  );
}

export default App;
