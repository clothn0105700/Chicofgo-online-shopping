import { Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import ChContainer from '../../ComponentShare/ChContainer';
import style from './ShoppingCart.module.scss';
import React, { useState, useEffect } from 'react';
import CheckoutItem from './Components/CheckoutItem';
import { useShoppingCart } from '../../../Contexts/ShoppingCartProvider';

function Checkout(props) {
  const [products, setProducts] = useState([]);
  const { selectProducts, setSelectProducts } = useShoppingCart();
  const [memberInfo, setMemberInfo] = useState({
    id: 1,
    name: '小明',
    phone: '0999888777',
    address: '桃園市中壢區',
  });

  // function hh(e) {
  //   let newMemberInfo = { ...memberInfo };
  //   // newMemberInfo
  //   console.log(newMemberInfo[e]);
  // }

  useEffect(() => {
    setProducts(selectProducts);
  }, []);

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
              />
            ))}

            {/* ----------------------------------- */}
            <div className="chicofgo_yello">
              <Form className="p-5 chicofgo_yello">
                <h5 className="chicofgo-font-700">編輯買家資訊</h5>
                <Row>
                  <Col>
                    <InputGroup className="align-items-center mb-2">
                      收件人姓名：
                      <Form.Control
                        size="sm"
                        type="text"
                        id="name"
                        name="name"
                        // onChange={hh}
                        value={memberInfo.name}
                        className={'chicofgo_yello'}
                      />
                    </InputGroup>
                    <InputGroup className="align-items-center mb-2">
                      行動電話：
                      <Form.Control
                        size="sm"
                        type="text"
                        id="phone"
                        name="phone"
                        value={memberInfo.phone}
                        className={'chicofgo_yello'}
                      />
                    </InputGroup>
                    <InputGroup className="align-items-center mb-2">
                      使用票券：
                      <Form.Select
                        aria-label="Default select example"
                        size="sm"
                        className={'chicofgo_yello'}
                      >
                        <option>選擇票券</option>
                        <option value="1">$200折價券</option>
                        <option value="2">$60免運券</option>
                      </Form.Select>
                    </InputGroup>
                    <InputGroup className="align-items-center mb-2">
                      付款方式：
                      <Form.Select
                        aria-label="Default select example"
                        size="sm"
                        className={'chicofgo_yello'}
                      >
                        <option>選擇付款方式</option>
                        <option value="1">貨到付款</option>
                        <option value="2">信用卡/金融卡</option>
                        <option value="3">銀行轉帳</option>
                      </Form.Select>
                    </InputGroup>
                  </Col>
                  <Col>
                    <InputGroup className="align-items-center mb-2">
                      地址：
                      <Form.Control
                        size="sm"
                        type="text"
                        id="address"
                        name="address"
                        value={memberInfo.address}
                        className={'chicofgo_yello'}
                      />
                    </InputGroup>
                    <InputGroup className="align-items-center mb-2">
                      寄送門市：
                      <Form.Select
                        aria-label="Default select example"
                        size="sm"
                        className={'chicofgo_yello'}
                      >
                        <option>選擇門市</option>
                        <option value="1">7-ELEVEN</option>
                        <option value="2">全家</option>
                        <option value="3">萊爾富</option>
                        <option value="4">OK</option>
                      </Form.Select>
                    </InputGroup>
                    <InputGroup className="align-items-center mb-2">
                      電子發票：
                      <Form.Select
                        aria-label="Default select example"
                        size="sm"
                        className={'chicofgo_yello'}
                      >
                        <option>選擇發票</option>
                        <option value="1">二聯式發票</option>
                        <option value="2">三聯式發票</option>
                        <option value="3">捐贈發票</option>
                      </Form.Select>
                    </InputGroup>
                  </Col>
                </Row>
                <h5 className="pt-5 chicofgo-font-900">折扣計算</h5>
                <Row>
                  <Col>運費：{'$60'}</Col>
                  <Col>優惠券：{'$200'}</Col>
                </Row>
              </Form>
            </div>
            <div className={`p-3 text-end chicofgo_gray ${style.totalSum}`}>
              訂單加總:<span>{totalPrice}</span>
            </div>
            <Row className={`mt-5`}>
              <Col className={`text-center`}>
                <Button
                  variant="chicofgo-brown"
                  className={` px-5 py-1 shadow chicofgo_white_font`}
                  onClick={() => {
                    console.log(products);
                  }}
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
