import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

function Login() {
  return (
    <Fragment>
      <Container fluid className="background py-4">
        <div className="content mx-auto my-5">
          <div>
            <h2 className="title text-center fs-1 fw-bold">會員登入</h2>
          </div>
          <div className="img"></div>
          <div className="formControl">
            <Form className="form mx-auto">
              <div className="mb-3">
                <Link to="/register" className="goRegisterBtn textNoDecoration">
                  前往註冊會員
                </Link>
              </div>
              <FloatingLabel
                controlId="floatingInput"
                label="帳號："
                className="mb-3"
              >
                <Form.Control type="email" placeholder=" " />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="密碼："
                className="mb-3"
              >
                <Form.Control type="email" placeholder=" " />
              </FloatingLabel>

              <Row className="mb-3 justify-content-between">
                <Col className="col-auto">
                  <Form.Group controlId="showPassword">
                    <Form.Check type="checkbox" label="顯示密碼" />
                  </Form.Group>
                </Col>
                <Col className="col-auto">
                  <Form.Group controlId="remeberMe">
                    <Form.Check type="checkbox" label="記住我的帳號" />
                  </Form.Group>
                </Col>
              </Row>
              <div className="mx-auto" style={{ width: 200 }}>
                <Button
                  variant="chicofgo-brown"
                  className="loginBtn mx-auto chicofgo_white_font"
                >
                  登入
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}
export default Login;
