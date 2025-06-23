import { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
  type: "l" | "m";
  isShadow?: boolean;
}

export interface IButtonStyles {
  $type: ButtonProps["type"];
  $isShadow?: boolean;
}
