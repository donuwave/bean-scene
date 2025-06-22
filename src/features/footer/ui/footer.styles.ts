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
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const SMainFooter = styled.div`
  background-image: url("/footer-main.jpg");
  background-color: #492b09;
  width: 100%;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  padding-top: 200px;
`;

export const SCapLeft = styled.div`
  background-image: url("/cap-left.png");
  position: absolute;
  width: 445px;
  top: 120px;
  height: 360px;
  background-repeat: no-repeat;
`;

export const SCapRight = styled.div`
  background-image: url("/cap-left.png");
  position: absolute;
  width: 445px;
  top: 120px;
  right: 0;
  height: 360px;
  background-repeat: no-repeat;
  transform: scaleX(-1);
`;

export const STitle = styled.p`
  font-size: 54px;
  font-weight: bold;
`;

export const SDescription = styled.p`
  font-size: 20px;
  padding-bottom: 16px;
`;

export const SForm = styled.form`
  display: flex;
  align-items: center;
  width: 650px;
  position: relative;
`;

export const SButton = styled.div`
  position: absolute;
  right: 0;
`;

export const SMenuFooter = styled.div`
  display: grid;
  max-width: 1180px;
  margin: 0 auto;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  gap: 65px;
`;

export const SMenuFooterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SLogo = styled.h3`
  font-size: 54px;
`;

export const SSocial = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const SMenuTitle = styled.p`
  font-size: 26px;
  font-weight: bold;
`;

export const SSubMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
