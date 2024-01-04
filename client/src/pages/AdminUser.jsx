import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../store/Auth";
import { Link } from "react-router-dom";

const AdminUser = () => {
  const [user, setUser] = useState([]);
  const { authorizationToken } = useAuth();
  const getAllUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/admin/users",
        {
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/admin/users/delete/${id}`,
        {
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response) {
        getAllUsers();
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>Admin Users Data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <hr className="line" />
            <tbody>
              {user.map((currUser, index) => {
                return (
                  <tr key={index}>
                    <td>{currUser.username}</td>
                    <td>{currUser.email}</td>
                    <td>{currUser.phone}</td>
                    <td>
                      <Link to={`/admin/users/${currUser._id}/edit`}>Edit</Link>
                    </td>
                    <td>
                      <button onClick={() => deleteUser(currUser._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminUser;
