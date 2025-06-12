import type { NavMenu } from "./constants.types";

export const navMenu: NavMenu[] = [
  {
    id: "home",
    path: "/",
    label: "Home",
  },
  {
    id: "explore",
    path: "/explore",
    label: "Explore",
  },
  {
    id: "about_us",
    path: "/aboutUs",
    label: "About Us",
  },
  {
    id: "contact_us",
    path: "/contactUs",
    label: "Contact Us",
  },
];

export const menuBar = [
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];