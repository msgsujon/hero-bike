import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddUser.css";

// here add services
const AddUser = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://sleepy-beach-11892.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };

  return (
    <div className="add-service">
      <h2> Add Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <textarea {...register("description")} placeholder="Description" />
        <input type="number" {...register("price")} placeholder="price" />
        <input {...register("img")} placeholder="image url" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddUser;
