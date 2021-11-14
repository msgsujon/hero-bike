import React, { useEffect, useState } from "react";
import Product from "../AllServices/Product/Product";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("https://sleepy-beach-11892.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    // courses container
    <div className="container my-4">
      <h1 className="text-primary  fw-bold border-bottom w-25 mx-auto pb-2">
        <i>Bike</i>
      </h1>
      <div className="g-2 row">
        {service.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Services;
