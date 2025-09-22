import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import "../../Pages/Flights/homePage.css"; 

const initialState = {
  from: "",
  to: "",
  departureDate: "",
  returnDate: "",
  passenger: 1,
};

export default function PackagesInputBox({ onSearch }) {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (onSearch) onSearch(form);
  };

  return (
    <div className="homeTop" style={{ marginBottom: "40px" }}>
      <div className="homeTopCard">
        <div className="homeMainSearchInput">
          <div className="MainSearchinputBx">
            <span>FROM</span>
            <select name="from" value={form.from} onChange={handleChange}>
              <option value="">From</option>
              <option value="DELHI">DELHI</option>
              <option value="MUMBAI">MUMBAI</option>
              <option value="BANGLURU">BANGLURU</option>
              <option value="PUNE">PUNE</option>
            </select>
          </div>
          <div className="MainSearchinputBx">
            <span>TO</span>
            <select name="to" value={form.to} onChange={handleChange}>
              <option value="">To</option>
              <option value="DELHI">DELHI</option>
              <option value="MUMBAI">MUMBAI</option>
              <option value="BANGLURU">BANGLURU</option>
              <option value="PUNE">PUNE</option>
            </select>
          </div>
          <div className="MainSearchinputBx">
            <span>DEPARTURE</span>
            <input type="date" name="departureDate" value={form.departureDate} onChange={handleChange} />
          </div>
          <div className="MainSearchinputBx">
            <span>RETURN</span>
            <input type="date" name="returnDate" value={form.returnDate} onChange={handleChange} />
          </div>
          <div className="MainSearchinputBx">
            <span>TRAVELLERS & CLASS</span>
            <input type="number" name="passenger" min={1} value={form.passenger} onChange={handleChange} />
          </div>
        </div>
        <div className="homeSearchButtonBx">
          <Button colorScheme="blue" size="lg" onClick={handleClick}>
            Search Packages
          </Button>
        </div>
      </div>
    </div>
  );
}