import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [member, setMember] = useState({
    email: '7788@gmail.com',
    password: 'test1234',
  });

  function handleChange(e) {
    setMember({ ...member, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let response = await axios.post(
      'http://localhost:3001/api/auth/login',
      member,
      {
        // 為了跨源存取 cookie
        withCredentials: true,
      }
    );
    console.log(response.data);
  }
  return (
    <Fragment>
      <Container fluid className="background py-4">
        <div className="content mx-auto">
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
                <Form.Control
                  type="email"
                  placeholder=" "
                  value={member.email}
                  onChange={handleChange}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="密碼："
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  placeholder=" "
                  value={member.password}
                  onChange={handleChange}
                />
              </FloatingLabel>

              <Row className="mb-3 justify-content-bewteen">
                <Col md="auto">
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
                  onClick={handleSubmit}
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
