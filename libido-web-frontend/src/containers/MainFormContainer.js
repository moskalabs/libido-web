import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainForm from "../pages/Main/MainForm";

const MainFormContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { sort } = useSelector(({ category }) => ({
    sort: category.sort,
  }));

  console.log(sort);

  return <MainForm />;
};

export default MainFormContainer;
