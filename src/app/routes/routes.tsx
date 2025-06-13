import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import Home from '../../pages/Home';
import ProductCategory from '@/pages/ProductCategory';
import ShoppingCart from '@/pages/ShoppingCart';
import Contactus from '@/pages/Contactus';


// Root Route
const rootRoute = createRootRoute();

// Child Routes
const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
});
const categoryRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/categories',
    component: ProductCategory,
});
const productsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/products',
    component: ProductCategory,
});
const shoppingCartRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/shopping_cart',
    component: ShoppingCart,
});
const contactUsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/contactUs',
    component: Contactus,
});

// Route Tree
const routeTree = rootRoute.addChildren([homeRoute, categoryRoute, productsRoute, shoppingCartRoute, contactUsRoute]);

// Router instance
export const router = createRouter({
    routeTree,
});
