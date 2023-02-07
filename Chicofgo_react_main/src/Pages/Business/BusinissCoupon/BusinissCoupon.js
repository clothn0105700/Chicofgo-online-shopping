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

function BusinissCoupon() {
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
                <InputGroup className="mb-3">
                  <DropdownButton
                    variant="outline-secondary"
                    title="Dropdown"
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
                  <Form.Control aria-label="Text input with dropdown button" />
                </InputGroup>
              </Col>
              <Col sm={2} className="my-4">
                <Button variant="chicofgo-brown">查詢</Button>
              </Col>
              <Col sm={12}>查詢結果</Col>
              <div className="chicofgo_gray d-flex text-center py-2">
                <Col>日期</Col>
                <Col>編號</Col>
                <Col>購買人</Col>
                <Col>運送方式</Col>
                <Col>操作</Col>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BusinissCoupon;
