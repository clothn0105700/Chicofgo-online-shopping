import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Coupon.scss';
import CouponCard from './Component/CouponCard';
import CouponCard2 from './Component/CouponCard2';
import CouponCard3 from './Component/CouponCard3';

function Coupon() {
  return (
    <Container fluid className="coupon-container">
      <Row className="justify-content-center ">
        <Col className="mainPage firstPage" xs={8} md={8} xl={6} xxl={5}>
          <Row className="one-area-title my-3">
            <h1 className="my-3">早鳥辦年貨馬上領券! 下單更優惠!</h1>
          </Row>
          <Row className="one-area">
            <Col className="col-4 p-1">
              <CouponCard title="優惠券名稱" height="190px"></CouponCard>
            </Col>
            <Col className="col-4 p-1">
              <CouponCard
                title="12/25 商城$299免運"
                height="190px"
              ></CouponCard>
            </Col>
            <Col className="col-4 p-1">
              <CouponCard title="測試測試" height="190px"></CouponCard>
            </Col>
            <Col>
              <CouponCard title="優惠券名稱" height="190px"></CouponCard>
            </Col>
            <Col>
              <CouponCard title="優惠券名稱" height="190px"></CouponCard>
            </Col>
            <Col>
              <CouponCard title="優惠券名稱" height="190px"></CouponCard>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="justify-content-center row2">
        <Col className="mainPage secendPage2" xs={8} md={8} xl={6} xxl={5}>
          <Row className="one-area-title ">
            <h1 className="my-3">新春限定優惠券</h1>
          </Row>
          <Row className="two-area">
            <Col className="col-6 p-1">
              <CouponCard2 title="優惠券名稱" height="100px"></CouponCard2>
              <CouponCard2 title="優惠券名稱" height="100px"></CouponCard2>
              <CouponCard2 title="優惠券名稱" height="100px"></CouponCard2>
            </Col>
            <Col className="col-6 p-1">
              <CouponCard2 title="優惠券名稱" height="100px"></CouponCard2>
              <CouponCard2
                title="12/25 商城$299免運"
                height="100px"
              ></CouponCard2>
              <CouponCard2
                title="12/25 商城$299免運"
                height="100px"
              ></CouponCard2>
            </Col>
          </Row>
        </Col>
        <hr className="hr1" />
      </Row>

      <Row className="justify-content-center row3">
        <Col className="mainPage firstPage" xs={8} md={8} xl={6} xxl={5}>
          <Row className="three-area-title ">
            <h1 className="my-3">聖誕優惠券</h1>
          </Row>
          <Row className="two-area">
            <Col className="col-12">
              <CouponCard3
                title="12/25 聖誕商城全日"
                subtitle="$299免運每小時限量開搶，滿額使用，用完為止！"
                height="200px"
              ></CouponCard3>
            </Col>
            <Col className="col-12">
              <CouponCard3
                title="12/25 聖誕商城全日"
                subtitle="$299免運每小時限量開搶，滿額使用，用完為止！"
                height="200px"
              ></CouponCard3>
            </Col>
            <Col className="col-12">
              <CouponCard3
                title="12/25 聖誕商城全日"
                subtitle="$299免運每小時限量開搶，滿額使用，用完為止！"
                height="200px"
              ></CouponCard3>
            </Col>
          </Row>
        </Col>
        <hr className="hr1" />
      </Row>
      <Row className="justify-content-center ">
        <Col className="mainPage firstPage" xs={8} md={8} xl={6} xxl={5}>
          <Row className="one-area-title ">
            <h1 className="my-3">指定商城優惠券</h1>
          </Row>
          <Row className="four-area">
            <Col className="col-4 p-1">
              <CouponCard title="優惠券名稱" height="190px"></CouponCard>
            </Col>
            <Col className="col-4 p-1">
              <CouponCard
                title="12/25 商城$299免運"
                height="190px"
              ></CouponCard>
            </Col>
            <Col className="col-4 p-1">
              <CouponCard title="測試測試" height="190px"></CouponCard>
            </Col>
            <Col>
              <CouponCard title="優惠券名稱" height="190px"></CouponCard>
            </Col>
            <Col>
              <CouponCard title="優惠券名稱" height="190px"></CouponCard>
            </Col>
            <Col>
              <CouponCard title="優惠券名稱" height="190px"></CouponCard>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Coupon;
