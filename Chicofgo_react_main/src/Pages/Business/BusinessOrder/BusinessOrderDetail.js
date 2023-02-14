import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  Dropdown,
  DropdownButton,
  InputGroup,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BusinessSiderbar from '../Components/BusinessSiderbar';

function BusinessOrder() {
  const { orderId } = useParams();
  const { memberId } = useParams();
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);
  // console.log('orderDetail', orderId);

  useEffect(() => {
    async function getproducts() {
      let response = await axios.get(
        `http://localhost:3001/api/business/order/${orderId}/${memberId}`
      );
      setProducts(response.data);
      setOrder(response.orderDatas);
    }
    getproducts();
  }, []);
  console.log('訂單詳細', products);
  console.log('訂單個人資料', order);
  //取得陣列資料放進data

  return products.map((product) => {
    return (
      <div className="chicofgo_white">
        <Container className="pt-5">
          <Row>
            <BusinessSiderbar />
            <Col>
              <Row className="bg-white">
                <Col sm={12} className="text-center pt-2">
                  <h4>訂單詳細</h4>
                </Col>
                <Col sm={12} className="py-4">
                  <h5>訂單內容</h5>
                </Col>
                <Row className="text-center border-top border-bottom ms-1 py-3 align-items-center">
                  <Col sm={3} className="align-middle">
                    {product.brand}
                  </Col>
                  <Col sm={3}>{product.name}</Col>
                  <Col sm={3}>x {product.quantity}</Col>
                  <Col sm={3}>{product.price}</Col>
                </Row>
                <Col sm={12} className="text-end py-1">
                  小記
                </Col>
                <Col sm={12} className="text-end py-1">
                  商品折抵
                </Col>
                <Col sm={12} className="text-end py-1">
                  運費
                </Col>
                <Col sm={12} className="text-end py-1">
                  總計
                </Col>
                <Col
                  sm={12}
                  className="pt-2 border-top border-bottom pt-4 pb-3"
                >
                  <h5>收件人資訊</h5>
                </Col>
                <Col sm={12} className="py-1">
                  收件人
                </Col>
                <Col sm={12} className="py-1">
                  收件人地址
                </Col>
                <Col sm={12} className="py-1">
                  收件人電話
                </Col>
                <Col sm={12} className="py-1">
                  運送方式
                </Col>
                <Col sm={12} className="py-1">
                  付款方式
                </Col>
                <Col sm={12} className="py-1 text-end">
                  <Link to={`/businessOrder`}>
                    <Button variant="chicofgo-brown text-white">返回</Button>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  });
}

export default BusinessOrder;
