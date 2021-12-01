import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
