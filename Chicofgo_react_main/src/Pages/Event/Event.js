import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousels from './Component/Carousels';
import style from './Event.module.scss';

function Event() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} className={`${style.event}`}>
          <Carousels
            showImg={[
              '111.jpg',
              'Carousels-1.png',
              'Carousels-2.png',
              'Carousels-3.png',
            ]}
            changeDelay={2000}
            fade={true}
          />
        </Col>
        <Col xs={12}>
          <Carousels
            showImg={['Carousels-1.png', 'Carousels-2.png', 'Carousels-3.png']}
            changeDelay={2000}
            fade={true}
          />
        </Col>
        <Col xs={12}>
          <Carousels
            showImg={['Carousels-1.png', 'Carousels-2.png', 'Carousels-3.png']}
            changeDelay={2000}
            fade={true}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Event;
