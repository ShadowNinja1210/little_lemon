import "./review-page.css";
import "../../Booking/booking.css";
import { ReactComponent as Lemon } from "../../../assets/Logo_lemon.svg";
import table from "../../../assets/table.jpg";

const ReviewPage = ({ onBack, onNext }) => {
  return (
    <div className="lemon__booking-forms_review">
      <h1 className="lemon__booking-forms-heading">Review the Details</h1>
      <section className="lemon__booking-forms_review-group">
        <article className="lemon__booking-forms_review-left" style={{ backgroundImage: `url(${table})` }}>
          <figcaption>
            <div>
              <h4>Happy Anniversary</h4>
              <p>From Little Lemon</p>
            </div>
            <div>
              <Lemon />
            </div>
          </figcaption>
        </article>
        <article className="lemon__booking-forms_review-right">
          <p>
            <b>Reservation for: </b> Mohit Jeswani
          </p>
          <p>
            <b>No. of Guests: </b> 5
          </p>
          <p>
            <b>Date: </b> 28 May, 2023 <b>@</b> 8:00 PM
          </p>
          <p>
            <b>Mobile: </b> +91 12345 67890
          </p>
          <p>
            <b>Email: </b> customer@mail.com
          </p>
        </article>
      </section>
      <section className="lemon__booking-forms-btn">
        <button className="lemon__booking-forms_secondary-btn" onClick={onBack}>
          Back
        </button>
        <button className="lemon__booking-forms_primary-btn" onClick={onNext}>
          Continue
        </button>
      </section>
    </div>
  );
};

export default ReviewPage;
