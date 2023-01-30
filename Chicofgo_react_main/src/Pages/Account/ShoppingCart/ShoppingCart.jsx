import { Row, Col, Button, Form, Image, Table } from 'react-bootstrap';
import { FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import Path from '../../Layout/Item/Path/Path';
// import { orderInfo } from '../../Config/orderConfig';
// import { useNavigate } from 'react-router-dom';
import { BsCaretRightSquareFill, BsCaretLeftSquareFill } from 'react-icons/bs';
import ChContainer from '../../ComponentShare/ChContainer';
import style from './ShoppingCart.module.scss';
import React, { useState } from 'react';
import ShoppingItem from './Components/ShoppingItem';
import Total from './Components/Total';

function ShoppingCart(props) {
  const [totalCash, setTotalCash] = useState(0); // totalCash預設值為0
  const calculate = (price) => {
    setTotalCash(totalCash + price); // totalCash =  totalCash + price
  };
  const products = [
    {
      id: 1,
      brandname: '西雅圖咖啡',
      title: `西雅圖咖啡即品拿鐵二合一咖啡(無加糖) 21g*100包原盒．好市多COSTCO熱銷【里德Coffee】`,
      desc: '即品拿鐵無加糖二合一×101包',
      quantity: 5,
      price: 100,
      productImg: 'test.jpg',
    },
    {
      id: 2,
      brandname: '西雅圖咖啡',
      title: `西雅圖咖啡即品拿鐵二合一咖啡(無加糖) 21g*100包原盒．好市多COSTCO熱銷【里德Coffee】`,
      desc: '即品拿鐵無加糖二合一×102包',
      quantity: 8,
      price: 500,
      productImg: 'test.jpg',
    },
    {
      id: 3,
      brandname: '西雅圖咖啡',
      title: `西雅圖咖啡即品拿鐵二合一咖啡(無加糖) 21g*100包原盒．好市多COSTCO熱銷【里德Coffee】`,
      desc: '即品拿鐵無加糖二合一×103包',
      quantity: 10,
      price: 3000,
      productImg: 'test.jpg',
    },
  ];

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
                key={p.id}
                brandname={p.brandname}
                title={p.title}
                desc={p.desc}
                quantity={p.quantity}
                price={p.price}
                productImg={p.productImg}
                onCalculate={calculate}
              />
            ))}

            {/* ----------------------------------- */}

            <Row
              className={`chicofgo_gray justify-content-between text-center px-4 py-3 mb-3 `}
            >
              <Col className={`col-4 `}>
                <Form className={`mx-3 chicofgo_brown_font my-1`}>
                  <Form.Check
                    type="checkbox"
                    id="custom-switch"
                    label="全選"
                    className={`text-start`}
                  />
                </Form>
              </Col>
              <Col
                className={`${style.totalSum} col-5 chicofgo_gray text-nowrap `}
              >
                (已選擇3件商品) 商品總計:
                <span>
                  <Total totalCash={totalCash} />
                </span>
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
