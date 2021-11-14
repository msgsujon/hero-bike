import React, { useEffect, useState } from "react";
import ReviewShow from "../Review/ReviewShow";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://sleepy-beach-11892.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    // courses container
    <div className="container my-5">
      <h3 className="text-primary  fw-bold border-bottom w-25 mx-auto pb-2">
        <i>Review Show</i>
      </h3>
      <div className="g-2 row">
        {reviews.map((review) => (
          <ReviewShow key={review.id} review={review}></ReviewShow>
        ))}
      </div>
    </div>
  );
};

export default Review;
