"use client";

import React from "react";

import { CoffeeComment } from "@/features/coffee-comment";
import { CoffeeDifferent } from "@/features/coffee-different";
import { CoffeeOrder } from "@/features/coffee-order";
import { HomeDiscover } from "@/features/home-discover";
import { HomeMain } from "@/features/home-main";

import { SHome, SInfo } from "./home.styles";

export const Home = () => {
  return (
    <SHome>
      <SInfo>
        <HomeMain />
        <HomeDiscover />
        <CoffeeOrder />
        <CoffeeDifferent />
        <CoffeeComment />
      </SInfo>
    </SHome>
  );
};
