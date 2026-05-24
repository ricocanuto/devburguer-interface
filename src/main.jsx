import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppProvider } from './hooks';

import { ThemeProvider } from 'styled-components';
import stripePromise from './config/stripeConfig';
import { CartProvider } from './hooks/CartContext';
import { router } from './routes';
import GlobalStyles from './styles/globalStyles';
import { standardTheme } from './styles/themes/standard';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <CartProvider>
          <Elements stripe={stripePromise}>
            <RouterProvider router={router} />
          </Elements>
          <GlobalStyles />
          <ToastContainer autoClose={2080} theme="colored" />
        </CartProvider>
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
