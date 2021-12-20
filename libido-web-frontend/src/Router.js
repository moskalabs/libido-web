import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav/TopNav";
import SideNav from "./components/SideNav/SideNav";
import MainPage from "./pages/Main/MainPage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import FindPasswordPage from "./pages/Auth/FindPasswordPage";
const Router = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <SideNav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/password" element={<FindPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
