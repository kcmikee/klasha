import React, { useState, useEffect } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import styled, { css } from "styled-components";

const PasswordToggleBlock = styled.span`
  position: absolute;
  z-index: 1;
  margin: 0;
  top: 40px;
  right: 15px;
  border: none;
  background-color: transparent;
  // margin-left: -35px;
  opacity: 0.6;
  transition: 0.5s ease all;
  -webkit-transition: 0.5s ease all;
  -moz-transition: 0.5s ease all;
  ${(props) =>
    props.show &&
    css`
      opacity: 1;
    `}
`;

export default function PasswordToggle({ onChange, initialValue = false }) {
  const [show, setShow] = useState(initialValue);

  useEffect(() => {
    onChange(show);
  }, [show, onChange]);

  return (
    <PasswordToggleBlock onClick={() => setShow(!show)} show={show}>
      {show ? <BsEye size={23} /> : <BsEyeSlash size={23} />}
    </PasswordToggleBlock>
  );
}
