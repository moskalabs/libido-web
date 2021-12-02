import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { changeCategory, initializeCategory } from "../modules/category";
import CategoryBar from "../pages/Main/CategoryBar";

const CategoryBarContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { sort } = useSelector(({ category }) => ({
    sort: category.sort,
  }));
  const query = useLocation().search;

  const params = new URLSearchParams(query);
  const category = params.get("category");

  const syncCategoryPath = event => {
    const curElem = event.target.nodeName;
    const eventTargetElem = "BUTTON";
    const curCategory = event.target.dataset.category;

    if (curElem !== eventTargetElem || category === curCategory) return;

    dispatch(changeCategory(curCategory));

    navigate(`/?category=${curCategory}`);
  };

  useEffect(() => {
    dispatch(initializeCategory("libido"));
  }, [dispatch]);

  return <CategoryBar curCategory={sort} syncCategoryPath={syncCategoryPath} />;
};

export default CategoryBarContainer;
