import React from "react";
import { useSelector } from "react-redux";
import DetailForm from "../pages/Detail/DetailForm";

const DetailFormContainer = () => {
  const contents = useSelector(({ search }) => search.topNav.contents);

  return <DetailForm contents={contents} />;
};

export default DetailFormContainer;
