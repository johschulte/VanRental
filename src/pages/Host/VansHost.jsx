import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const VansHost = () => {
  const [vans, setVans] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get("/api/host/vans");
        console.log(data.data.vans);
        setVans(data.data.vans);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {vans ? (
          vans.map((van) => (
            <Link to={van.id} key={van.id} className="host-van-link-wrapper">
              <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                  <h3>{van.name}</h3>
                  <p>${van.price}/day</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </section>
  );
};

export default VansHost;
