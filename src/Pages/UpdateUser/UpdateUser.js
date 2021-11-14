import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const UpdateUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `https://sleepy-beach-11892.herokuapp.com/users/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  // Update User
  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    const updatedUser = { name: updatedName, email: user.email };
    setUser(updatedUser);
  };

  const handleEmailChange = (e) => {
    const updatedEmail = e.target.value;
    const updatedUser = { name: user.name, email: updatedEmail };
    setUser(updatedUser);
  };
  const handleUpdateUser = (e) => {
    const url = `https://sleepy-beach-11892.herokuapp.com/users/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Update Successful");
          setUser({});
          e.target.reset();
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <h2 className="m-4">Update</h2>
      <form onSubmit={handleUpdateUser}>
        <input
          className="m-2"
          type="text"
          onChange={handleNameChange}
          value={user.name || ""}
        />
        <br />
        <input
          className="mb-2"
          type="email"
          onChange={handleEmailChange}
          value={user.email || ""}
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateUser;
