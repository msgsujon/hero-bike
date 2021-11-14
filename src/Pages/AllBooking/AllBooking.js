import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://sleepy-beach-11892.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // DELETE AN USER
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://sleepy-beach-11892.herokuapp.com/users/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = users.filter((user) => user._id !== id);
            setUsers(remainingUsers);
          }
        });
    }
  };

  return (
    <div className="container mx-5">
      <h2 className="m-4"> All Booking</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Images</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.img}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/users/update/${user._id}`}>
                  <button className="btn btn-primary m-2">Update</button>
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
