import { Row, Col, Button, Form, Image, Table } from 'react-bootstrap';
// import { FaWindowClose } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Path from '../../Layout/Item/Path/Path';
// import { orderInfo } from '../../Config/orderConfig';
// import { useNavigate } from 'react-router-dom';
// import { BsCaretRightSquareFill, BsCaretLeftSquareFill } from 'react-icons/bs';
import ChContainer from '../../ComponentShare/ChContainer';
import style from './ShoppingCart.module.scss';
import React, { useState, useEffect } from 'react';
import ShoppingItem from './Components/ShoppingItem';
import Total from './Components/Total';

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

function ShoppingCart(props) {
  const [totalCash, setTotalCash] = useState(0); // totalCash預設值為0
  const calculate = (price) => {
    setTotalCash(totalCash + price); // totalCash =  totalCash + price
  };

  // ---------------------------------------------------------------------
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(products);
  }, [list]);

  useEffect(() => {
    if ((isCheck.length > 0) & (isCheck.length - list.length >= 0)) {
      setIsCheckAll(true);
      // const { id, price, quantity } = list;
      // console.log(id, price, quantity);
    } else if (isCheck.length - list.length < 0) {
      setIsCheckAll(false);
    }
  }, [isCheck.length]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li) => String(li.id)));
    calculate();
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    let itemData = list.filter((item) => item.id == id)[0];
    setIsCheck([...isCheck, id]);
    setTotalCash(totalCash + 87);


    
    console.log(itemData.price);
    console.log(itemData.quantity);

    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
      setTotalCash(totalCash - 87);
    }
  };

  // console.log(isCheck);
  console.log('------------------------');
  // console.log(list.filter((item) => item.id === 1)[0].title);

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
                theQuantity={p.quantity}
                price={p.price}
                productImg={p.productImg}
                onCalculate={calculate}
                handleClick2={handleClick}
                isChecked2={isCheck.includes(String(p.id))}
                // isChecked2={true}
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
                    label="全選"
                    id="selectAll"
                    name="selectAll"
                    className={`text-start`}
                    onChange={handleSelectAll}
                    checked={isCheckAll}
                  />
                </Form>
              </Col>
              <Col
                className={`${style.totalSum} col-5 chicofgo_gray text-nowrap `}
              >
                (已選擇{isCheck.length}件商品) 商品總計:
                <span>{totalCash}</span>
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
