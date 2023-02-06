import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export function useProduct() {
  return useContext(ProductContext);
}

function ProductProvider(props) {
  const { children } = props;
  const [products, setProducts] = useState([]);
  async function getProducts() {
    const response = await axios.get('http://localhost:3001/api/products');
    const output = response.data.map((item) => {
      return {
        ...item,
        introduction: item.introduction.split('<br>').join('\n'),
        detail: item.detail.split('<br>').join('\n'),
      };
    });
    setProducts(output);
  }
  return (
    <ProductContext.Provider value={{ products, getProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
