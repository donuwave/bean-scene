import styled from "styled-components";

export const SCoffeeCommentWrapper = styled.div`
  position: relative;
`;

export const SCoffeeComment = styled.div`
  color: #603809;
  margin: 0 auto;
  max-width: 1180px;
  padding-bottom: 100px;
`;

export const STitle = styled.div`
  font-size: 54px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 8px;
`;

export const SDescription = styled.span`
  font-size: 20px;
  text-align: center;
`;

export const SCommentContainer = styled.div`
  display: grid;
  position: relative;
  background: rgba(249, 192, 106, 0.12);
  padding-top: 130px;
  justify-items: center;
  max-width: 1000px;
  margin: 45px auto 0 auto;
`;

export const SComment = styled.div`
  padding: 0 100px 28px 100px;
  margin: 0 auto;
  text-align: center;
`;

export const SName = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

export const SCustomer = styled.div`
  font-size: 20px;
  padding-bottom: 100px;
`;

export const SPhoto = styled.img`
  position: absolute;
  bottom: -50px;
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

export const SCoffeeRight = styled.span`
  background-image: url("/coffee_blast.png");
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: scaleX(-1);
  width: 100%;
  height: 100%;
`;

export const SQuotes = styled.div`
  position: absolute;
  top: -50px;
  font-size: 220px;
  left: 30px;
`;
