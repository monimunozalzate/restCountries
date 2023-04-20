import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import HomePage from "../../pages/homePage/HomePage";
import DetailsPage from "../../pages/detailsPage/DetailsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/{name}" element={<DetailsPage />} />
    </Routes>
  );
};

export default AppRoutes;
