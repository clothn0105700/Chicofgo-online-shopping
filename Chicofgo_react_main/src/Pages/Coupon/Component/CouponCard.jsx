import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
// import yourImg from './coupon-card-bg.svg'
import style from './CouponCard.module.scss';
// import styled from 'styled-components'

function CouponCard(props) {
  const [btnText, setBtnText] = useState('領取');
  return (
    <Container
      fluid
      className={`${style.ticketContent} d-flex flex-column`}
      style={{
        minHeight: props.height,
      }}
    >
      <Row className={`mx-auto mt-auto text-center`}>
        <Col>
          <h3>{props.title}</h3>
        </Col>
      </Row>
      <Row className={`mx-auto mb-auto`}>
        <Col>
          <Button
            variant="chicofgo-green"
            className={`p-1 px-4 `}
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

export default CouponCard;
