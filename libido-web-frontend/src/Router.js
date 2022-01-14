import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav/TopNav";
import MainPage from "./pages/Main/MainPage";
import DetailPage from "./pages/Detail/DetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/?/*" element={<MainPage />} />
        <Route path="/makeRoom" element={<MainPage />} />
        <Route path="/makeRoom?/*" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/detail?/*" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
