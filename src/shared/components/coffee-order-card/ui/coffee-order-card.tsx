import React from "react";

import { Button } from "@/shared/ui";

import {
  SCard,
  SCost,
  SDescription,
  SFooter,
  STitle,
} from "./coffee-order-card.styles";

export const CoffeeOrderCard = () => {
  return (
    <SCard>
      <img src="/cup-variant.jpg" />
      <STitle>Cappuccino</STitle>
      <SDescription>Coffee 50% | Milk 50%</SDescription>
      <SCost>$8.50</SCost>
      <SFooter>
        <Button type="m">Order Now</Button>
      </SFooter>
    </SCard>
  );
};
