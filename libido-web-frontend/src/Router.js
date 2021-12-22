import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav/TopNav";
import MainPage from "./pages/Main/MainPage";
import DetailPage from "./pages/Detail/DetailPage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import FindPasswordPage from "./pages/Auth/FindPasswordPage";
const Router = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/?/*" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/password" element={<FindPasswordPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/detail?/*" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
