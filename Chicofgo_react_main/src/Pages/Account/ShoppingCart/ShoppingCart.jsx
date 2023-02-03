import { Row, Col, Button, Form } from 'react-bootstrap';
import ChContainer from '../../ComponentShare/ChContainer';
import style from './ShoppingCart.module.scss';
import React, { useState, useEffect } from 'react';
import ShoppingItem from './Components/ShoppingItem';

const productsData = [
  {
    id: 1,
    brandname: '西雅圖咖啡',
    title: `西雅圖咖啡即品拿鐵二合一咖啡(無加糖) 21g*100包原盒．好市多COSTCO熱銷【里德Coffee】`,
    desc: '即品拿鐵無加糖二合一×101包',
    quantity: 5,
    price: 100,
    productImg: 'test.jpg',
    checked: false,
  },
  {
    id: 2,
    brandname: '西雅圖咖啡',
    title: `西雅圖咖啡即品拿鐵二合一咖啡(無加糖) 21g*100包原盒．好市多COSTCO熱銷【里德Coffee】`,
    desc: '即品拿鐵無加糖二合一×102包',
    quantity: 8,
    price: 500,
    productImg: 'test.jpg',
    checked: false,
  },
  {
    id: 3,
    brandname: '西雅圖咖啡',
    title: `西雅圖咖啡即品拿鐵二合一咖啡(無加糖) 21g*100包原盒．好市多COSTCO熱銷【里德Coffee】`,
    desc: '即品拿鐵無加糖二合一×103包',
    quantity: 10,
    price: 3000,
    productImg: 'test.jpg',
    checked: false,
  },
];

function ShoppingCart(props) {
  const [products, setProducts] = useState(productsData);
  const [isCheckAll, setIsCheckAll] = useState(false);

  useEffect(() => {
    setIsCheckAll((prevIsCheckAll) =>
      products.every((product) => product.checked)
    );
  }, [products]);

  const handleCheckboxChange = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, checked: !product.checked } : product
      )
    );
  };

  const handleCheckAllChange = () => {
    setIsCheckAll((prevIsCheckAll) => !prevIsCheckAll);
    setProducts((prevProducts) =>
      prevProducts.map((product) => ({
        ...product,
        checked: !isCheckAll,
      }))
    );
  };

  const handleQuantityChange = (id, delta) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity:
                product.quantity + delta >= 0 ? product.quantity + delta : 0,
            }
          : product
      )
    );
  };

  const totalPrice = products
    .filter((product) => product.checked)
    .reduce((sum, product) => sum + product.price * product.quantity, 0);
  return (
    <ChContainer ChClass={'chicofgo-font'} breadCrumb={'我的購物車'}>
      {/* 標題 */}
      <Col>
        <Row>
          <Col>
            <h1 className={`${style.shoppingcartTitle} text-center pt-5 py-4`}>
              我的購物車
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className={` pb-5 chicofgo-font-700`}>
            {/* 內容 */}
            {/* ----------------------------------- */}
            {products.map((p) => (
              <ShoppingItem
                id={p.id}
                brandname={p.brandname}
                title={p.title}
                desc={p.desc}
                quantity={p.quantity}
                checked={p.checked}
                price={p.price}
                productImg={p.productImg}
                onCheckboxChange={() => handleCheckboxChange(p.id)}
                onQuantityChange={(delta) => handleQuantityChange(p.id, delta)}
                // isChecked2={true}
              />
            ))}

            {/* ----------------------------------- */}

            <Row
              className={`chicofgo_gray justify-content-between text-center px-4 py-3 mb-3`}
            >
              <Col className={`col-4 `}>
                <Form className={`mx-3 chicofgo_brown_font my-1`}>
                  <Form.Check
                    type="checkbox"
                    label="全選"
                    // id="selectAll"
                    // name="selectAll"
                    className={`text-start`}
                    checked={isCheckAll}
                    onChange={handleCheckAllChange}
                  />
                </Form>
              </Col>
              <Col
                className={`${style.totalSum} col-5 chicofgo_gray text-nowrap `}
              >
                (已選擇3件商品) 商品總計:
                <span>{totalPrice}</span>
              </Col>
            </Row>
            <Row className={`mt-5`}>
              <Col className={`text-center`}>
                <Button
                  variant="chicofgo-brown"
                  className={` px-5 py-1 shadow chicofgo_white_font`}
                >
                  前往結帳
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </ChContainer>
  );
}

export default ShoppingCart;
