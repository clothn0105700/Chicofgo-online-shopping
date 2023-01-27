import { Outlet } from 'react-router-dom';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MemberSideBar from './Account/Components/MemberSideBar';
import SideBar from './Account/Components/SideBar';
import memberBackground from './Account/Components/member_background.png';

function Member() {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: `url(${memberBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Row>
          <Col xs={2} className={`p-0`}>
            {/* <MemberSideBar /> */}
            <SideBar />
          </Col>
          <Col xs={10}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Member;
