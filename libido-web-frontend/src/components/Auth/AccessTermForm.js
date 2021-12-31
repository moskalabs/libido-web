import React from "react";
import styled from "styled-components";

const AccessTermForm = () => {
  return (
    <Container>
      <LogoName>LIBIDO</LogoName>
      <RegisterAccessTermContainer>
        <RegisterAccessTerm>
          <LeftInfoContainer>
            <AccessInfo>
              이용약관, 개인정보 수집 및 이용에 모두 동의합니다.
            </AccessInfo>
          </LeftInfoContainer>
          <CheckIcon data-buttonsort="checkButton" />
        </RegisterAccessTerm>
        <RegisterAccessTerm>
          <LeftInfoContainer>
            <AccessInfo>
              리비도 이용약관 동의 <span className="necessary">(필수)</span>
            </AccessInfo>
            <MoreInfoContainer>
              <div className="info">자세히</div>
              <ArrowIcon data-buttonsort="arrowButton" />
            </MoreInfoContainer>
          </LeftInfoContainer>
          <CheckIcon data-buttonsort="checkButton" />
        </RegisterAccessTerm>
        <RegisterAccessTerm>
          <LeftInfoContainer>
            <AccessInfo>
              개인정보 수집 및 이용에 대한 안내{" "}
              <span className="necessary">(필수)</span>
            </AccessInfo>
            <MoreInfoContainer>
              <div className="info">자세히</div>
              <ArrowIcon data-buttonsort="arrowButton" />
            </MoreInfoContainer>
          </LeftInfoContainer>
          <CheckIcon data-buttonsort="checkButton" />
        </RegisterAccessTerm>
        <RegisterAccessTerm>
          <LeftInfoContainer>
            <AccessInfo>이벤트 및 마케팅 수신 동의</AccessInfo>
            <MoreInfoContainer>
              <div className="info">자세히</div>
              <ArrowIcon data-buttonsort="arrowButton" />
            </MoreInfoContainer>
          </LeftInfoContainer>
          <CheckIcon data-buttonsort="checkButton" />
        </RegisterAccessTerm>
      </RegisterAccessTermContainer>
      <Footer>
        <NextButton data-buttonsort="nextButton">NEXT</NextButton>
      </Footer>
    </Container>
  );
};

const Container = styled.div``;

const LogoName = styled.p`
  color: #262f6a;
  font-size: 35px;
  font-weight: 700;
`;

const RegisterAccessTermContainer = styled.div`
  margin-top: 40px;
`;

const RegisterAccessTerm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 5px;
  border-bottom: 1px solid #d5d5d5;
`;

const LeftInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 200px;
`;

const AccessInfo = styled.div`
  font-size: 18px;
  margin-right: 10px;

  & .necessary {
    color: #8d8d8d;
  }
`;

const MoreInfoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & .info {
    font-size: 14px;
    color: #262f6a;
  }
`;

const ArrowIcon = styled.div`
  width: 20px;
  height: 20px;
  background: url(./images/icon_spread.png) no-repeat;
  background-position: center;
  background-size: contain;
`;

const CheckIcon = styled.div`
  width: 40px;
  height: 40px;
  background: url(./images/icon_unactive_check.png) no-repeat;
  background-position: center;
  background-size: contain;
  cursor: pointer;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row-reverse;
`;

const NextButton = styled.button`
  padding: 12px 18px;
  margin-top: 20px;
  border-radius: 3px;
  background: #262f6a;
  border-style: none;
  color: white;
  cursor: pointer;
`;

export default AccessTermForm;
