import React from "react";

import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  TwitterIcon,
} from "@/shared/assets";
import { Button, Input } from "@/shared/ui";

import {
  SButton,
  SCapLeft,
  SCapRight,
  SDescription,
  SFooter,
  SForm,
  SMainFooter,
  SMenuFooter,
  STitle,
  SUpFooter,
  SLogo,
  SInfo,
  SSocial,
  SMenuTitle,
  SSubMenu,
  SMenuFooterItem,
} from "./footer.styles";

export const Footer = () => {
  return (
    <SFooter>
      <SUpFooter>
        <STitle>Subscribe to get the Latest News</STitle>
        <SDescription>
          Dont miss out on our latest news, updates, tips and special offers
        </SDescription>
        <SForm>
          <Input placeholder="Enter your mail" />
          <SButton>
            <Button type="l">Subscribe</Button>
          </SButton>
        </SForm>
      </SUpFooter>
      <SMainFooter>
        <SMenuFooter>
          <SInfo>
            <SLogo>Bean Scene</SLogo>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
            <SSocial>
              <InstagramIcon />
              <TwitterIcon />
              <FacebookIcon />
              <YoutubeIcon />
            </SSocial>
          </SInfo>
          <SMenuFooterItem>
            <SMenuTitle>About</SMenuTitle>
            <SSubMenu>
              <div>Menu</div>
              <div>Features</div>
              <div>News & Blogs</div>
              <div>Help & Support</div>
            </SSubMenu>
          </SMenuFooterItem>
          <SMenuFooterItem>
            <SMenuTitle>Company</SMenuTitle>
            <SSubMenu>
              <div>How we work</div>
              <div>Terms of service</div>
              <div>Pricing</div>
              <div>FAQ</div>
            </SSubMenu>
          </SMenuFooterItem>
          <SMenuFooterItem>
            <SMenuTitle>Contact Us</SMenuTitle>
            <SSubMenu>
              <div>
                Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                Bangalore-560016
              </div>
              <div>+1 202-918-2132</div>
              <div>beanscene@mail.rcom</div>
              <div>www.beansene.com</div>
            </SSubMenu>
          </SMenuFooterItem>
        </SMenuFooter>
      </SMainFooter>
      <SCapLeft />
      <SCapRight />
    </SFooter>
  );
};
