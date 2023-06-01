import { ReactSVG } from "react-svg";
import "./final-page.css";
import "../../Booking/booking.css";
import { Link } from "react-router-dom";
import success from "../../../assets/success.svg";

const FinalPage = () => {
  return (
    <div className="lemon__booking-forms_final">
      <ReactSVG src={success} />
      <section>
        <p>
          <b>Congratulations on your successful table reservation!</b>
        </p>
        <p>
          Your Reservation ID is <b>Reservation ID</b>, and your table is reserved for <b>Date</b> at <b>Time</b>.
        </p>
        <p>Get ready to indulge in a delightful dining experience! We have sent the reservation details to your email and mobile number. Enjoy your meal!</p>
      </section>
      <Link to="/">
        <button className="lemon-btn">Home</button>
      </Link>
    </div>
  );
};

export default FinalPage;
