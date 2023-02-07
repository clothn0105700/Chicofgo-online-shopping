import React from 'react';
import ProductProvider from './ProductProvider';
import MessageProvider from './MessageProvider';
import AuthProvider from './AuthContext';

function AllProviders(props) {
  const { children } = props;
  return (
    <AuthProvider>
      <MessageProvider>
        <ProductProvider>{children}</ProductProvider>
      </MessageProvider>
    </AuthProvider>
  );
}

export default AllProviders;
