import React from "react";
import styled from "styled-components";
import ContentForm from "../ContentForm";

const DetailForm = ({ contents }) => {
  return (
    <Container>
      <CategoryBox>
        <Name>검색 결과</Name>
        <SearchList>
          <ContentForm />
        </SearchList>
      </CategoryBox>
    </Container>
  );
};

const Container = styled.div``;

const CategoryBox = styled.div`
  min-width: 840px;
  margin-right: 50px;
`;

const Name = styled.div`
  margin-bottom: 15px;
  font-size: 28px;
  font-weight: 600;
  color: #262f6a;
`;

const SearchList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

export default DetailForm;
