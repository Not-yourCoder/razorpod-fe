import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import Home from '../../pages/Home';
import ProductDetail from '../../pages/ProductDetails';


// Root Route
const rootRoute = createRootRoute();

// Child Routes
const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
});


// Route Tree
const routeTree = rootRoute.addChildren([homeRoute]);

// Router instance
export const router = createRouter({
    routeTree,
});
