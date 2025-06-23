import React from "react";

import { Button } from "@/shared/ui";

import {
  SBlock,
  SBody,
  SCap,
  SCoffee,
  SHomeDiscover,
  SInfo,
  STitle,
} from "./home-discover.styles";

export const HomeDiscover = () => {
  return (
    <SBlock>
      <SHomeDiscover>
        <SInfo>
          <STitle>Discover the best coffee</STitle>
          <SBody>
            Bean Scene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </SBody>
          <Button isShadow={false} type="m">
            Learn More
          </Button>
        </SInfo>
        <SCap />
      </SHomeDiscover>
      <SCoffee />
    </SBlock>
  );
};
