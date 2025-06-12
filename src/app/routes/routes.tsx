import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import Home from '../../pages/Home';
import ProductCategory from '@/pages/ProductCategory';


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

// export const productDetailRoute = createRoute({
//     getParentRoute: () => rootRoute,
//     path: "/products/$id",
//     component: ProductDetailPage,
// });

// Route Tree
const routeTree = rootRoute.addChildren([homeRoute, categoryRoute, productsRoute]);

// Router instance
export const router = createRouter({
    routeTree,
});
