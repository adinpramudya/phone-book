import React from "react";
import { BtnSubmit } from "./Button.styled";

const Button: React.FC<{ text: string }> = ({ text }) => {
  return <BtnSubmit>{text}</BtnSubmit>;
};

export default Button;
