import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div>
      <Header />
      <main>
        <Outlet context={{ authenticated, setAuthenticated }} />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
