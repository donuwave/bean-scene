import React, { FC } from "react";

import { SButton } from "./button.styles";
import { ButtonProps } from "../model/button.types";

export const Button: FC<ButtonProps> = ({
  children,
  type,
  isShadow = true,
  ...props
}) => {
  return (
    <SButton $type={type} $isShadow={isShadow} {...props}>
      {children}
    </SButton>
  );
};
