import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedin"));
  }, []);

  return (
    <div>
      <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
      <main>
        <Outlet context={{ authenticated, setAuthenticated, setLoggedIn }} />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
