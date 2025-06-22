import React, { FC } from "react";

import { SInput } from "./input.styles";

interface IInputProps {
  placeholder?: string;
}

export const Input: FC<IInputProps> = ({ ...props }) => {
  return <SInput {...props} />;
};
