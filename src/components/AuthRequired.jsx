import { Outlet, Navigate, useOutletContext } from "react-router-dom";

const AuthRequired = () => {
  const { authenticated } = useOutletContext();

  const isLoggedIn = localStorage.getItem("loggedin");

  if (authenticated || Boolean(isLoggedIn)) {
    return <Outlet />;
  }

  return (
    <>
      <Navigate to="login" state={{ failedRouting: true }} replace />;
    </>
  );
};

export default AuthRequired;
