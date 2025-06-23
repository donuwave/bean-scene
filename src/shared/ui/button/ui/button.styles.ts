"use client";

import styled, { css } from "styled-components";

import { IButtonStyles } from "../model/button.types";

export const SButton = styled.button<IButtonStyles>`
  background: #f9c06a;
  outline: none;
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  ${({ $type }) =>
    $type === "l" &&
    css`
      font-family: var(--font-playfair-sans), serif;
      font-size: 22px;
      font-weight: 500;
      border-radius: 4px;
      height: 60px;
      padding: 0 20px;
      color: #603809;
    `}

  ${({ $type, $isShadow }) =>
    $type === "m" &&
    css`
      font-family: var(--font-playfair-sans), serif;
      border-radius: 30px;
      color: #1e1e1e;
      font-size: 16px;
      font-weight: bold;
      height: 48px;
      padding: 0 30px;
      box-shadow: ${$isShadow ? "0 16px 32px 0 rgba(0, 0, 0, 0.3)" : null};
    `}
`;
