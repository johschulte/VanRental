import React, { useContext } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const HostVandetailsLayout = () => {
  const { id } = useParams();
  const [currentVan, setVans] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get(`/api/host/vans/${id}`);
        setVans(data.data.vans[0]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="van-detail-container">
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <section>
        {currentVan && (
          <div className="host-van-detail-layout-container">
            <div className="host-van-detail">
              <img src={currentVan.imageUrl} />
              <div className="host-van-detail-info-text">
                <i className={`van-type van-type-${currentVan.type}`}>
                  {currentVan.type}
                </i>
                <h3>{currentVan.name}</h3>
                <h4>${currentVan.price}/day</h4>
              </div>
            </div>
          </div>
        )}
      </section>
      <nav className="host-van-detail-nav">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="."
          end
        >
          Details
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="pricing"
        >
          Pricing
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="photos"
        >
          Photos
        </NavLink>
      </nav>
      <Outlet context={currentVan} />
    </div>
  );
};

export default HostVandetailsLayout;
