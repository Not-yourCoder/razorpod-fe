import React, { useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { Button } from '../Ui/button';
import { Input } from '../Ui/input';
import { useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@/store/store';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateItemQuantity } from '@/store/slices/cartSlice';
import { useNavigate } from '@tanstack/react-router';
import toast from 'react-hot-toast';

const ShoppingCartComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(true);
    const [promoCode, setPromoCode] = useState('');


    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const updateQuantity = (id: number, change: number) => {
        dispatch(updateItemQuantity({ id, change }));
    };

    const handleClose = () => {
        setIsOpen(false)
        navigate({ to: "/" })
    }
    const removeItem = (id: number) => {
        dispatch(removeCartItem(id));
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    if (!isOpen) return null;

    return (

        <div className="rounded-2xl w-full max-w-sm h-fit shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                    My Cart <span className="text-pink-500 ml-2">{getTotalItems()}</span>
                </h2>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleClose()}
                    className="text-gray-500 hover:text-gray-700 p-1"
                >
                    <X className="h-5 w-5" />
                </Button>
            </div>

            {/* Cart Items */}
            <div className="px-6 space-y-4 max-h-96 overflow-y-auto">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 bg-white rounded-lg p-3">
                        {/* Product Image */}
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                {item.thumbnail ?
                                    <img src={item.thumbnail} /> :
                                    <span className="text-xs text-gray-500">IMG</span>
                                }
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-medium text-gray-800 line-clamp-2 leading-tight">
                                {item.title}
                            </h3>
                            <div className="flex items-center space-x-2 mt-1">
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-gray-100 text-gray-600">
                                    {item.category}
                                </span>
                                <span className="text-xs text-gray-500">{item.brand}</span>
                            </div>
                            <div className="text-sm font-semibold text-gray-800 mt-1">
                                ${item.price.toFixed(2)}
                            </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                    updateQuantity(item.id, -1);
                                    toast("Item Removed")
                                }}
                                className="h-8 w-8 p-0 rounded-full border-gray-300"
                            >
                                <Minus className="h-3 w-3" />
                            </Button>
                            <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                    updateQuantity(item.id, 1);
                                    toast("Item Added")
                                }}
                                className="h-8 w-8 p-0 rounded-full border-gray-300"
                            >
                                <Plus className="h-3 w-3" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Promo Code Section */}
            <div className="px-6 py-4">
                <div className="relative">
                    <Input
                        type="text"
                        placeholder="Do you have a promo code? Enter it here"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="bg-white border-gray-200 text-sm placeholder:text-gray-400 pr-20"
                    />
                    {promoCode && (
                        <Button
                            variant="ghost"
                            size="sm"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-pink-600 hover:text-pink-700"
                        >
                            Apply
                        </Button>
                    )}
                </div>
            </div>

            {/* Total and Checkout */}
            <div className="px-6 pb-6">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-gray-800">Total:</span>
                    <span className="text-lg font-bold text-gray-800">
                        ${getTotalPrice().toFixed(2)}
                    </span>
                </div>

                <Button
                    className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition-colors"
                    size="lg"
                >
                    Checkout
                </Button>
            </div>
        </div>
    );
};

export default ShoppingCartComponent;