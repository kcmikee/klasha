/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
import React from "react";
import styled from "styled-components";

const StepsContainerStyle = styled.section`
  overflow: hidden;
  height: ${(props) => (props.height ? props.height : "507px")};
  transition: height 0.3s;
  width: 100%;
  position: relative;
`;
const StepStyle = styled.div`
  transition: right 0.2s linear, opacity 0.1s linear, height 0.4s linear;
  position: ${(props) => (props.show ? "relative" : "absolute")};
  height: auto;
  width: 100%;
  top: 0;
  opacity: ${(props) => (props.show ? "1" : "0")};
  right: 0;
  form {
    z-index: 0.2;
  }
`;

export default (props) => {
  const [slideDirection, setSlideDirection] = React.useState("left");
  const [slideIndex, setSlideIndex] = React.useState(0);
  const [render, setRender] = React.useState(false);

  const next = (pos) => {
    setSlideIndex(pos || pos === 0 ? pos : slideIndex + 1);
    setSlideDirection("left");
  };

  const back = (pos) => {
    setSlideIndex(pos || pos === 0 ? pos : slideIndex - 1);
    setSlideDirection("right");
  };

  const done = (data) => {
    if (props.done) {
      props.done(data);
    }
    setSlideIndex(0);
  };

  return (
    <StepsContainerStyle style={props.style || {}} height={"fit-content"}>
      {React.Children.map(props.children, (child, idx) => {
        if (React.isValidElement) {
          return (
            <StepWrapper
              slideIndex={slideIndex}
              slideDirection={slideDirection}
              initialPos={idx > 0 ? -120 : 0}
              isVisible={slideIndex === idx}
            >
              {" "}
              {React.cloneElement(child, {
                next,
                back,
                done,
                render,
                slideIndex,
                isVisible: slideIndex === idx,
                forceRender() {
                  setRender();
                },
              })}
            </StepWrapper>
          );
        }
      })}
    </StepsContainerStyle>
  );
};

const StepWrapper = (props) => {
  const initialPos = React.useRef(props.initialPos);

  const isVisible = props.isVisible;

  let currentPos = initialPos.current;

  if (isVisible) {
    currentPos = 0;
  } else {
    if (initialPos.current === 0) {
      if (props.slideDirection === "left") {
        currentPos = 120;
      } else {
        if (props.slideDirection === "right") {
          currentPos = -120;
        }
      }
    }
  }

  return (
    <StepStyle show={isVisible} style={{ right: `${currentPos}%` }}>
      {props.children}
    </StepStyle>
  );
};
