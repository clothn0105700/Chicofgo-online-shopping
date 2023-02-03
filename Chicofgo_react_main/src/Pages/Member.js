import { Outlet, Navigate } from 'react-router-dom';
import { React, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from './Account/Components/SideBar';
import memberBackground from './Account/Components/member_background.png';
import { AuthContext } from '../Hook/AuthContext';
function Member() {
  const { isLoggedIn } = useContext(AuthContext);
  if (!isLoggedIn) return <Navigate to="/login" replace={true} />;
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
