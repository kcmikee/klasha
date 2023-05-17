import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import "./modal.module.css";
import { CgClose } from "react-icons/cg";

function Modal({
  isOpen,
  onClose,
  children,
  width = 547,
  closeButtonStyle,
  closeButtonSize = 20,
  showCloseButton = true,
  noPadding = false,
  noBorderRadius = false,
  overlayClassName,
  style,
}: any) {
  const CustomContentStyles: any = {};
  if (width) {
    CustomContentStyles.maxWidth = width + "px";
  }
  if (noPadding) {
    CustomContentStyles.padding = 0;
  }
  if (noBorderRadius) {
    CustomContentStyles.borderRadius = 0;
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      ariaHideApp={false}
      overlayClassName={
        "modal--overlay" + (overlayClassName ? ` ${overlayClassName}` : "")
      }
      style={{
        content: CustomContentStyles,
      }}
    >
      {showCloseButton && (
        <CloseButton onClick={onClose} style={closeButtonStyle}>
          <CgClose size={closeButtonSize} />
        </CloseButton>
      )}
      <Body style={style}>{children}</Body>
    </ReactModal>
  );
}

const CloseButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  box-sizing: border-box;
  right: 17px;
  cursor: pointer;
  z-index: 2;
  svg {
    width: 15px;
    height: 15px;
    path {
      fill: black;
    }
  }
`;

const Body = styled.div`
  box-sizing: border-box;
  .title.title,
  h1:first-child {
    font-style: normal !important;
    font-weight: 800 !important;
    font-size: 25px !important;
    color: #291d4a !important;
    margin: 0px 0 10px 0 !important;
    width: calc(100% - 27px);
  }
  input,
  select {
    border-radius: 14px !important;
    height: 56px !important;
  }
  input[type="radio"] {
    height: initial !important;
  }
  .tip-text {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #3f3356;
    opacity: 0.5;
    margin-bottom: 25.5px;
  }
  .input-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .button-wrapper {
    margin-top: 28px;
    margin-bottom: 20px;
    height: 56px;
  }
`;

export default Modal;
