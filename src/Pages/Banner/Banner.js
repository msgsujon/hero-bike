import React from "react";

const Banner = () => {
  return (
    <div>
      {/* bannner here */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div style={{ height: "500px" }} className="carousel-item active">
            <img
              src="https://www.heromotocorp.com/en-in/new-maestro-edge-110/assets/images/home-banner.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div style={{ height: "500px" }} className="carousel-item">
            <img
              src="https://www.heromotocorp.com/en-bd/images/home-banner/banner-Passion-x-pro-2020.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div style={{ height: "500px" }} className="carousel-item">
            <img
              src="https://www.heromotocorp.com/en-bd/images/home-banner/Bangladesh-01-2018.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
