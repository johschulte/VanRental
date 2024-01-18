import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import "./index.css";
import About from "./pages/About.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Vans from "./pages/Vans/Vans.jsx";
import "./server";
import VanDetail from "./pages/Vans/VanDetail.jsx";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import HostLayout from "./pages/Host/HostLayout.jsx";
import VansHost from "./pages/Host/VansHost.jsx";
import VanDetailsHost from "./pages/Host/HostDetails.jsx";
import HostVandetailsLayout from "./pages/Host/HostVandetailsLayout.jsx";
import HostPricing from "./pages/Host/HostPricing.jsx";
import HostPhotos from "./pages/Host/HostPhotos.jsx";
import NotFound from "./components/NotFound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<VansHost />} />
          <Route path="vans/:id" element={<HostVandetailsLayout />}>
            <Route index element={<VanDetailsHost />} />
            <Route path="pricing" element={<HostPricing />} />
            <Route path="photos" element={<HostPhotos />} />
          </Route>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
