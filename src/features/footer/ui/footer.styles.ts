"use client";

import styled from "styled-components";

export const SFooter = styled.footer`
  display: grid;
  grid-template-rows: 1fr 1.5fr;
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const SUpFooter = styled.div`
  background-image: url("/footer-up.jpg");
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 200px;
`;

export const SMainFooter = styled.div`
  background-image: url("/footer-main.jpg");
  background-color: #492b09;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 200px;
`;

export const SCap = styled.div`
  background-image: url("/pngwing 1.png");
  position: absolute;
  width: 445px;
  top: 120px;
  height: 360px;
  background-repeat: no-repeat;
`;
