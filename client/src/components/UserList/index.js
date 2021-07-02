import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader";
import Button from "../Button";
import "./index.css";
import { fetchUsers } from "../../actions/";

const UserList = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const getUsers = async () => {
      const result = await fetchUsers();
      setUsers(result);
    };
    getUsers();
  }, []);

  if (users === null) {
    return <Loader />;
  }
  /**Render the list of users */
  const renderUsers = users.map((user, index) => {
    return (
      <tr className="user" key={user.id}>
        <td>{index + 1}</td>
        <td>{user.firstName}</td>
        <td>{user.surname}</td>
        <td>{user.email}</td>
        <td>{user.telephoneNumber}</td>
        <td>{user.gender}</td>
        <td>{user.dateOfBirth}</td>
        <td>{user.comments}</td>
      </tr>
    );
  });
  return (
    <div className="user-list">
      <h2 className="text-center text-2xl text-black mb-2">
        They are currently {users.length} Users registered
      </h2>
      <table className="mb-2">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Telephone Number</th>
            <th>Gender</th>
            <th>Date Of Birth</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>{renderUsers}</tbody>
      </table>
      <Link to="/">
        <Button text="< Add User" />
      </Link>
    </div>
  );
};

export default UserList;
