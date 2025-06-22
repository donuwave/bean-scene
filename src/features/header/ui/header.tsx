"use client";

import { usePathname } from "next/navigation";
import React from "react";

import { getMenu } from "@/features/header";
import { Button } from "@/shared/ui";

import { SHeader, SLinks, SLogo, SMenuItem, SMenuList } from "./header.styles";

export const Header = () => {
  const menuList = getMenu();
  const pathname = usePathname();

  return (
    <SHeader>
      <SLogo>Bean Scene</SLogo>
      <SMenuList>
        {menuList.map((menu) => {
          const isSelected = menu.path === pathname;

          return (
            <SMenuItem $selected={isSelected} key={menu.value} href={menu.path}>
              {menu.label}
            </SMenuItem>
          );
        })}
      </SMenuList>
      <SLinks>
        <SMenuItem $selected={true} href="/">
          Sign In
        </SMenuItem>
        <Button type="m">SignUp</Button>
      </SLinks>
    </SHeader>
  );
};
