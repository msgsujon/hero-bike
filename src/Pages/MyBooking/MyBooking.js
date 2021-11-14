import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hook/useFirebase";

const Users = () => {
  const [users, setUsers] = useState([]);

  const { user } = useFirebase();

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
            const remainingUsers = users.filter(
              (booking) => booking.email === user.email
            );
            console.log(user.email);
            // console.log(booking.email)
            setUsers(remainingUsers);
          }
        });
    }
  };

  return (
    <div className="container mx-5">
      <h2 className="m-4">My Booking</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>
                <Link to={`/users/update/${booking._id}`}>
                  <button className="btn btn-primary m-2">Update</button>
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleDeleteUser(booking._id)}
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
