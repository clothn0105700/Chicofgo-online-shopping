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
import ProductsList from './Components/ProductsList';

function BusinessProducts() {

  return (
    <div className="chicofgo_white">
      <Container className="pt-5">
        <Row>
          <BusinessSiderbar />
          <Col>
            <Row className="bg-white">
              <Col sm={12} className="text-center pt-2">
                <h4>我的商品</h4>
              </Col>

              <Col sm={6} className="my-2">
                <div className="input-group">
                  <Col sm={4}>
                    <select
                      className="form-select"
                      id="inputGroupSelect04"
                      aria-label="Example select with button addon"
                    >
                      <option selected>商品名稱</option>
                      <option value="1">商品貨號</option>
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
              <Col sm={6} className="my-2">
                <InputGroup className="mb-3">
                  <div className="d-flex align-items-center mx-2">類別</div>
                  <Form.Control
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>

              <Col sm={6} className="my-2">
                <InputGroup className="mb-3">
                  <div className="d-flex align-items-center mx-2">價格</div>
                  <Form.Control
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                  />
                  <div className="d-flex align-items-center mx-2">-</div>
                  <Form.Control
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
              <Col sm={6}></Col>
              <Col sm={2}>
                <Button className="px-5" variant="chicofgo-brown text-white">
                  搜尋
                </Button>
              </Col>
              <Col sm={2}>
                <Button className="px-5" variant="chicofgo-khaki text-white">
                  重設
                </Button>
              </Col>

              <Col sm={12} className="my-3">
                查詢結果
              </Col>
              <div className="chicofgo_gray d-flex text-center py-2">
                <Col>商品名稱</Col>
                <Col>商品貨號</Col>
                <Col>價錢</Col>
                <Col>商品數量</Col>
                <Col>已售出</Col>
                <Col>狀態</Col>
              </div>
            </Row>
            <ProductsList />
            <ProductsList />
            <ProductsList />
            <ProductsList />
            <ProductsList />
          </Col>
        </Row>
      </Container>
    </div>
    // <Container>
    //   <Row>
    //     <BusinessSiderbar />
    //     <Col sm={9} className="mt-4">
    //       <h2 className="text-center">我的商品</h2>
    //       <Row className="border mb-2">
    //         <Col className="btn">品名</Col>
    //         <Col className="btn">類別</Col>
    //         <Col className="btn">品項</Col>
    //         <Col className="btn">售價</Col>
    //         <Col className="btn">庫存</Col>
    //         <Col></Col>
    //       </Row>
    //       <ProductsList />
    //       <ProductsList />
    //       <ProductsList />
    //       <ProductsList />
    //       <ProductsList />
    //       <ProductsList />
    //       <ProductsList />
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default BusinessProducts;
