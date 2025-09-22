import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./adminProduct.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminPackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(8);

  const loadPackages = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get("http://localhost:8080/Things_todo");
      setPackages(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
      setError("Failed to load packages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPackages();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/Things_todo/${id}`);
      setPackages((prev) => prev.filter((p) => p.id !== id));
      toast.success("Package removed", { position: "top-right", autoClose: 3000 });
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete package");
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
          <input placeholder="Search Packages" type="text" />
          <button onClick={loadPackages}>Refresh</button>
          {limit > packages.length ? "" : <button onClick={handleLoadMore}>Load More</button>}
        </div>
        <div className="head"><h1>Packages</h1></div>

        {loading ? <h1>Please wait...</h1> : ""}
        {error ? <p style={{ color: 'red' }}>{error}</p> : ""}

        {packages.slice(0, limit).map((p, i) => (
          <div key={p.id ?? i} className="adminProductlist">
            <span>
              <img src={p.image} alt={p.title || p.place} />
            </span>
            <span>{p.title || p.place || '—'}</span>
            <span>{p.place || '—'}</span>
            <span>{p.price || '—'}</span>
            <span>{p.rating || '—'}</span>
            <span>{p.adress || '—'}</span>
            <span>
              <button onClick={() => handleDelete(p.id)}>Delete <i className="fa fa-trash"></i></button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPackages;
