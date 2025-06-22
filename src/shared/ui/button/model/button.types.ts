import { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
  type: "l" | "m";
}

export interface IButtonStyles {
  $type: ButtonProps["type"];
}
