import React from "react";

import {
  SCoffeeComment,
  SComment,
  SCommentContainer,
  SCustomer,
  SDescription,
  SName,
  SPhoto,
  STitle,
  SCoffee,
  SCoffeeCommentWrapper,
  SQuotes,
  SCoffeeRight,
} from "./coffeeComment.styles";

export const CoffeeComment = () => {
  return (
    <SCoffeeCommentWrapper>
      <SCoffee />
      <SCoffeeRight />

      <SCoffeeComment>
        <STitle>Our cofeee perfection feedback</STitle>
        <SDescription>
          Our customers has amazing things to say about us
        </SDescription>

        <SCommentContainer>
          <SQuotes>“</SQuotes>

          <SComment>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            autem dolore doloremque eum facere nisi odio provident sequi
            voluptatum! A dolor doloremque eius id iure optio porro possimus rem
            voluptas.
          </SComment>
          <SName>Jonny Thomas</SName>
          <SCustomer>Project Manager</SCustomer>
          <SPhoto src={"./avatar.png"} />
        </SCommentContainer>
      </SCoffeeComment>
    </SCoffeeCommentWrapper>
  );
};
