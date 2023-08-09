import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import { BookingPage, Home } from "./pages";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
