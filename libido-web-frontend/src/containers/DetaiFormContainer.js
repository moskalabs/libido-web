import React from "react";
import { useSelector } from "react-redux";
import DetailForm from "../pages/Detail/DetailForm";

const DetailFormContainer = () => {
  const { contents, token } = useSelector(({ search }) => ({
    contents: search.contents,
    token: search.token,
  }));

  console.log(contents, token);

  if (contents.length === 0) return null;
  else return <DetailForm contents={contents} />;
};

export default DetailFormContainer;
