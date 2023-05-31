import { useForm } from "react-hook-form";
import "./booking-form.css";
import "../../Booking/booking.css";

const BookingForm = ({ onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="lemon__booking-forms_booking">
      <form className="lemon__booking-forms_booking-form" onSubmit={handleSubmit(onSubmit)}>
        <legend>
          <h1 className="lemon__booking-forms-heading">Reservation of Table</h1>
        </legend>

        <section className="lemon__booking-forms_booking-section">
          <div className="lemon__booking-forms_booking-group">
            <label>Name:</label>
            <input type="text" placeholder="Full Name" {...register("Full Name", { required: true })} />
          </div>

          <div className="lemon__booking-forms_booking-group">
            <label>Occasion:</label>
            <select {...register("Occasion", { required: true })}>
              <option value="">Select Occasion</option>
              <option value="Birthday">Birthday</option>
              <option value=" Anniversary"> Anniversary</option>
            </select>
          </div>
        </section>

        <section className="lemon__booking-forms_booking-section">
          <div className="lemon__booking-forms_booking-group">
            <label>Time:</label>
            <input type="time" placeholder="Time" {...register("Time", { required: true })} />
          </div>

          <div className="lemon__booking-forms_booking-group">
            <label>Date:</label>
            <input type="date" placeholder="Date" {...register("Date", { required: true })} />
          </div>

          <div className="lemon__booking-forms_booking-group">
            <label>No. of Guests:</label>
            <input type="number" placeholder="No. of Guests" {...register("Guests", { required: true })} />
          </div>
        </section>
        <section className="lemon__booking-forms_booking-section">
          <div className="lemon__booking-forms_booking-group">
            <label>Mobile:</label>
            <input type="tel" placeholder="Mobile" {...register("Mobile", { required: true, maxLength: 10 })} />
          </div>

          <div className="lemon__booking-forms_booking-group">
            <label>Email:</label>
            <input type="email" placeholder="Email" {...register("Email", { required: true })} />
          </div>
        </section>

        {/* Button */}
        <div className="lemon__booking-forms-btn">
          <button type="reset" className="lemon__booking-forms_secondary-btn">
            Reset
          </button>

          <button type="submit" className="lemon__booking-forms_primary-btn" onClick={onNext}>
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
