import { Cog, LogOut, ScrollText, ShoppingBag, UserPen } from "lucide-react";
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

export const accountMenuItems = [
  { label: "Account", value: "account", icon: UserPen },
  { label: "Orders", value: "orders", icon: ShoppingBag },
  { label: "Wishlist", value: "wishlist", icon: ScrollText },
  { label: "Settings", value: "settings", icon: Cog },
  {
    label: "Log Out",
    value: "logout",
    icon: LogOut,
    className: "text-red-500",
  },
];