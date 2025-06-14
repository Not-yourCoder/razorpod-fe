import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './app/routes/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast';


const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
    <Toaster />
  </StrictMode>,
)
