import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./adminProduct.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminGiftcards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(8);

  const loadCards = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get("http://localhost:8080/giftcards");
      setCards(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
      setError("Failed to load gift cards");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCards();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/giftcards/${id}`);
      setCards((prev) => prev.filter((c) => c.id !== id));
      toast.success("Gift card removed", { position: "top-right", autoClose: 3000 });
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete gift card");
    }
  };

  const handleLoadMore = () => setLimit((p) => p + 8);

  return (
    <div className="adminProductMain">
      <ToastContainer />
      <div className="adminSideBr">
        <h1><Link to={'/admin'}>Home</Link></h1>
        <h1><Link to={'/admin/adminflight'}>Add Flight</Link></h1>
        <h1><Link to={'/admin/adminstay'}>Add Stays</Link></h1>
         <h1><Link to={'/admin/adminuser'}>Add User</Link></h1>
         <h1><Link to={'/admin/admingiftcard'}>Add Giftcard</Link></h1>
        <h1><Link to={'/admin/products'}>All Flights</Link></h1>
        <h1><Link to={'/admin/hotels'}>All Hotels</Link></h1>
        <h1><Link to={'/admin/users'}>All Users</Link></h1>
        <h1><Link to={'/admin/giftcards'}>All Giftcards</Link></h1>
        <h1><Link to={'/admin/packages'}>All Packages</Link></h1>
        <h1><Link to={'/'}>Log out</Link></h1>
      </div>

      <div className="adminProductbox">
        <div className="filterProdcut">
          <input placeholder="Search Gift Card" type="text" />
          <button onClick={loadCards}>Refresh</button>
          {limit > cards.length ? "" : <button onClick={handleLoadMore}>Load More</button>}
        </div>
        <div className="head"><h1>Gift Cards</h1></div>

        {loading ? <h1>Please wait...</h1> : ""}
        {error ? <p style={{ color: 'red' }}>{error}</p> : ""}

        {cards.slice(0, limit).map((c, i) => (
          <div key={c.id ?? i} className="adminProductlist">
            <span>
              <img src={c.image} alt={c.title || c.id} />
            </span>
            <span>{c.title || c.id || '—'}</span>
            <span>{c.category || '—'}</span>
            <span>{c.id}</span>
            <span></span>
            <span></span>
            <span>
              <button onClick={() => handleDelete(c.id)}>Delete <i className="fa fa-trash"></i></button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminGiftcards;
