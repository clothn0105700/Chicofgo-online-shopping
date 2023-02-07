import { Row, Col, Button, Form, Container, Table } from 'react-bootstrap';
import ChContainer from '../../ComponentShare/ChContainer';
import style from './ShoppingCart.module.scss';
import React, { useState, useEffect } from 'react';
import CheckoutItem from './Components/CheckoutItem';

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

const MemberInfo = [
  {
    id: 1,
    name: '小明',
    phone: '0999888777',
    address: '桃園市中壢區',
  },
];

function Checkout(props) {
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

  const totalPrice = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  return (
    <ChContainer
      ChClass={'chicofgo-font'}
      breadCrumb={'下單結帳'}
      ChBorder={'0px'}
    >
      {/* 標題 */}
      <Col>
        <Row>
          <Col>
            <h1 className={`${style.shoppingcartTitle} text-center pt-5 py-4`}>
              下單結帳
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className={` pb-5 px-0 chicofgo-font-700`}>
            {/* 內容 */}
            {/* ----------------------------------- */}
            {products.map((p) => (
              <CheckoutItem
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
            <div className="p-5 chicofgo_yello">
              <Table borderless size="sm">
                <tbody className={`${style.checkoutTable}`}>
                  <h5 className="chicofgo-font-900">編輯買家資訊</h5>
                  <tr>
                    <th>收件人姓名</th>
                    <td>{MemberInfo[0].name}</td>
                    <th>地址</th>
                    <td>{MemberInfo[0].address}</td>
                  </tr>
                  <tr>
                    <th scope="row">行動電話</th>
                    <td>{MemberInfo[0].phone}</td>
                    <th>寄送資訊</th>
                    <td>{'7-ELEVEN(速達門市)'}</td>
                  </tr>
                  <tr>
                    <th scope="row">使用票券</th>
                    <td>{MemberInfo[0].coupon}</td>
                    <th>{MemberInfo[0].ExpressInfoMethod}</th>
                    <td>{MemberInfo[0].ExpressInfoMethodAddress}</td>
                  </tr>
                  <tr>
                    <th scope="row">付款方式</th>
                    <td>{MemberInfo[0].payMethod}</td>
                    <th>電子發票</th>
                    <td>{MemberInfo[0].bill}</td>
                  </tr>
                  <tr>
                    <th scope="row">訂單備註</th>
                    <td colspan="3">{MemberInfo[0].other}</td>
                  </tr>
                  <h5 className="pt-5 chicofgo-font-900">折扣計算</h5>
                  <tr>
                    <th scope="row">運費</th>
                    <td>{`$60`}</td>
                    <th>運費折扣</th>
                    <td>{`- $60`}</td>
                  </tr>
                  <tr>
                    <th scope="row">優惠券</th>
                    <td>{`- $100`}</td>
                    <th></th>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className={`p-3 text-end chicofgo_gray ${style.totalSum}`}>
              訂單加總:<span>{totalPrice}</span>
            </div>
            <Row className={`mt-5`}>
              <Col className={`text-center`}>
                <Button
                  variant="chicofgo-brown"
                  className={` px-5 py-1 shadow chicofgo_white_font`}
                >
                  確認下單
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </ChContainer>
  );
}

export default Checkout;
