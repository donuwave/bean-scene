"use client";

import Link from "next/link";
import styled from "styled-components";

import { IMenuItem } from "../modal/menu.types";

export const SHeader = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  width: 100%;
  position: absolute;
`;

export const SLogo = styled.h3`
  font-size: 32px;
`;

export const SMenuList = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const SMenuItem = styled(Link)<IMenuItem>`
  color: white;
  text-decoration: ${({ $selected }) => ($selected ? "underline" : "none")};
`;
export const SLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
