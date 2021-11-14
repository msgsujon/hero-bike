import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";

const Service = (props) => {
  const { isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  const { _id, name, description, img } = props.product;
  return (
    <div className="card col-lg-4 col-sm-12 mt-3" style={{ width: "18rem;" }}>
      <img
        style={{ width: "18rem;", height: "210px" }}
        src={img}
        className="card-img-top mt-1"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <Link to={`/booking/${_id}`}>
          <button type="button" className="btn btn-warning">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
