import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Vans() {
  const [vans, setVans] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get("/api/vans/");
        setVans(resp.data.vans);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">
        {vans &&
          vans.map((van) => (
            <div key={van.id} className="van-tile">
              <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">
                  <h3>{van.name}</h3>
                  <p>
                    ${van.price}
                    <span>/day</span>
                  </p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Vans;
