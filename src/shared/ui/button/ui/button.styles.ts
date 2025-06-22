"use client";

import styled, { css } from "styled-components";

import { IButtonStyles } from "../model/button.types";

export const SButton = styled.button<IButtonStyles>`
  background: #f9c06a;
  outline: none;
  border: none;

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

  ${({ $type }) =>
    $type === "m" &&
    css`
      font-family: var(--font-playfair-sans), serif;
      border-radius: 40px;
      color: #1e1e1e;
    `}
`;
