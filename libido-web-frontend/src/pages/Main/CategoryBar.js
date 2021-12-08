import React from "react";
import styled, { css } from "styled-components";

const CategoryBar = ({ curCategory, syncCategoryPath }) => {
  const checkActive = category => {
    return category === curCategory;
  };

  return (
    <Container>
      <CategoryList onClick={syncCategoryPath}>
        <MoveCategoryButton
          active={checkActive("libido")}
          data-category="libido"
        >
          LIBIDO
        </MoveCategoryButton>
        <MoveCategoryButton
          active={checkActive("trending")}
          data-category="trending"
        >
          TRENDING
        </MoveCategoryButton>
        <MoveCategoryButton
          active={checkActive("friends")}
          data-category="friends"
        >
          FRIENDS
        </MoveCategoryButton>
      </CategoryList>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  min-width: 1330px;
  padding: 15px 400px;
  border: 1px solid #979797;
  border-radius: 100px;
  background-color: #fff;
`;

const CategoryList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MoveCategoryButton = styled.button`
  border: none;
  background: none;
  font-size: 16px;
  font-weight: 600;
  color: #606770;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      font-weight: 700;
      border-bottom: 3px solid #4dbce9;
      color: #4dbce9;
    `}
`;

export default CategoryBar;
