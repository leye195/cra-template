import Home from "pages/home";
import React from "react";
import { Route, Routes } from "react-router";

const Routers = function () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Routers;
