import { Row, Col, Button, Form, Image, Table } from 'react-bootstrap';
import { FaWindowClose } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Path from '../../Layout/Item/Path/Path';
// import { orderInfo } from '../../Config/orderConfig';
// import { useNavigate } from 'react-router-dom';
import { BsCaretRightSquareFill, BsCaretLeftSquareFill } from 'react-icons/bs';
// import ChContainer from '../../ComponentShare/ChContainer';
import style from './ShoppingItem.module.scss';
import React, { useState } from 'react';

const ShoppingItem = ({
  key,
  brandname,
  title,
  desc,
  // quantity,
  price,
  productImg,
  onCalculate,
}) => {
  // 用{大括號}接受prop
  const [quantity, setQuantity] = useState(0);
  const increment = () => {
    setQuantity(quantity + 1);
    onCalculate(price); //每次點擊時執行 onCalculate(price) = totalCash + price
  };
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      onCalculate(-price); // 減少時為-price
    }
  };

  return (
    <Row className={`px-4 `}>
      <Col className={`col-1 d-flex justify-content-center align-items-center`}>
        <Form className={``}>
          <Form.Check type="checkbox" id="custom-switch" label="" />
        </Form>
      </Col>
      <Col className={`col-11 chicofgo_gray pb-4 mb-4 rounded-3 shadow`}>
        <Row>
          <Col className={`text-end p-0 `}>
            <Button variant="" className={` chicofgo_brown_font m-0 pb-0`}>
              <h3 className={`p-0`}>
                <FaWindowClose />
              </h3>
            </Button>
          </Col>
        </Row>
        <Row className={`justify-content-center `}>
          <Col
            className={`${style.brandArea} col-2 px-0 align-self-start text-center`}
          >
            <Image
              src={require('../../../../Img/ProductsTest/' + productImg)}
              className={`${style.productPic} `}
            />
            <h2 className={`${style.brandname} m-2 chicofgo-font-700`}>
              {brandname}
            </h2>
            <Row className={`justify-content-center text-nowrap`}>
              <Col className={`col-12 col-xxl-6 `}>
                <Button
                  variant="chicofgo-green"
                  className={`mt-2 chicofgo_white_font `}
                >
                  進店逛逛
                </Button>
              </Col>
              <Col className={`col-12 col-xxl-6 ps-xxl-1`}>
                <Button
                  variant="chicofgo-brown"
                  className={`mt-2 chicofgo_white_font `}
                >
                  聯絡店家
                </Button>
              </Col>
            </Row>
          </Col>
          <Col className={`col-9`}>
            <Table
              hover
              variant=""
              className={`${style.tableText} p-0 m-0 border-chicofgo-white`}
            >
              <thead>
                <tr>
                  <th colspan="4">
                    <h3>{title}</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>規格:</th>
                  <td>{desc}</td>
                  {/* <th>粉絲:</th>
                            <td>{props.fans}</td> */}
                </tr>
                <tr className={`align-middle `}>
                  <th>數量:</th>
                  <td>
                    <Button
                      variant=""
                      className={` chicofgo_brown_font m-0 py-0`}
                      onClick={decrement}
                    >
                      <h3 className={`p-0`}>
                        <BsCaretLeftSquareFill />
                      </h3>
                    </Button>
                    {quantity}
                    <Button
                      variant=""
                      className={` chicofgo_brown_font m-0 py-0`}
                      onClick={increment}
                    >
                      <h3 className={`p-0`}>
                        <BsCaretRightSquareFill />
                      </h3>
                    </Button>
                    件
                  </td>
                  {/* <th>評價:</th>
                            <td>{props.review}</td> */}
                </tr>
                <tr>
                  <th>單價:</th>
                  <td>${price}</td>
                </tr>
                <tr className={`${style.totalPrice} text-end`}>
                  <th colspan="4">
                    商品小計:<span>${quantity * price}</span>
                  </th>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default ShoppingItem;
