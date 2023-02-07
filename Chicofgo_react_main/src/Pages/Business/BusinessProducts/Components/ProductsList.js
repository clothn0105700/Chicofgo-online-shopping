import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';

function ProductsList(props) {
  return (
    <Row className="text-center border-bottom align-items-center py-1 mt-1 d-flex">
      <Col sm={2} className="my-1">
        123
      </Col>
      <Col sm={2} className="my-1">
        123
      </Col>
      <Col sm={2} className="my-1">
        123
      </Col>
      <Col sm={2} className="my-1">
        123
      </Col>
      <Col sm={2} className="my-1">
        123
      </Col>
      <Col sm={2} className="my-1">
        123
      </Col>
      <Col className="pb-2">
        <Row className="justify-content-end text-center">
          <Col sm={2} className="text-center">
            <Button className="px-2 mx-1" variant="chicofgo-brown text-white">
              詳細
            </Button>
            <Button className="px-2 mx-1" variant="chicofgo-khaki text-white">
              下架
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ProductsList;
