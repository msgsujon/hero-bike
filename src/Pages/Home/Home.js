import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import Menu from "../Menu/Menu";
import Review from "../Reviews/Reviews/Review";
import Services from "../Services/Services";
import SocialDistance from "../SocialDistance/SocialDistance";

const Home = () => {
  return (
    <div>
      {/* here services and banner */}
      <Banner></Banner>
      <Menu></Menu>
      <Link to="/allService" className="nav-link active " aria-current="page">
        <button className=" btn btn-primary bold fs-5">All Products</button>
      </Link>
      <Services></Services>
      <SocialDistance></SocialDistance>

      <Review></Review>
    </div>
  );
};

export default Home;
