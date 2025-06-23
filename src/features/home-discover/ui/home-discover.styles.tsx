"use client";

import styled from "styled-components";

export const SBlock = styled.div`
  position: relative;
`;

export const SHomeDiscover = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 40px;
  color: #603809;
  max-width: 1180px;
  margin: 0 auto;
`;

export const STitle = styled.span`
  font-size: 54px;
  font-weight: bold;
`;

export const SBody = styled.p`
  font-size: 20px;
  line-height: 34px;
`;

export const SInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: start;
  justify-items: start;
  height: 100%;
`;

export const SCap = styled.div`
  background-image: url("/cap-coffee.jpg");
  background-repeat: no-repeat;
  height: 380px;
`;

export const SCoffee = styled.span`
  background-image: url("/coffee_blast.png");
  background-repeat: no-repeat;
  position: absolute;
  bottom: -300px;
  left: 0;
  width: 100%;
  height: 100%;
`;
