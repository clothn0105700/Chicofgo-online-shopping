import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import style from './CouponCard2.module.scss';

function CouponCard2(props) {
  const [btnText, setBtnText] = useState('領取');
  return (
    <Container
      fluid
      className={`${style.ticketContent} d-flex flex-column justify-content-center`}
      style={{
        height: props.height,
      }}
    >
      <Row
        className={`text-nowrap align-items-center justify-content-center text-center`}
      >

        <Col className={`col p-2 p-md-0 text-end`}>
          <h3 className={`my-auto`}>{props.title}</h3>
        </Col>
        <Col className={`col-4 col-md-5 ps-2 ps-md-4 text-start`}>
          <Button
            variant="chicofgo-green"
            className={`p-1 px-3`}
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

export default CouponCard2;

