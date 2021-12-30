import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav/TopNav";
import MainPage from "./pages/Main/MainPage";
import DetailPage from "./pages/Detail/DetailPage";
import LoginPage from "./pages/Auth/LoginPage";

const Router = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/?/*" element={<MainPage />} /> */}
        <Route path="/?auth=login" element={<LoginPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/detail?/*" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
