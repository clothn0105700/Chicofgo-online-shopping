import { useState } from 'react';

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
import BusinessSiderbar from '../Components/BusinessSiderbar';
import BusinessReviewDetail from './Components/BusinessReviewDetail';

// import Date
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import ZhTW from 'date-fns/locale/zh-TW';
registerLocale('zh-TW', ZhTW);

function BusinessReview() {
  //datePicker
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="chicofgo_white">
      <Container className="pt-5">
        <Row>
          <BusinessSiderbar />
          <Col>
            <Row className="bg-white">
              <Col sm={12} className="text-center pt-2">
                <h4>賣場評價</h4>
              </Col>
              <Col sm={6} className="">
                <InputGroup className="mb-3">
                  <div className="d-flex align-items-center mx-2">評價時間</div>
                  <Col>
                    <DatePicker
                      locale="zh-TW"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </Col>

                  <Col>
                    <div className="d-flex align-items-center mx-2">-</div>
                  </Col>

                  <Col>
                    <DatePicker
                      locale="zh-TW"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </Col>
                </InputGroup>
              </Col>
              <Col sm={6}></Col>
              <Col sm={6} className="">
                <InputGroup className="mb-3">
                  <div className="d-flex align-items-center mx-2">商品名稱</div>
                  <Form.Control
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
              <Col sm={6}></Col>
              <Col sm={6} className="">
                <InputGroup className="mb-3">
                  <div className="d-flex align-items-center mx-2">規格名稱</div>
                  <Form.Control
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
              <Col sm={6}></Col>
              <Col sm={6} className="">
                <InputGroup className="mb-3">
                  <div className="d-flex align-items-center mx-2">會員名稱</div>
                  <Form.Control
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
              <Col sm={6}></Col>
              <Col sm={5} className="mb-3">
                <Button className="ms-2 me-4 px-4">重設</Button>
                <Button className="px-4">查詢</Button>
              </Col>
            </Row>
            <Row className="bg-white mt-3">
              <Col className="btn" sm={2}>
                全部
              </Col>
              <Col className="btn" sm={2}>
                待回覆
              </Col>
              <Col className="btn" sm={2}>
                已回覆
              </Col>
              <Col sm={2}></Col>
              <Col sm={2}></Col>
              <Col sm={2}></Col>
              <Col className="btn" sm={2}>
                全部
              </Col>
              <Col className="btn" sm={2}>
                五顆星
              </Col>
              <Col className="btn" sm={2}>
                四顆星
              </Col>
              <Col className="btn" sm={2}>
                三顆星
              </Col>
              <Col className="btn" sm={2}>
                兩顆星
              </Col>
              <Col className="btn" sm={2}>
                一顆星
              </Col>
              <Col sm={2} className="text-center my-4">
                查詢結果
              </Col>
              <Col sm={10}></Col>
              <div className="chicofgo_gray d-flex text-center py-2">
                <Col>商品資訊</Col>
                <Col>評價內容</Col>
                <Col>我的回評</Col>
              </div>
            </Row>
            <BusinessReviewDetail />
            <BusinessReviewDetail />
            <BusinessReviewDetail />
            <BusinessReviewDetail />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BusinessReview;
