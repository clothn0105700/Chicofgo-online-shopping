import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductsList(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getproducts() {
      let response = await axios.get(
        'http://localhost:3001/api/business/products'
      );
      setProducts(response.data);
    }
    getproducts();
  }, []);
  console.log(products);
  //取得陣列資料放進products

  // console.log(props.searchName);
  // console.log(props.searchNumber);
  // console.log(props.searchType);
  return (
    <>
      {products
        .filter((product) => {
          return props.searchName.toLowerCase() === ''
            ? product
            : product.name.toLowerCase().includes(props.searchName);
        })
        .filter((product) => {
          return props.searchNumber.toLowerCase() === ''
            ? product
            : product.number.toLowerCase().includes(props.searchNumber);
        })
        .filter((product) => {
          return props.searchType.toLowerCase() === ''
            ? product
            : product.name.toLowerCase().includes(props.searchType);
        })
        .map((product) => {
          return (
            <Row
              className="text-center border-bottom align-items-center py-1 mt-1 d-flex"
              key={product.id}
            >
              <Col sm={2} className="my-1">
                {product.name}
              </Col>
              <Col sm={2} className="my-1">
                1
              </Col>
              <Col sm={2} className="my-1">
                {product.price}
              </Col>
              <Col sm={2} className="my-1">
                123
              </Col>
              <Col sm={2} className="my-1">
                123
              </Col>
              <Col sm={2} className="my-1">
                123
              </Col>
              <Col className="pb-2">
                <Row className="justify-content-end text-center">
                  <Col sm={2} className="text-center">
                    <Button
                      className="px-2 mx-1"
                      variant="chicofgo-brown text-white"
                    >
                      詳細
                    </Button>
                    <Button
                      className="px-2 mx-1"
                      variant="chicofgo-khaki text-white"
                    >
                      下架
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          );
        })}{' '}
    </>
  );
}

export default ProductsList;
