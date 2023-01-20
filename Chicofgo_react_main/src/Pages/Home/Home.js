import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './Home.module.scss';
import Carousels from './Component/Carousels';
import CardListS from './Component/CardListS';
import Card from '../ComponentShare/Card';
import { brands, cardInfo } from '../../Config/ProductConfig';
import { useNavigate } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
// import Card from 'react-bootstrap/Card';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  function goToDetail(cardId) {
    navigate(`/product_detail/${cardId}`, { replace: false });
  }

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
            showImg={['ads-1.png', 'ads-2.png', 'ads-3.png']}
            changeDelay={1500}
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

      <Row className={`${style.pageOne} justify-content-center`}>
        <Col>
          <Row>
            <Col className={`${style.pageOneTitle} text-center mt-5 mb-3`}>
              <p>本日精選商品!第二件6折</p>
            </Col>
          </Row>
          <Row>
            <Col className={`${style.cardListS} position-relative m-5`}>
              <p class="position-absolute top-0 start-2 translate-middle ">
                為您推薦
              </p>
              <CardListS
                className={`start-5 position-relative`}
                showImg={[
                  'producet1.png',
                  'producet2.png',
                  'producet3.png',
                  'producet4.png',
                  'producet5.png',
                  'producet6.png',
                  'producet7.png',
                  'producet8.png',
                ]}
                cardHeight={'153px'}
              />
            </Col>
          </Row>
          <Row className={`justify-content-center`}>
            <Col
              className={`d-flex justify-content-between flex-wrap mx-0 my-5`}
              md={8}
            >
              {cardInfo.map((info) => {
                return (
                  <div key={info.id} onClick={() => goToDetail(info.id)}>
                    <Card title={info.title} rating={info.rating} />
                  </div>
                );
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
