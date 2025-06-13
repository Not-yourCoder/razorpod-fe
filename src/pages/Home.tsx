import { lazy, Suspense } from 'react';
import LayoutWithHeaderandFooter from '../layouts/LayoutWithHeaderandFooter';
import { ProductGridSkeleton } from '@/components/Skeletons/Product/ProductGridSkeleton';

// Lazy load the ProductGrid component
const ProductGrid = lazy(() => import('@/components/Product/ProductGrid'));

// Loading skeleton component


const Home = () => {
  return (
    <>
      <LayoutWithHeaderandFooter>
        <Suspense fallback={<ProductGridSkeleton />}>
          <ProductGrid />
        </Suspense>
      </LayoutWithHeaderandFooter>
    </>
  );
};

export default Home;