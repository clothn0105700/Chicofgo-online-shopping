import { Row, Col, Button, Image, Table } from 'react-bootstrap';
import style from './ShoppingItem.module.scss';

const CheckoutItem = ({
  id,
  brandname,
  title,
  desc,
  quantity,
  price,
  productImg,
}) => {
  return (
    <Row className={`px-4 justify-content-center`} key={id}>
      <Col className={`col-11 chicofgo_gray py-4 mb-4 rounded-3 shadow`}>
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
                  <td>{quantity}件</td>
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
export default CheckoutItem;
