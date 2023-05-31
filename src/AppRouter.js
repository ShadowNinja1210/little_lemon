import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import { BookingPage } from "./containers";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
