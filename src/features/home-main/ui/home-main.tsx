import React from "react";

import { SCoffee, SDescription, SHomeMain, SInfo } from "./home-main.styles";

export const HomeMain = () => {
  return (
    <SHomeMain>
      <SInfo>
        <div>We have got your morning covered with</div>
        <SCoffee>Coffee</SCoffee>
        <SDescription>
          It is best to start your day with a cup of coffee. Discover the best
          flavours coffee you will ever have. We provide the best for our
          customers.
        </SDescription>
      </SInfo>
    </SHomeMain>
  );
};
