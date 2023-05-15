import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './CouponCard3.scss';

function CouponCard3(props) {
  const [btnText, setBtnText] = useState('領取');
  return (
    <Container
      fluid
      className="ticket-content3 d-flex flex-column justify-content-center"
      style={{
        height: props.height,
      }}
    >
      <Row className=" align-items-center text-center justify-content-center">
        <Col className="col-7 ">
          <h3 className="">{props.title}</h3>
          <h5 className="">{props.subtitle}</h5>
        </Col>
        <Col className="col-3 ">
          <Button
            variant="success"
            className="py-1 px-5 mb-1 text-nowrap"
            size="sm"
            // color="light"
            type="button"
            onClick={() => {
              setBtnText('已領取');
            }}
          >
            {btnText}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CouponCard3;
