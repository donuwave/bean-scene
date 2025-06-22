import React, { FC } from "react";

import { SButton } from "./button.styles";
import { ButtonProps } from "../model/button.types";

export const Button: FC<ButtonProps> = ({ children, type, ...props }) => {
  return (
    <SButton $type={type} {...props}>
      {children}
    </SButton>
  );
};
