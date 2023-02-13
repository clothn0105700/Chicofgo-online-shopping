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
  const [data, setData] = useState([]);
  console.log('orderDetail', orderId);

  useEffect(() => {
    async function getdata() {
      let response = await axios.get(
        `http://localhost:3001/api/business/order/${orderId}`
      );
      setData(response.data);
    }
    getdata();
  }, []);
  console.log(data);
  //取得陣列資料放進data

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
              <Row className="text-center border-top border-bottom ms-1 py-3">
                <Col sm={3}>圖片</Col>
                <Col sm={3}>
                  【情人節禮物首選】 經典香水禮盒 過年送禮生日禮物男女都適合
                </Col>
                <Col sm={3}>x1</Col>
                <Col sm={3}>790</Col>
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
              <Col sm={12} className="pt-2 border-top border-bottom pt-4 pb-3">
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
}

export default BusinessOrder;
