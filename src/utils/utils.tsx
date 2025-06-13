/* eslint-disable @typescript-eslint/no-explicit-any */
import { FragranceIcon, GroceriesIcon, HomeDecorationIcon, KitchenAccessoriesIcon, ShirtIcon } from "@/constants/Icons";
import type { Product } from "@/store/types";
import { AiBeautifyIcon, Desk02Icon, LaptopProgrammingIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export const groupCategoriesByKeyword = (categories: any[]) => {
  const groups: Record<string, any[]> = {};

  categories.forEach((cat) => {
    let section = "Others";

    if (cat.slug.includes("womens")) section = "Women";
    else if (cat.slug.includes("mens")) section = "Men";
    else if (
      cat.slug.includes("laptop") ||
      cat.slug.includes("tablet") ||
      cat.slug.includes("smartphone") ||
      cat.slug.includes("mobile")
    )
      section = "Electronics";
    else if (
      cat.slug.includes("skin") ||
      cat.slug.includes("beauty") ||
      cat.slug.includes("fragrances")
    )
      section = "Beauty";
    else if (
      cat.slug.includes("furniture") ||
      cat.slug.includes("home") ||
      cat.slug.includes("kitchen")
    )
      section = "Home";
    else if (
      cat.slug.includes("sports") ||
      cat.slug.includes("motorcycle") ||
      cat.slug.includes("vehicle")
    )
      section = "Sports";
    else if (cat.slug.includes("grocery")) section = "Food";

    // Initialize section array if not existing
    if (!groups[section]) {
      groups[section] = [];
    }

    // Push category to the appropriate section
    groups[section].push(cat);
  });

  return groups;
};


export const setCategoryIcon = (category: string) => {
  switch (category) {
    case "Beauty":
      return <HugeiconsIcon icon={AiBeautifyIcon} />
    case "Furniture":
      return <HugeiconsIcon icon={Desk02Icon} />
    case "Fragrances":
      return <FragranceIcon />
    case "Groceries":
      return <GroceriesIcon />
    case "Home Decoration":
      return <HomeDecorationIcon />
    case "Kitchen Accessories":
      return <KitchenAccessoriesIcon />
    case "Laptops":
      return <HugeiconsIcon icon={LaptopProgrammingIcon} />
    case "Mens Shirts":
      return <ShirtIcon />
  }
}

export const scrollByAmount = (horizontalScrollRef: any, amount: number) => {
  if (horizontalScrollRef.current) {
    horizontalScrollRef.current.scrollBy({
      left: amount,
      behavior: 'smooth',
    });
  }
};

export const getBadgeColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'no stock':
      return 'bg-red-500 text-white';
    case 'low stock':
      return 'bg-yellow-400 text-black';
    case 'in stock':
      return 'bg-green-500 text-white';
    default:
      return 'bg-gray-300 text-black';
  }
};

export const isWishlisted = (productId: number, wishlist: Product[]) =>
  wishlist.some((item) => item.id === productId);