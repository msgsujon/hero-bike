import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./Reviews.css";

const ReviewsAdd = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://sleepy-beach-11892.herokuapp.com/reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };
  return (
    <div className="review">
      <h4>Reviews</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register("description")} placeholder="Description" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ReviewsAdd;
