import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav/MainNav";
import SideNav from "./components/SideNav/SideNav";
import MainPage from "./pages/Main/MainPage";

const Router = () => {
  return (
    <BrowserRouter>
      <MainNav />
      <SideNav />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
