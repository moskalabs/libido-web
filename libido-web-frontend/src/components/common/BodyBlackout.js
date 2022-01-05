import { useDispatch } from "react-redux";
import styled from "styled-components";

const BodyBlackout = ({
  modalSort,
  setAuthModalVisible,
  isVisibleAuthModal,
}) => {
  const dispatch = useDispatch();
  if (isVisibleAuthModal)
    document.querySelector("body").style.setProperty("overflow", "hidden");
  return (
    <BodyBlackoutStyle
      onClick={() => {
        dispatch(setAuthModalVisible(modalSort));
      }}
    />
  );
};

const BodyBlackoutStyle = styled.div`
  position: absolute;
  z-index: 1010;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
`;

export default BodyBlackout;
