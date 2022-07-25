import type { CommonProps } from "types";

type Props = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: Props) => {
  return <button {...rest}>{children}</button>;
};

export default Button;
