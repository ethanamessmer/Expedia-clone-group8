import "./Admin.Module.css";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addUser } from "../../Redux/AdminUsers/action";
import { Link } from "react-router-dom";

let initialState = {
  user_name: "",
  number: "",
  email: "",
  dob: "",
  gender: "",
  avatar: "",
};
export const AdminUser = () => {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(user));
    setUser(initialState);
  };
  return (
    <>
      <div className="adminFlightMai">
        <div className="adminSideBr">
          <h1><Link to={"/admin"}>Home</Link></h1>
          <h1><Link to={"/admin/adminflight"}>Add Flight</Link></h1>
          <h1><Link to={"/admin/adminstay"}>Add Stays</Link></h1>
          <h1><Link to={'/admin/adminuser'}>Add User</Link></h1>
          <h1><Link to={'/admin/admingiftcard'}>Add Giftcard</Link></h1>
          <h1><Link to={'/admin/adminpackage'}>Add Package</Link></h1>
          <h1><Link to={"/admin/products"}>All Flights</Link></h1>
          <h1><Link to={"/admin/hotels"}>All Hotels</Link></h1>
          <h1><Link to={'/admin/users'}>All Users</Link></h1>
          <h1><Link to={'/admin/giftcards'}>All Giftcards</Link></h1>
          <h1><Link to={'/admin/packages'}>All Packages</Link></h1>
          <h1><Link to={"/"}>Log out</Link></h1>

        </div>
        <div className="adminFlightBox">
          <div className="adminHead">
            <h2>Admin Panel for Users</h2>
          </div>

          <div className="adminFlightInputs">
            <form onSubmit={handleSubmit}>
              <div className="adminFlightInputBx">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  id="input"
                  name="user_name"
                  value={user.user_name}
                  onChange={handleChange}
                />
              </div>
              <div className="adminFlightInputBx">
                <label htmlFor="">Phone</label>
                <input
                  id="input"
                  type="text"
                  name="number"
                  value={user.number}
                  onChange={handleChange}
                />
              </div>
              <div className="adminFlightInputBx">
                <label htmlFor="">Email</label>
                <input
                  id="input"
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
              <div className="adminFlightInputBx">
                <label htmlFor="">DOB</label>
                <input
                  id="input"
                  type="date"
                  name="dob"
                  value={user.dob}
                  onChange={handleChange}
                />
              </div>
              <div className="adminFlightInputBx">
                <label htmlFor="">Gender</label>
                <input
                  id="input"
                  type="text"
                  name="gender"
                  value={user.gender}
                  onChange={handleChange}
                />
              </div>
              <div className="adminFlightInputBx">
                <label htmlFor="">Avatar URL</label>
                <input
                  id="input"
                  type="url"
                  name="avatar"
                  value={user.avatar}
                  onChange={handleChange}
                />
              </div>
              <div className="adminFlightInputBx">
                <span></span>
                <button>Add User</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUser;
