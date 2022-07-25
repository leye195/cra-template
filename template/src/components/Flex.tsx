import React from "react";
import styled from "styled-components";
import type { CommonProps } from "types";

type Props = {
  className?: string;
  display?: "flex" | "inline-flex";
  alignItems?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  direction?: "row" | "column";
} & CommonProps;

const Container = styled.div<Props>`
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.direction};
`;

const Flex = function ({
  children,
  className = "",
  display = "flex",
  alignItems = "flex-start",
  justifyContent = "flex-start",
  direction = "row",
}: Props) {
  return (
    <Container
      className={className}
      display={display}
      alignItems={alignItems}
      justifyContent={justifyContent}
      direction={direction}
    >
      {children}
    </Container>
  );
};

export default Flex;
