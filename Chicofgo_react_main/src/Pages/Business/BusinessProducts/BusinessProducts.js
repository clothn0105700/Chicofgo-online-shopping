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
import ProductsList from './Components/ProductsList';
import './BusinessProducts.scss';

function BusinessProducts() {
  const [searchName, setSearchName] = useState('');
  const [searchNumber, setSearchNumber] = useState('');
  const [searchType, setSearchType] = useState('');

  const handleChangeName = (e) => {
    setSearchName(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setSearchNumber(e.target.value);
  };

  const handleChangeType = (e) => {
    setSearchType(e.target.value);
  };

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
                <InputGroup className="mb-3">
                  <div className="d-flex align-items-center mx-2">商品名稱</div>
                  <Form.Control
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    placeholder="請輸入商品名稱"
                    value={searchName}
                    onChange={handleChangeName}
                  />
                </InputGroup>
              </Col>
              <Col sm={6} className="my-2">
                <InputGroup className="mb-3">
                  <div className="d-flex align-items-center mx-2">商品貨號</div>
                  <Form.Control
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    placeholder="請輸入商品貨號"
                    value={searchNumber}
                    onChange={handleChangeNumber}
                  />
                </InputGroup>
              </Col>
              <Col sm={6} className="my-2">
                <InputGroup className="mb-3">
                  <div className="d-flex align-items-center mx-2">商品類別</div>
                  <Form.Control
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    placeholder="請輸入商品類別"
                    value={searchType}
                    onChange={handleChangeType}
                  />
                </InputGroup>
              </Col>
              <div className="chicofgo_gray d-flex text-center py-2">
                <Col className="option">商品名稱</Col>
                <Col className="option">商品貨號</Col>
                <Col className="option">價錢</Col>
                <Col className="option">商品數量</Col>
                <Col className="option">已售出</Col>
                <Col className="option">狀態</Col>
              </div>
            </Row>
            <ProductsList
              searchName={searchName}
              searchNumber={searchNumber}
              searchType={searchType}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BusinessProducts;
