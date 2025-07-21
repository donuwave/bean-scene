import React from "react";

import { Button } from "@/shared/ui";

import {
  SCoffeeDifferent,
  SContentCoffee,
  STitle,
} from "./coffee-different.styles";

export const CoffeeDifferent = () => {
  return (
    <SCoffeeDifferent>
      <SContentCoffee>
        <STitle>Get a chance to have an Amazing morning</STitle>
        <div>
          We are giving you are one time opportunity to experience a better life
          with coffee
        </div>
        <Button type="m">Order Now</Button>
      </SContentCoffee>
    </SCoffeeDifferent>
  );
};
