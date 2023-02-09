import {
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import ChContainer from '../../ComponentShare/ChContainer';
import style from './ShoppingCart.module.scss';
import React, { useState, useEffect } from 'react';
import CheckoutItem from './Components/CheckoutItem';
import { useShoppingCart } from '../../../Contexts/ShoppingCartProvider';
import axios from 'axios';

function Checkout(props) {
  // ---勾選商品---
  const [products, setProducts] = useState([]);
  const { selectProducts, setSelectProducts } = useShoppingCart();
  useEffect(() => {
    setProducts(selectProducts);
  }, []);

  // ---會員資料---
  const [memberInfo, setMemberInfo] = useState({
    id: 1,
    name: '小明',
    phone: '0912345678',
    pay: '',
    address: '桃園市XXX',
    send_information: '',
    bill_id: '',
    totalPrice: '',
    status: '1',
  });

  function handleChange(e) {
    let newMemberInfo = { ...memberInfo };
    newMemberInfo[e.target.name] = e.target.value;
    setMemberInfo(newMemberInfo);
    // console.log(memberInfo);
  }

  //---優惠券---
  const [coupon, setCoupon] = useState(0);
  function couponChange(e) {
    setCoupon(e.target.value);
  }

  // ---訂單加總---
  const totalPrice =
    products.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    ) - coupon;

  // ---下單---(後端還沒接)
  async function handleSubmit(e) {
    e.preventDefault();
    memberInfo.totalPrice = totalPrice;
    // let response = await axios.post(
    //   'http://localhost:3001/api/checkoutOrder',
    //   memberInfo
    // );
    console.log(memberInfo);
  }
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
                        // id="name"
                        name="name"
                        onChange={handleChange}
                        value={memberInfo.name}
                        className={'chicofgo_yello'}
                      />
                    </InputGroup>
                    <InputGroup className="align-items-center mb-2">
                      行動電話：
                      <Form.Control
                        size="sm"
                        type="text"
                        // id="phone"
                        name="phone"
                        onChange={handleChange}
                        value={memberInfo.phone}
                        className={'chicofgo_yello'}
                      />
                    </InputGroup>
                    <InputGroup className="align-items-center mb-2">
                      使用票券：
                      <Form.Select
                        aria-label="Default select example"
                        size="sm"
                        name="coupon_id"
                        onChange={(handleChange, couponChange)}
                        className={'chicofgo_yello'}
                      >
                        <option value="0">選擇票券</option>
                        <option value="60">$60免運券</option>
                        <option value="200">$200折價券</option>
                      </Form.Select>
                    </InputGroup>
                    <InputGroup className="align-items-center mb-2">
                      付款方式：
                      <Form.Select
                        aria-label="Default select example"
                        size="sm"
                        name="pay"
                        onChange={handleChange}
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
                        // id="address"
                        name="address"
                        onChange={handleChange}
                        value={memberInfo.address}
                        className={'chicofgo_yello'}
                      />
                    </InputGroup>
                    <InputGroup className="align-items-center mb-2">
                      寄送門市：
                      <Form.Select
                        aria-label="Default select example"
                        size="sm"
                        name="send_information"
                        onChange={handleChange}
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
                        name="bill_id"
                        onChange={handleChange}
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
                <h5 className={'pt-5 chicofgo-font-900'}>折扣計算</h5>
                <Row className={`${style.totalSum}`}>
                  <Col>
                    折抵：$
                    {coupon}
                  </Col>
                  <Col className="text-end">
                    訂單加總:<span>{totalPrice}</span>
                  </Col>
                </Row>
              </Form>
            </div>
            <Row className={`mt-5`}>
              <Col className={`text-center`}>
                <Button
                  variant="chicofgo-brown"
                  className={` px-5 py-1 shadow chicofgo_white_font`}
                  onClick={handleSubmit}
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
