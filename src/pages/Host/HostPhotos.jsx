import { useContext } from "react";
import { useOutletContext } from "react-router-dom";

const HostPhotos = () => {
  const currentVan = useOutletContext();
  return (
    <>
      {currentVan && (
        <img src={currentVan.imageUrl} className="host-van-detail-image" />
      )}
    </>
  );
};

export default HostPhotos;
