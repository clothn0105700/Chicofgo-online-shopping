import { Row, Col, Button, Form, Image, Table } from 'react-bootstrap';
import { FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import Path from '../../Layout/Item/Path/Path';
// import { orderInfo } from '../../Config/orderConfig';
// import { useNavigate } from 'react-router-dom';
import { FaSearchDollar } from 'react-icons/fa';
import ChContainer from '../../ComponentShare/ChContainer';
import style from './ShoppingCart.module.scss';

function ShoppingItem(props) {
  return (
    <Row className={`px-4`}>
      <Col className={`col-1 d-flex justify-content-center align-items-center`}>
        <Form className={``}>
          <Form.Check type="checkbox" id="custom-switch" label="" />
        </Form>
      </Col>
      <Col className={`col-11 chicofgo_gray pb-4 mb-3 rounded-3`}>
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
              src={require('../../../Img/ProductsTest/' + props.productImg)}
              className={`${style.productPic} `}
            />
            <h2 className={`${style.brandname} m-2 chicofgo-font-700`}>
              {props.brandname}
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
                    <h3 className={` `}>{props.title}</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>規格:</th>
                  <td>{props.desc}</td>
                  {/* <th>粉絲:</th>
                          <td>{props.fans}</td> */}
                </tr>
                <tr>
                  <th>數量:</th>
                  <td>{props.number}件</td>
                  {/* <th>評價:</th>
                          <td>{props.review}</td> */}
                </tr>
                <tr>
                  <th>單價:</th>
                  <td>${props.price}</td>
                </tr>
                <tr className={`${style.totalPrice} text-end`}>
                  <th colspan="4">
                    商品小計:<span>${props.number * props.price}</span>
                  </th>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

function ShoppingCart(props) {
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
            <ShoppingItem
              brandname="西雅圖咖啡"
              title="西雅圖咖啡即品拿鐵二合一咖啡(無加糖)
                      21g*100包原盒．好市多COSTCO熱銷【里德Coffee】"
              desc="即品拿鐵無加糖二合一×100包"
              number="5"
              price="100"
              productImg="test.jpg"
            />
            <ShoppingItem
              brandname="西雅圖咖啡"
              title="西雅圖咖啡即品拿鐵二合一咖啡(無加糖)
                      21g*100包原盒．好市多COSTCO熱銷【里德Coffee】"
              desc="即品拿鐵無加糖二合一×100包"
              number="5"
              price="100"
              productImg="test.jpg"
            />
            <ShoppingItem
              brandname="西雅圖咖啡"
              title="西雅圖咖啡即品拿鐵二合一咖啡(無加糖)
                      21g*100包原盒．好市多COSTCO熱銷【里德Coffee】"
              desc="即品拿鐵無加糖二合一×100包"
              number="5"
              price="100"
              productImg="test.jpg"
            />
            {/* ----------------------------------- */}

            <Row
              className={`chicofgo_gray justify-content-between text-center px-4 py-3 mb-3`}
            >
              <Col className={`col-3 `}>
                <Form className={`mx-3 chicofgo_brown_font`}>
                  <Form.Check
                    type="checkbox"
                    id="custom-switch"
                    label="全選"
                    className={`text-start`}
                  />
                </Form>
              </Col>
              <Col className={`col-3 `}>(已選擇3件商品)</Col>
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
