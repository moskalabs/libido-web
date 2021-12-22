import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ContentForm from "../ContentForm";

const DetailForm = ({ contents }) => {
  const query = useLocation().search;

  const searchKeyword = new URLSearchParams(query).get("search");

  return (
    <Container>
      <CategoryBox>
        <Name>{`${searchKeyword} 검색 결과`}</Name>
        <SearchList>
          {contents.map(({ title, category, image_url, link_url }, index) => {
            return (
              <ContentForm
                currentCategory="검색 영상"
                key={index}
                title={title}
                image_url={image_url}
                link_url={link_url}
                category={category}
              />
            );
          })}
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
