import "./Admin.Module.css";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addFlight } from "../../Redux/AdminFlights/action";
import { Link } from "react-router-dom";

let initialState = {
  airline: "",
  number: "",
  from: "",
  to: "",
  departure: "",
  arrival: "",
  price: "",
  totalTime: "",
};
export const Admin = () => {
  const [flight, setFlight] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFlight((prev) => {
      return { ...prev, [name]: name === "price" ? +value : value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(flight);
    dispatch(addFlight(flight));
    setFlight(initialState);
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
         <h1><Link to={"/admin/products"}>All Flights</Link></h1>
          <h1><Link to={"/admin/hotels"}>All Hotels</Link></h1>
          <h1><Link to={'/admin/users'}>All Users</Link></h1>
          <h1><Link to={'/admin/giftcards'}>All Giftcards</Link></h1>
          <h1><Link to={'/admin/packages'}>All Packages</Link></h1>
          <h1><Link to={"/"}>Log out</Link></h1>

        </div>
        <div className="adminFlightBox">
          <div className="adminHead">
            <h2>Admin Panel for Flights</h2>
          </div>

          <div className="adminFlightInputs">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="adminFlightInputBx">
                <label htmlFor="">Airline</label>
                <input
                  type="text"
                  id="input"
                  name="airline"
                  value={flight.airline}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="adminFlightInputBx">
                <label htmlFor="">Flight Number</label>
                <input
                  id="input"
                  type="text"
                  name="number"
                  value={flight.number}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="adminFlightInputBx">
                <label htmlFor="">From</label>
                <input
                  id="input"
                  type="text"
                  name="from"
                  value={flight.from}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="adminFlightInputBx">
                <label htmlFor="">To</label>
                <input
                  id="input"
                  type="text"
                  name="to"
                  value={flight.to}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="adminFlightInputBx">
                <label htmlFor="">Departure</label>
                <input
                  id="input"
                  type="text"
                  name="departure"
                  value={flight.departure}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="adminFlightInputBx">
                <label htmlFor="">Arrival</label>
                <input
                  id="input"
                  type="text"
                  name="arrival"
                  value={flight.arrival}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="adminFlightInputBx">
                <label htmlFor="">Price</label>
                <input
                  id="input"
                  type="number"
                  name="price"
                  value={flight.price}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="adminFlightInputBx">
                <label htmlFor="">TotalTime</label>
                <input
                  id="input"
                  type="text"
                  name="totalTime"
                  value={flight.totalTime}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="adminFlightInputBx">
                <span></span>
                <button>Add Flight Info</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
