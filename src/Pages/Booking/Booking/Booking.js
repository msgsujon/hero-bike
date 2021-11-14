import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./Booking.css";
import BookingForm from "../../BookingForm/BookingForm";

const Booking = () => {
  let { serviceId } = useParams();
  const [details, setDetails] = useState([]);

  // here data load
  useEffect(() => {
    fetch(`https://sleepy-beach-11892.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-12">
          <p className="fs-1 fw-bold text-start text-info m-4">Booking hotel</p>

          <img
            style={{ height: "400px", width: "650px" }}
            className="img-fluid"
            src={details.img}
          />
          <br />
          <h1 className="text-primary  fw-bold border-bottom w-50 mx-auto mt-4 pb-2">
            {" "}
            {details.name}
          </h1>
          <br />
          <h3 className="text-info  fw-bold mx-auto mb-3">
            price: {details.price}
          </h3>
          <p className="fs-4"> {details.description}</p>
          <Link to="/home" className="text-info mt-5">
            <button type="button" className="btn btn-secondary">
              Back home
            </button>
          </Link>
        </div>
        <div className="col-lg-6 col-12 mt-5">
          <BookingForm></BookingForm>
        </div>
      </div>
    </div>
  );
};

export default Booking;
