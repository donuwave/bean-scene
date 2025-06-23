import React from "react";

import { CoffeeOrderCard } from "@/shared/components";

import {
  SCoffeeOrder,
  SDescription,
  SList,
  STitle,
} from "./coffee-order.styles";

export const CoffeeOrder = () => {
  return (
    <SCoffeeOrder>
      <STitle>Enjoy a new blend of coffee style</STitle>
      <SDescription>
        Explore all flavours of coffee with us. There is always a new cup worth
        experiencing
      </SDescription>
      <SList>
        <CoffeeOrderCard />
        <CoffeeOrderCard />
        <CoffeeOrderCard />
        <CoffeeOrderCard />
      </SList>
    </SCoffeeOrder>
  );
};
