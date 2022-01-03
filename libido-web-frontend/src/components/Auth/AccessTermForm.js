import React, { useEffect, useState } from "react";
import styled from "styled-components";

const AccessTermForm = ({ checkCurrentAdvertiseAccess, goToRegisterForm }) => {
  const [checkInfo, setCheckInfo] = useState({
    webAccessCheck: false,
    privateInfoCheck: false,
    advertiseCheck: false,
  });
  const [detailInfo, setDetailInfo] = useState({
    webAccessDetail: false,
    privateInfoDetail: false,
    advertiseDetail: false,
  });

  const { advertiseCheck } = checkInfo;

  const checkPrimaryAccessTerms = () => {
    const { webAccessCheck, privateInfoCheck } = checkInfo;
    if (webAccessCheck && privateInfoCheck) return false;
    else return true;
  };

  const isAllChecked = () => {
    let allChecked = true;
    for (const value of Object.values(checkInfo)) {
      if (!value) allChecked = false;
    }
    return allChecked;
  };

  const isCheckActive = checkActiveState => {
    const currentCheckActiveState = checkInfo[checkActiveState];

    if (checkActiveState === "allCheck") return isAllChecked();
    if (currentCheckActiveState) return true;
  };

  const setCheckValue = (currentTargetedState, currentButtonName) => {
    if (currentTargetedState === "checkInfo")
      if (currentButtonName === "allCheck") {
        if (isAllChecked()) {
          setCheckInfo({
            ...checkInfo,
            webAccessCheck: false,
            privateInfoCheck: false,
            advertiseCheck: false,
          });
        } else {
          setCheckInfo({
            ...checkInfo,
            webAccessCheck: true,
            privateInfoCheck: true,
            advertiseCheck: true,
          });
        }
      } else {
        setCheckInfo({
          ...checkInfo,
          [currentButtonName]: !checkInfo[currentButtonName],
        });
      }
    else if (currentTargetedState === "detailInfo") {
      setDetailInfo({
        ...detailInfo,
        [currentButtonName]: !detailInfo[currentButtonName],
      });
    }
  };

  const checkClickSort = event => {
    const currentTargetElementInfo = {
      nodeName: event.target.nodeName,
      className: event.target.className,
    };

    if (
      currentTargetElementInfo.nodeName !== "BUTTON" &&
      currentTargetElementInfo.className !== "detailInfo"
    )
      return;

    const currentTargetButtonSort = event.target.dataset.buttonsort;
    const currentButtonName = event.target.name
      ? event.target.name
      : event.target.nextSibling.name;

    switch (currentTargetButtonSort) {
      case "checkButton":
        setCheckValue("checkInfo", currentButtonName);
        break;
      case "arrowButton":
        setCheckValue("detailInfo", currentButtonName);
        break;
      case "nextButton":
        goToRegisterForm();
        break;
      default:
        setCheckValue("detailInfo", currentButtonName);
    }
  };

  useEffect(() => {
    checkCurrentAdvertiseAccess(advertiseCheck);
  }, [checkCurrentAdvertiseAccess, advertiseCheck]);

  return (
    <Container onClick={checkClickSort}>
      <LogoName>LIBIDO</LogoName>
      <RegisterAccessTermContainer>
        <RegisterAccessTerm>
          <LeftInfoContainer>
            <AccessInfo>
              이용약관, 개인정보 수집 및 이용에 모두 동의합니다.
            </AccessInfo>
          </LeftInfoContainer>
          <CheckIcon
            active={isCheckActive("allCheck")}
            name="allCheck"
            data-buttonsort="checkButton"
          />
        </RegisterAccessTerm>
        <RegisterAccessTerm>
          <LeftInfoContainer>
            <AccessInfo>
              리비도 이용약관 동의 <span className="necessary">(필수)</span>
            </AccessInfo>
            <MoreInfoContainer>
              <div className="detailInfo">자세히</div>
              <ArrowIcon name="webAccessDetail" data-buttonsort="arrowButton" />
            </MoreInfoContainer>
          </LeftInfoContainer>
          <CheckIcon
            active={isCheckActive("webAccessCheck")}
            name="webAccessCheck"
            data-buttonsort="checkButton"
          />
        </RegisterAccessTerm>
        <RegisterAccessTerm>
          <LeftInfoContainer>
            <AccessInfo>
              개인정보 수집 및 이용에 대한 안내{" "}
              <span className="necessary">(필수)</span>
            </AccessInfo>
            <MoreInfoContainer>
              <div className="detailInfo">자세히</div>
              <ArrowIcon
                name="privateInfoDetail"
                data-buttonsort="arrowButton"
              />
            </MoreInfoContainer>
          </LeftInfoContainer>
          <CheckIcon
            active={isCheckActive("privateInfoCheck")}
            name="privateInfoCheck"
            data-buttonsort="checkButton"
          />
        </RegisterAccessTerm>
        <RegisterAccessTerm>
          <LeftInfoContainer>
            <AccessInfo>이벤트 및 마케팅 수신 동의</AccessInfo>
            <MoreInfoContainer>
              <div className="detailInfo">자세히</div>
              <ArrowIcon name="advertiseDetail" data-buttonsort="arrowButton" />
            </MoreInfoContainer>
          </LeftInfoContainer>
          <CheckIcon
            active={isCheckActive("advertiseCheck")}
            name="advertiseCheck"
            data-buttonsort="checkButton"
          />
        </RegisterAccessTerm>
      </RegisterAccessTermContainer>
      <Footer>
        <NextButton
          disabled={checkPrimaryAccessTerms()}
          name="nextToRegisterButton"
          data-buttonsort="nextButton"
        >
          NEXT
        </NextButton>
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

const ArrowIcon = styled.button`
  width: 20px;
  height: 20px;
  background: url(./images/icon_spread.png) no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
  cursor: pointer;
`;

const CheckIcon = styled.button`
  width: 40px;
  height: 40px;
  background: ${({ active }) =>
      active
        ? "url(./images/icon_active_check.png)"
        : "url(./images/icon_unactive_check.png)"}
    no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
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
