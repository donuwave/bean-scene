import { IMenu } from "../modal/menu.types";

export const getMenu = (): IMenu[] => {
  return [
    { label: "Home", path: "/", value: "home" },
    { label: "Menu", path: "/menu", value: "menu" },
    { label: "About Us", path: "/about-us", value: "aboutUs" },
    { label: "Contact Us", path: "/contact-us", value: "contactUs" },
  ];
};
