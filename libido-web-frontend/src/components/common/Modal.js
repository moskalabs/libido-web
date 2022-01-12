import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ isShowing, hide, children }) => {
  if (isShowing) {
    document.body.style.setProperty("overflow", "hidden");
    return ReactDOM.createPortal(
      <Fragment>
        <BodyBlackoutStyle onClick={hide} />
        {children}
      </Fragment>,
      document.body
    );
  } else return null;
};

const BodyBlackoutStyle = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
  z-index: 1100;
`;

export default Modal;
