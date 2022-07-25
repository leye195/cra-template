import React from "react";
import type { CommonProps } from "types";

type Props = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, type, ...rest }: Props) => (
  <button type={type} {...rest}>
    {children}
  </button>
);

export default Button;
