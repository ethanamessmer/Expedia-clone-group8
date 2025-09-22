import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import cityData from "../../Pages/Stay/city";

const initialState = {
  from: "",
  to: "",
  city: "",
  passenger: 1,
};

export default function PackagesInputBox({ onSearch }) {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCitySelect = (item) => {
    setForm({ ...form, city: item.name });
  };

  const formatResult = (item) => (
    <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
  );

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
          {/* City auto-complete input styled like others */}
          <div className="MainSearchinputBx" style={{ minWidth: "250px", maxWidth: "350px", flex: 1 }}>
            <span>CITY FOR HOTEL</span>
            <ReactSearchAutocomplete
              items={cityData}
              onSelect={handleCitySelect}
              formatResult={formatResult}
              showIcon={false}
              placeholder="Search city"
              styling={{
                height: "44px",
                border: "1px solid #dfe1e5",
                borderRadius: "6px",
                backgroundColor: "white",
                boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
                hoverBackgroundColor: "#eee",
                color: "#212121",
                fontSize: "16px",
                fontFamily: "Arial",
                searchIconMargin: "0 0 0 16px",
                width: "100%", // This will fill the parent div
                minWidth: "250px", // Ensures a minimum width
                maxWidth: "350px", // Optional: limits max width
              }}
            />
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