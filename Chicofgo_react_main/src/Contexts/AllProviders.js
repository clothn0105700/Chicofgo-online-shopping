import React from 'react';
import ProductProvider from './ProductProvider';
import MessageProvider from './MessageProvider';

function AllProviders(props) {
  const { children } = props;
  return (
    <MessageProvider>
      <ProductProvider>{children}</ProductProvider>
    </MessageProvider>
  );
}

export default AllProviders;
