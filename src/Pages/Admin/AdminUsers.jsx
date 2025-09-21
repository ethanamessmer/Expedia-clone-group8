import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./adminProduct.css";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminUsers = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(5);
  const handleLoadMore = () => {
    if (users.length >= limit) setLimit((p) => p + 5);
  };

  const loadUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get("http://localhost:8080/users");
      setUsers(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
      setError("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;
    try {
      await axios.delete(`http://localhost:8080/users/${id}`);
      // refresh list
      setUsers((prev) => prev.filter((u) => u.id !== id));
      toast.success("User removed", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete user");
    }
  };

  return (
    <div className="adminProductMain">
      <div className="adminSideBr">
        <h1><Link to={'/admin'}>Home</Link></h1>
        <h1><Link to={'/admin/adminflight'}>Add Flight</Link></h1>
        <h1><Link to={'/admin/adminstay'}>Add Stays</Link></h1>
        <h1><Link to={'/admin/products'}>All Flights</Link></h1>
        <h1><Link to={'/admin/hotels'}>All Hotels</Link></h1>
        <h1><Link to={'/'}>Log out</Link></h1>
      </div>

        
  <div className="adminProductbox">
          <div className="filterProdcut">
            <input placeholder="Search User" type="text" />
            <button>Search</button>
            {limit > users.length ? (
              ""
            ) : (
              <button onClick={handleLoadMore}>Load More</button>
            )}
          </div>
          <div className="head"><h1>All Users</h1></div>

          {loading ? <h1>Please wait...</h1> : ""}
          {users.slice(0, limit).map((u, i) => (
            <div key={u.id || i} className="adminProductlist">
              
              <span>
                {u.user_name || u.name || u.username || "—"}
              </span>
              <span>{u.number || "no-number"}</span>
              <span>{u.email || "no-email"}</span>
              <span>{u.dob || "no-dob"}</span>
              <span>{u.gender || "no-gender"}</span>
              <span>
                <button onClick={() => handleDelete(u.id)}>Delete</button>
              </span>
            </div>
          ))}
        </div>
    </div>
  );
};

export default AdminUsers;
