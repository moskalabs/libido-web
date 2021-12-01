import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import CategoryBar from "../pages/Main/CategoryBar";

const CategoryBarContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useLocation().search;

  const params = new URLSearchParams(query);
  const category = params.get("category");

  console.log(category);

  const syncCategoryPath = event => {
    const curElem = event.target.nodeName;
    const eventTargetElem = "BUTTON";

    if (curElem !== eventTargetElem) return;

    const curCategory = event.target.dataset.category;

    navigate(`/?category=${curCategory}`);
  };

  return <CategoryBar syncCategoryPath={syncCategoryPath} />;
};

export default CategoryBarContainer;
