"use client";
import React from "react";
import { BiSearch } from "react-icons/bi";
import styled, { css } from "styled-components";
import Loader from "./Loader";
import PasswordToggle from "./PasswordToggle";

export const Colors = {
  black: "#000000",
  white: "#FFFFFF",
  dark: "#3F3356",
  blue: "#1949D8",
  green: "#00957B",
  orange: "#FF8028",
  red: "#e12d39",
  gray: "#3C4443",
  bg: "#F7F5FD",
  accentBlue: "#c1d2ef",
  border: "#777777",
};

interface InputProps {
  id?: string;
  width?: string;
  label?: string;
  onChange?: any;
  type?: string;
  name?: string;
  onBlur?: any;
  onFocus?: any;
  register?: any;
  value?: any;
  containerMargin?: string;
  passwordToggle?: boolean;
  bg?: string;
  pencil?: boolean;
  errorText?: any;
  mobileWidth?: string;
  mobileHeight?: string;
  marginRight?: string;
  marginLeft?: string;
  minWidth?: string;
  marginBottom?: string;
  height?: string;
  fieldDescription?: string;
  fetching?: boolean;
  disabled?: boolean;
  search?: boolean;
  maxLength?: number;
  pattern?: any;
}

export const ErrorText = styled.span`
  display: block;
  font-size: 14px;
  color: firebrick !important;
  font-weight: 400;
  padding-left: 10px;
  margin-top: 4px;
  width: 100%;
  line-height: 25px;
  @media only screen and (max-width: 920px) {
    width: 100%;
  }
`;
export const FetchingLoader = styled.span`
  position: absolute;
  top: 70%;
  right: 15px;
`;

export const Style = styled.div<{
  width?: string;
  marginBottom?: string;
  containerMargin?: string;
  marginRight?: string;
  marginLeft?: string;
  minWidth?: string;
  label?: string;
  disabled?: boolean;
  height?: string;
  bg?: string;
  error?: any;
  mobileWidth?: string;
  mobileHeight?: string;
}>`
  position: relative;
  width: ${(props) => props.width};
  margin-bottom: ${(props) => props.marginBottom || "16px"};
  margin: ${(props) => props.containerMargin};
  margin-right: ${(props) => props.marginRight};
  margin-left: ${(props) => props.marginLeft};
  text-align: start;
  min-width: ${(props) => props.minWidth};
  ${(props) =>
    props.label &&
    css`
      label {
        font-style: normal;
        font-size: 16px;
        line-height: 26px;
        color: ${Colors.dark};
      }
    `}
  input[type="date"] {
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
    background: transparent;
    ${(props) =>
      props.disabled &&
      css`
        background-color: whitesmoke;
      `}
  }
  input {
    width: 100%;
    border: none;
    outline: none;
    height: ${(props) => props.height || "56px"};
    -webkit-appearance: none !important;
    -moz-appearance: none;
    border: 1px solid ${Colors.accentBlue};
    box-sizing: border-box;
    border-radius: 10px;
    padding: 0 18.13px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 50px;
    color: ${Colors.dark};
    box-shadow: none;
    ${(props) =>
      props.bg &&
      css`
        background-color: ${props.bg};
        border: none;
      `}
    ${(props) =>
      props.error &&
      css`
        border: 1.5px solid #e12d39;
        color: #e12d39;
        &:focus {
          border-color: #e12d39;
        }
      `}
    ${(props) =>
      props.disabled &&
      css`
        background-color: whitesmoke;
      `}
  }
  input:focus {
    border: 1px solid ${Colors.green};
  }
  input::placeholder {
    color: ${Colors.gray};
    font-size: 12px;
  }
  .fetching {
    ${(props) =>
      props.disabled &&
      css`
        /* background-color: whitesmoke; */
      `}
  }
  @media only screen and (max-width: 920px) {
    width: ${(props) => props.mobileWidth || "unset"};
    min-width: auto;

    input::placeholder {
      color: rgba(63, 51, 86, 0.5);
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 780px) {
    input::placeholder {
      font-size: 12px;
    }

    ${(props) =>
      props.mobileHeight &&
      css`
        height: ${props.mobileHeight};
      `}
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0 !important;
  }

  input[type="number"].hidden-up-down-arrrow-input {
    -moz-appearance: textfield !important;
    margin: 0 !important;
  }
`;

const Input = ({
  name,
  type,
  label,
  value,
  width,
  onChange,
  containerMargin,
  passwordToggle,
  disabled,
  bg,
  id,
  search,
  pencil,
  register,
  errorText,
  onBlur,
  onFocus,
  mobileWidth,
  mobileHeight,
  marginRight,
  marginLeft,
  minWidth,
  marginBottom,
  height,
  fieldDescription,
  fetching,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = React.useState(type === "text");
  return (
    <Style
      width={width}
      containerMargin={containerMargin}
      error={!!errorText}
      label={label}
      mobileWidth={mobileWidth}
      mobileHeight={mobileHeight}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      minWidth={minWidth}
      height={height}
      bg={bg}
      disabled={disabled}
    >
      <label style={{ position: "relative" }}>
        {label}

        <input
          name={name}
          value={value}
          required
          type={passwordToggle ? (showPassword ? "text" : "password") : type}
          onChange={onChange}
          onBlur={onBlur}
          // {...register(name)}
          {...rest}
        />
        {/* {pencil && <PencilToggle />} */}
        {fetching && (
          <FetchingLoader>
            <Loader />
          </FetchingLoader>
        )}
        {search && (
          <div className="absolute right-4 top-1">
            <BiSearch />
          </div>
        )}
        {passwordToggle && (
          <PasswordToggle
            initialValue={showPassword}
            onChange={(v: any) => setShowPassword(v)}
          />
        )}
      </label>
      {!!fieldDescription && (
        <span
          style={{
            display: "inline-block",
            marginTop: "6px",
            marginLeft: 10,
            fontSize: 14,
            color: "#5f6368",
          }}
        >
          {fieldDescription}
        </span>
      )}
      {errorText && <ErrorText>{errorText}</ErrorText>}
    </Style>
  );
};

Input.defaultProps = {
  placeholder: "",
  type: "text",
  onChange: () => {},
  width: "100%",
};

export default Input;
