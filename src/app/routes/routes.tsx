import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import Home from '../../pages/Home';
import ProductCategory from '@/pages/ProductCategory';
import ShoppingCart from '@/pages/ShoppingCart';


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

// export const productDetailRoute = createRoute({
//     getParentRoute: () => rootRoute,
//     path: "/products/$id",
//     component: ProductDetailPage,
// });

// Route Tree
const routeTree = rootRoute.addChildren([homeRoute, categoryRoute, productsRoute, shoppingCartRoute]);

// Router instance
export const router = createRouter({
    routeTree,
});
