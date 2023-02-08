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
import BusinessOrderList from './Components/BusinessOrderList';

function BusinessOrder() {
  return (
    <div className="chicofgo_white">
      <Container className="pt-5">
        <Row>
          <BusinessSiderbar />
          <Col>
            <Row className="bg-white">
              <Col sm={12} className="text-center pt-2">
                <h4>訂單管理</h4>
              </Col>
              <Col className="btn" sm={2}>
                全部
              </Col>
              <Col className="btn" sm={2}>
                待出貨
              </Col>
              <Col className="btn" sm={2}>
                運送中
              </Col>
              <Col className="btn" sm={2}>
                已完成
              </Col>
              <Col sm={2}></Col>
              <Col sm={2}></Col>

              <Col sm={10} className="my-4">
                <div className="input-group">
                  <Col sm={2}>
                    <select
                      className="form-select"
                      id="inputGroupSelect04"
                      aria-label="Example select with button addon"
                    >
                      <option selected>訂單編號</option>
                      <option value="1">賣家帳號</option>
                      <option value="2">商品</option>
                    </select>
                  </Col>
                  <Col>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Text input with dropdown button"
                    />
                  </Col>
                </div>
              </Col>
              <Col sm={2} className="my-4">
                <Button className="px-5" variant="chicofgo-brown text-white">
                  查詢
                </Button>
              </Col>
              <Col sm={12}>查詢結果</Col>
              <div className="chicofgo_gray d-flex text-center py-2">
                <Col>日期</Col>
                <Col>編號</Col>
                <Col>購買人</Col>
                <Col>狀態</Col>
                <Col>操作</Col>
              </div>
            </Row>
            <Col>
              <BusinessOrderList />
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BusinessOrder;
