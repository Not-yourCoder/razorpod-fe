import type { RootState } from "@/store/store";
import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

const CartIcon = () => {
    const selectCartCount = (state: RootState) => state.cart.cartItems.length;
    const cartCount = useSelector(selectCartCount);

    return (
        <Link to="/shopping_cart" className="relative mr-2">
            <ShoppingCart className="w-6 h-6 text-black" />
            {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center text-xs text-white bg-red-500 h-4 w-4 rounded-full">
                    {cartCount}
                </span>
            )}
        </Link>
    );
};

export default CartIcon;
