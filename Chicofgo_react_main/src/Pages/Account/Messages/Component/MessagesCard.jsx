import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
// import yourImg from './coupon-card-bg.svg'
import style from './MessagesCard.module.scss';
// import styled from 'styled-components'

import { BsFillBagCheckFill } from 'react-icons/bs';

function MessagesCard(props) {
  //   const [btnText, setBtnText] = useState('領取');

  const MessageType = props.msgType;

  function checkTypeSetIcon(props) {
    if (MessageType === 'order') {
    } else if (MessageType === 'coupon') {
    } else if (MessageType === 'delivery') {
    } else {
    }
  }

  return (
    <Container fluid className={`${style.messageContent} my-1 `}>
      <Row className={`${style.messageAll} justify-content-center`}>
        <Col className={`col-3 px-0 justify-content-center`}>
          <div
            className={`${style.messageIcon}  text-center chicofgo_brown pt-2`}
          >
            <h1 className={`chicofgo_white_font`}>
              <BsFillBagCheckFill />
            </h1>
          </div>
        </Col>
        <Col className={`col-9 ps-1 pe-5 py-3`}>
          <Row>
            <Col>
              <h3>
                訂單完成<span className={`px-3`}>2022/1/1 20:17</span>
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>
                您在純粹飲品下訂的[膠囊咖啡]
                黃金克立瑪風味已完成交易，前往評價區留下您的使用評價吧!
              </h2>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default MessagesCard;
