import React, { useContext } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import { useParams } from "react-router-dom";
import { getVans } from "../../api";

const HostVandetailsLayout = () => {
  const { id } = useParams();
  const [currentVan, setVans] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const resp = await getVans(`/api/host/vans/${id}`);
        setVans(resp[0]);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

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
