import React from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
  return (
    <Fragment>
      <Container fluid className="background py-4">
        <div className="content registerContent mx-auto">
          <div>
            <h2 className="title text-center fs-1 fw-bold">會員註冊</h2>
          </div>
          <div className="img"></div>
          <div className="formControl registerControl">
            <Form className="form mx-auto">
              <div className="mb-3">
                <Link to="/Login" className="goRegisterBtn textNoDecoration">
                  前往登入
                </Link>
              </div>
              <FloatingLabel
                controlId="floatingInput"
                label="創建帳號："
                className="mb-3"
              >
                <Form.Control type="text" placeholder=" " />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="創建密碼："
                className="mb-3"
              >
                <Form.Control type="password" placeholder=" " />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="密碼確認："
                className="mb-3"
              >
                <Form.Control type="password" placeholder=" " />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="email："
                className="mb-3"
              >
                <Form.Control type="email" placeholder=" " />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="地址："
                className="mb-3"
              >
                <Form.Control type="text" placeholder=" " />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="生日："
                className="mb-3"
              >
                <Form.Control type="datetime" placeholder=" " />
              </FloatingLabel>
              <div className="mx-auto" style={{ width: 200 }}>
                <Button
                  className="doRegisterBtn mx-auto chicofgo_white_font"
                  variant="chicofgo-brown"
                >
                  送出
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
