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
  min-width: 1328px;
  max-height: 100px;
  padding: 15px 400px;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  background-color: #fff;
`;

const CategoryList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-height: 30px;
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
      border-bottom: 4px solid #262f6a;
      color: #262f6a;
    `}
`;

export default CategoryBar;
