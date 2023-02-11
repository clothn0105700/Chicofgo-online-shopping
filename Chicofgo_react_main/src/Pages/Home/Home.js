import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './Home.module.scss';
import Carousels from './Component/Carousels';
import CardListS from './Component/CardListS';
import Card from '../ComponentShare/ThisCard';
import { cardInfo } from '../../Config/ProductConfig';
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import Button from 'react-bootstrap/Button';
import MoreCard from '../ComponentShare/MoreCard';

function Home() {
  const navigate = useNavigate();
  function goToDetail(cardId) {
    navigate(`/product_detail/${cardId}`, { replace: false });
  }

  return (
    <Container fluid>
      <Row className={`p-0 justify-content-center ${style.homePage}`}>
        <Col xl={12} xxl={10}>
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
                <Col
                  className={`${style.pageTitle} text-center mt-5 mb-3 chicofgo_brown_font`}
                >
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
              <Row>
                <Col
                  className={`d-flex justify-content-center flex-wrap mx-0 my-5`}
                >
                  <MoreCard amount={12} product_id={[9, 11, 15, 18, 22]} />
                  {/* {cardInfo.map((info) => {
                    return (
                      <div
                        key={info.id}
                        onClick={() => goToDetail(info.id)}
                        className={`mx-3`}
                      >
                        <Card
                          title={info.title}
                          rating={info.rating}
                          product_id={87}
                        />
                      </div>
                    );
                  })} */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row
        className={`${style.pageTwo} ${style.homePage} justify-content-center`}
      >
        <Col>
          <Row>
            <Col className={`${style.pageTitle2} text-center mt-5 mb-3`}>
              <p>眾多優惠價商品任君挑選</p>
            </Col>
          </Row>
          <Row className={`justify-content-center`}>
            <Col className={`${style.pageTwoBg} col-2 position-relative `}>
              <p class={`position-absolute top-0 start-2 translate-middle `}>
                New!
              </p>
              <CardListS
                // className={`start-5`}
                showImg={['producet2.png']}
                cardHeight={'153px'}
              />
              <CardListS
                // className={`start-5`}
                showImg={['producet3.png']}
                cardHeight={'153px'}
              />
            </Col>
            <Col
              className={`${style.pageTwoBg} col-6 justify-content-center text-center px-5`}
            >
              <span className={`${style.subTitle}`}>
                新春優惠價!眾多折扣商品
                <br />
                開放搶購!
              </span>
              <CardListS
                // className={`start-5`}
                showImg={[
                  'producet2.png',
                  'producet3.png',
                  'producet4.png',
                  'producet5.png',
                ]}
                cardHeight={'153px'}
              />
              <Button
                bsPrefix="none"
                className={`${style.pageTwoBtn} mt-4 px-5 py-1`}
              >
                立即前往商場
              </Button>
            </Col>
          </Row>
          <Row className={`justify-content-center`}>
            <Col
              className={`${style.pageTwoBg} col-6 position-relative text-center`}
            >
              <h5 class={`position-absolute top-0 start-2 translate-middle `}>
                限時
                <br />
                搶購
              </h5>
              <span className={`${style.subTitle}`}>
                新春優惠價!眾多折扣商品
                <br />
                開放搶購!
              </span>
              <CardListS
                showImg={[
                  'producet2.png',
                  'producet5.png',
                  'producet3.png',
                  'producet4.png',
                ]}
                cardHeight={'153px'}
              />
              <CardListS
                // className={`start-5`}
                showImg={[
                  'producet4.png',
                  'producet3.png',
                  'producet2.png',
                  'producet1.png',
                ]}
                cardHeight={'153px'}
              />
              <Button
                bsPrefix="none"
                className={`${style.pageTwoBtn} mt-5 mb-3  px-5 py-1`}
              >
                立即前往商場
              </Button>
            </Col>
            <Col className={`${style.pageTwoBg} col-3 text-center`}>
              <span className={`${style.subTitle}`}>日本熱銷新品</span>
              <div className={`py-4`}>
                <CardListS
                  showImg={['producet4.png', 'producet3.png']}
                  cardHeight={'153px'}
                />
                <CardListS
                  showImg={['producet4.png', 'producet3.png']}
                  cardHeight={'153px'}
                />
              </div>
              <Button
                bsPrefix="none"
                className={`${style.pageTwoBtn} mt-4 mb-3 px-4 py-1`}
              >
                立即前往商場
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className={`${style.pageTitle} text-center mt-5 mb-3`}>
              <p>最熱門商品</p>
            </Col>
          </Row>
          <Row>
            <Col
              className={`d-flex justify-content-center flex-wrap mx-0 my-5`}
            >
              <MoreCard amount={12} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className={`justify-content-center ${style.homePage}`}>
        <Col>
          <Row>
            <Col className={`${style.pageTitle2} text-center my-5 `}>
              <p>CHICOGO推廣環境友善認證商品</p>
            </Col>
          </Row>
          <Row className={`justify-content-center  text-center`}>
            <Col
              className={`${style.pageBgGray} position-relative col-4 me-3 py-3`}
            >
              <span className={`${style.subTitle} my-5`}>環境友善相關商品</span>
              <br />
              <p
                class={`${style.leftUpImgBody} position-absolute top-5 start-0 translate-middle `}
              >
                <Image src={require('../../Img/Home/bird_friendly.png')} />
                {/* ./Component/bird_friendly.png */}
              </p>
              <Image
                className={`${style.leftUpImg} m-3`}
                src={require('../../Img/Home/producet2.png')}
              />
              <Image
                className={`${style.leftUpImg} m-3`}
                src={require('../../Img/Home/producet3.png')}
              />
            </Col>
            <Col
              className={`${style.pageBgGray} position-relative  col-3 ms-3 py-3`}
            >
              <span className={`${style.subTitle} `}>環境友善認證</span>
              <p
                class={`${style.leftUpImgBody} position-absolute top-0 start-0 translate-middle `}
              >
                <Image src={require('../../Img/Home/rain_friendly.png')} />
              </p>
              <br />
              <Image
                className={`${style.leftUpImg2} m-3`}
                src={require('../../Img/Home/total_friendly.png')}
              />
            </Col>
          </Row>
          <Row className={`justify-content-center my-5`}>
            <Col
              className={`${style.pageBgGray}  position-relative col-7 ms-3 py-3 d-flex `}
            >
              <p
                class={`${style.leftUpImgBody} position-absolute top-5 start-0 translate-middle `}
              >
                <Image
                  src={require('../../Img/Home/organic_certification.png')}
                />
              </p>
              <Row
                className={`justify-content-between align-items-center  text-center my-5`}
              >
                <Col className={`col-7`}>
                  <Image
                    className={`${style.leftUpImg3} m-3`}
                    src={require('../../Img/Home/p3_big.png')}
                    thumbnail
                  />
                </Col>
                <Col className={`col-5 px-3`}>
                  <article className={`${style.picWithText} text-start`}>
                    關於非格咖啡 Figure & Ground Coffee
                    <br />
                    <br />
                    <br />
                    藝術是設計師創造的經典，追求細節。用心觀察。激發創意，只為完美的作品。而咖啡何嘗不是藝術的一種？
                    <br />
                    <br />
                    <br />
                    Figure & Ground Coffee
                    團隊為設計師出身，並將設計精神帶進咖啡的世界。Figure &
                    Ground 源自於一種獨特的設計手法，又稱作『圖地反轉』。
                    <br />
                    <br />
                    <br />
                    Figure& Ground Coffee
                    團隊從選購高品質生豆，到研究並訂定出最佳的烘焙法層層把關，只為了呈現一
                    杯表現極致風味的咖啡。除了專注於咖啡的風味，我們更將咖啡外包裝加以設計，為每款咖啡豆細心打造獨特的包裝視覺，為每日的咖啡添上活潑的藝術氣息。每個細節，都是整體的一部分。
                    <br />
                    <br />
                    <br />
                    秉持這個精神，我們創造了非格咖啡 Figure & Ground Coffee
                  </article>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className={`${style.pageBgGray2} justify-content-center my-5`}>
            <Col
              className={`${style.pageBgWhite} shadow  col-8 m-5 px-5  d-flex justify-content-center rounded-pill`}
            >
              <Image
                className={` my-4 img-fluid object-fit-contain`}
                src={require('../../Img/Home/brand_list.png')}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className={`justify-content-center ${style.homePage}`}>
        <Col>
          <Row>
            <Col className={`${style.pageTitle} text-center my-5`}>
              <p>您最近看過的商品</p>
            </Col>
          </Row>
          <Row>
            <Col
              className={`d-flex justify-content-center flex-wrap mx-0 my-5`}
            >
              <MoreCard amount={12} product_id={[500, 411, 515, 718, 122]} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
