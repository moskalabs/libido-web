import React from "react";
import CategoryBar from "../CategoryBar/CategoryBar";
import MainTemplate from "./MainTemplate";
import MainForm from "./MainForm";

const MainPage = () => {
  return (
    <>
      <CategoryBar />
      <MainTemplate>
        <MainForm />
      </MainTemplate>
    </>
  );
};

export default MainPage;
