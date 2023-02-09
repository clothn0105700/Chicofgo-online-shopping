import React from 'react';
import ProductProvider from './ProductProvider';
import MessageProvider from './MessageProvider';
import AuthProvider from './AuthContext';
// 匯入 Cart 要用的 ContextProvider
import { CartProvider } from '../utils/useCart';
import { SecondCartProvider } from '../utils/useSecondCart';

function AllProviders(props) {
  const { children } = props;
  return (
    <AuthProvider>
      <MessageProvider>
        <ProductProvider>
          <SecondCartProvider localStorageKey="secondCart">
            <CartProvider>{children}</CartProvider>
          </SecondCartProvider>
        </ProductProvider>
      </MessageProvider>
    </AuthProvider>
  );
}

export default AllProviders;
