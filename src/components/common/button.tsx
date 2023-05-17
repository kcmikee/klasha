"use client";

import React from "react";
import styled, { css } from "styled-components";

import Loader from "./Loader";
import { Colors } from "./input";

interface ButtonProps {
  text?: string;
  textColor?: string;
  onAction?: any;
  background?: string;
  border?: string;
  width?: string;
  height?: string;
  mobileWidth?: string;
  outline?: any;
  type?: any;
  loading?: boolean;
  disabled?: boolean;
  textSize?: string;
  link?: boolean;
  icon?: any;
  round?: string;
  buttonInnerStyle?: any;
  style?: any;
}

// interface TimerProps{
//   style?:any,
//   duration?:number,
//   text?:string,
//   timeoutText?:string,
//   onClick?:string,
//   right?:number,
//   left?:number,
//   top?:number,
//   bottom?:number,
//   color?:string
// }

interface StyleProps {
  width?: string;
  height?: string;
  smHeight?: string;
  background?: string;
  disabled?: boolean;
  round?: string;
  border?: string;
  outline?: string;
  danger?: any;
  bold?: any;
  semiBold?: any;
  link?: any;
  mobileWidth?: string;
  mobileMargin?: string;
}

export const Style = styled.div<StyleProps>`
  width: ${(props) => props.width};
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  button {
    width: 100%;
    height: ${(props) => props.height || props.smHeight || "55px"};
    background-color: ${(props) => props.background};
    opacity: ${(props) => (props.disabled ? "0.5" : "1")};
    border-radius: ${(props) => (props.round ? props.round : "12px")};
    border: ${(props) => (props.border ? props.border : "none")};
    outline: none;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: ${(props) => props.color ?? Colors.white};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    ${(props) =>
      props.outline &&
      css`
        background-color: #ffffff;
        color: #1949d8;
        border: 1px solid #1949d8;
        ${({ danger }: { danger?: any }) =>
          danger &&
          css`
            border: 1px solid #e02929;
            color: #e02929;
          `}
      `}
    ${(props) =>
      props.bold &&
      css`
        font-size: 18px;
      `}
    ${(props) =>
      props.semiBold &&
      css`
        font-size: 14px;
      `}
    ${(props) =>
      props.link &&
      css`
        background: transparent;
        color: ${props.color};
        height: fit-content;
        width: fit-content;
      `}
  }
  @media only screen and (max-width: 920px) {
    width: ${(props) => props.mobileWidth || "222px"};
    margin: ${(props) => props.mobileMargin || "auto"};
    ${(props) =>
      props.link &&
      css`
        width: fit-content;
      `}
  }
`;

const Button = ({
  text,
  textColor,
  onAction,
  background,
  border,
  width,
  type,
  loading,
  disabled,
  textSize,
  link,
  icon,
  buttonInnerStyle,
  ...rest
}: ButtonProps) => {
  return (
    <Style
      className="button-wrapper"
      link={!!link}
      border={border}
      background={background}
      width={width}
      disabled={disabled || loading}
      {...rest}
    >
      {/* {icon || null} */}
      <button
        style={{
          color: textColor || "ffffff",
          ...buttonInnerStyle,
          //fontSize: textSize || 'initial'
        }}
        onClick={onAction}
        type={type}
        disabled={disabled || loading}
      >
        {loading ? (
          <Loader color="#fff" size={15} />
        ) : (
          <>
            {!!icon && icon}
            {!!text && text}
          </>
        )}
      </button>
    </Style>
  );
};

Button.defaultProps = {
  text: "Test button",
  onAction: () => {},
  background: Colors.blue,
};

export default Button;

// export const TimerButton = ({
//   style,
//   duration,
//   text,
//   timeoutText,
//   onClick,
//   right,
//   left,
//   top,
//   bottom,
//   color = '#1949D8',
//   ...rest
// }:TimerProps) => {
//   const [count, setCount] = React.useState(duration || 0);

//   const buttonStyle = {
//     backgroundColor: 'transparent',
//     position: 'absolute',
//     color: count ? '#992727' : color,
//     border: 0,
//     outline: 'none',
//     zIndex: 1,
//     right,
//     left,
//     top,
//     bottom,
//     ...style
//   };

//   React.useEffect(() => {
//     if (count > 0) {
//       const timer = setInterval(() => {
//         setCount(count - 1);
//       }, 1000);

//       return () => {
//         clearInterval(timer);
//       };
//     }
//   });

//   const displayText = count ? `${text} ${count}s` : timeoutText;

//   return (
//     <button
//       onClick={onClick}
//       type={'button'}
//       style={buttonStyle}
//       {...rest}
//       disabled={count}
//     >
//       {displayText}
//     </button>
//   );
// };
