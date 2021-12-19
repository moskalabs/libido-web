import React from "react";
import styled from "styled-components";
import SideNav from "../../components/SideNav/SideNav";
import DetailTemplate from "../Detail/DetailTemplate";
import DetailFormContainer from "../../containers/DetaiFormlContainer";

const DetailPage = () => {
  return (
    <Container>
      <SideNavContainer>
        <SideNav />
      </SideNavContainer>
      <Inner>
        <DetailTemplate>
          <DetailFormContainer />
        </DetailTemplate>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1919px;
  margin: 0 auto;
`;

const SideNavContainer = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  z-index: 30;
`;

const Inner = styled.div`
  margin: 120px 0 0 100px;
  border-top: 1px solid #d9d9d9;
`;

export default DetailPage;
