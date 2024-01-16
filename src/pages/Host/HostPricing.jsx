import { useContext } from "react";
import { useOutletContext } from "react-router-dom";

const HostPricing = () => {
  const currentVan = useOutletContext();
  return (
    <>
      {currentVan && (
        <h3 className="host-van-price">
          ${currentVan.price}
          <span>/day</span>
        </h3>
      )}
    </>
  );
};

export default HostPricing;
