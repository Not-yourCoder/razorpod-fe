import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import Home from '../../pages/Home';
import ProductsDetails from '../../pages/Products';


// Root Route
const rootRoute = createRootRoute();

// Child Routes
const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
});

const productDetailRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/product/$id',
    component: ProductsDetails,
});

// Route Tree
const routeTree = rootRoute.addChildren([homeRoute, productDetailRoute]);

// Router instance
export const router = createRouter({
    routeTree,
});
