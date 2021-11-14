import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://sleepy-beach-11892.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    // courses container
    <div className="container my-4">
      <h1 className="text-primary  fw-bold border-bottom w-25 mx-auto pb-2">
        <i>Bike</i>
      </h1>
      <div className="g-2 row">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
