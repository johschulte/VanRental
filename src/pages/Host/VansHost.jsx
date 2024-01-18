import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getVans } from "../../api";

const VansHost = () => {
  const [vans, setVans] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const resp = await getVans("/api/host/vans");
        setVans(resp);
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
