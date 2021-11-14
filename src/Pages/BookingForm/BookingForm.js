import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import "./BookingForm.css";
const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://sleepy-beach-11892.herokuapp.com/users", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };

  return (
    <div className="BookingForm mt-5">
      <h1 className="mb-4  fw-bold">Please booking</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          value={user.displayName}
        />
        <input type="email" value={user.email} {...register("email")} />
        <input
          {...register("bike", { required: true, maxLength: 20 })}
          placeholder="Bike Name"
        />
        <input type="date" {...register("date")} placeholder="date" />
        <input
          type="number"
          {...register("number")}
          placeholder="Mobile number"
        />
        <input
          type="number"
          {...register("number")}
          placeholder="How many bike?"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
