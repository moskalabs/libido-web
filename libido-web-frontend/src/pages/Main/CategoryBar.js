import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CategoryBar = () => {
  return (
    <Container>
      <CategoryList>
        <MoveCategoryButton>LIBIDO</MoveCategoryButton>
        <MoveCategoryButton className="noActive">TRENDING</MoveCategoryButton>
        <MoveCategoryButton className="noActive">FRIENDS</MoveCategoryButton>
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
  color: #4dbce9;
  cursor: pointer;

  &.noActive {
    //추후 동적 스타일 생성
    color: #606770;
  }
`;

export default CategoryBar;
