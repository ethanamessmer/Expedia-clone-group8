import "./Admin.Module.css";
import React, { useState } from "react";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const initialState = {
  title: "",
  image: "",
  place: "",
  price: "",
  rating: "",
  adress: "",
};

const AdminPackage = () => {
  const [pkg, setPkg] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPkg((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/Things_todo", pkg);
      setPkg(initialState);
    } catch (err) {
      console.error(err);
      toast.error("Failed to add package");
    }
  };

  return (
    <>
      <div className="adminFlightMai">
        <ToastContainer />
        <div className="adminSideBr">
          <h1><Link to={'/admin'}>Home</Link></h1>
          <h1><Link to={'/admin/adminflight'}>Add Flight</Link></h1>
          <h1><Link to={'/admin/adminstay'}>Add Stays</Link></h1>
          <h1><Link to={'/admin/adminuser'}>Add User</Link></h1>
          <h1><Link to={'/admin/admingiftcard'}>Add Giftcard</Link></h1>
          <h1><Link to={'/admin/adminpackage'}>Add Package</Link></h1>
          <h1><Link to={'/admin/products'}>All Flights</Link></h1>
          <h1><Link to={'/admin/hotels'}>All Hotels</Link></h1>
          <h1><Link to={'/admin/users'}>All Users</Link></h1>
          <h1><Link to={'/admin/giftcards'}>All Giftcards</Link></h1>
          <h1><Link to={'/admin/packages'}>All Packages</Link></h1>
          <h1><Link to={'/'}>Log out</Link></h1>
        </div>

        <div className="adminFlightBox">
          <div className="adminHead">
            <h2>Admin Panel - Add Package</h2>
          </div>

          <div className="adminFlightInputs">
            <form onSubmit={handleSubmit}>
              <div className="adminFlightInputBx">
                <label>Title</label>
                <input type="text" name="title" value={pkg.title} onChange={handleChange} />
              </div>

              <div className="adminFlightInputBx">
                <label>Image URL</label>
                <input type="url" name="image" value={pkg.image} onChange={handleChange} />
              </div>

              <div className="adminFlightInputBx">
                <label>Place</label>
                <input type="text" name="place" value={pkg.place} onChange={handleChange} />
              </div>

              <div className="adminFlightInputBx">
                <label>Price</label>
                <input type="number" name="price" value={pkg.price} onChange={handleChange} />
              </div>

              <div className="adminFlightInputBx">
                <label>Rating</label>
                <input type="text" name="rating" value={pkg.rating} onChange={handleChange} />
              </div>

              <div className="adminFlightInputBx">
                <label>Address</label>
                <input type="text" name="adress" value={pkg.adress} onChange={handleChange} />
              </div>

              <div className="adminFlightInputBx">
                <span></span>
                <button type="submit">Add Package</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPackage;
