import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './Home.module.scss';
import Carousels from './Component/Carousels';
import Nav from 'react-bootstrap/Nav';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function Home() {
  return (
    <Container fluid className={`p-0 ${style.homePage}`}>
      <Carousels
        showImg={['Carousels-1.png', 'Carousels-2.png', 'Carousels-3.png']}
        changeDelay={2000}
        fade={true}
      />
      <Row className={`justify-content-center m-0  ${style.adBanner}`}>
        <Col className={`align-self-center col-10`}>
          <Carousels
            showImg={['news-1.png', 'news-2.png', 'news-3.png']}
            changeDelay={500}
            fade={false}
          />
        </Col>
      </Row>
      <Row className={`align-content-center ${style.homeCategory}`}>
        <Nav className={`d-flex justify-content-center`}>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              <span className={`${style.categoryTitle}`}>篩選類別</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">
              <span>罐裝咖啡</span>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <span>即溶咖啡</span>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <span>咖啡豆</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <span>膠囊咖啡</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <span>冰滴壺</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <span>奶泡機</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <span>咖啡機</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <span>奶精</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <span>濾掛</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>

      <Row className={`justify-content-center`}>
        <Col>
          <Row>
            <Col>為你推薦</Col>
          </Row>
          <Row>
            <Col>為你推薦2</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
