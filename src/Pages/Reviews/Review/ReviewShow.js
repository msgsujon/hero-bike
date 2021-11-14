import React from "react";
import useAuth from "../../../Hook/useAuth";

const ReviewShow = (props) => {
  const { user } = useAuth();
  const { description } = props.review;
  return (
    <div className="text-start">
      <h5>
        <i class="fas fa-comment-alt text-success mx-3"> </i>
        {description}
      </h5>
      <hr />
    </div>
  );
};

export default ReviewShow;
