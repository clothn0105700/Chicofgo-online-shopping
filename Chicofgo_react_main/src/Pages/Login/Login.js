import { Link, useNavigate } from 'react-router-dom';
import { React, Fragment, useState, useEffect, useContext } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
} from 'react-bootstrap';
import style from './Login.module.scss';
import axios from 'axios';
import { AuthContext } from '../../Hook/AuthContext';

function Login() {
  const { isLoggedIn, setUsername, setIsLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(-1);
    }
  }, [isLoggedIn]);

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
    // console.log(response.data);
    // console.log(response.status);

    if (response.status === 200) {
      console.log('登入成功');
      setIsLoggedIn(true);
      setUsername(response.data.member.name);
      navigate(-1);
    }
  }
  return (
    <Fragment>
      <Container fluid className={`${style.background} py-4`}>
        <div className={`${style.content} mx-auto`}>
          <div>
            <h2
              className={`text-center fs-2 chicofgo-font-700 chicofgo_brown_font`}
            >
              會員登入
            </h2>
          </div>
          <div className={`${style.img}`}></div>
          <div className={`${style.formControl}`}>
            <Form className={`${style.form} mx-auto`}>
              <div className={`mb-3`}>
                <Link
                  to="/register"
                  className={`chicofgo_brown_font text-decoration-none`}
                >
                  前往註冊會員
                </Link>
              </div>
              <FloatingLabel
                controlId="floatingInput"
                label="信箱："
                className={`mb-3`}
              >
                <Form.Control
                  type="email"
                  placeholder=" "
                  name="email"
                  value={member.email}
                  onChange={handleChange}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="密碼："
                className={`mb-3`}
              >
                <Form.Control
                  type="password"
                  placeholder=" "
                  name="password"
                  value={member.password}
                  onChange={handleChange}
                />
              </FloatingLabel>

              <Row className={`mb-3 justify-content-bewteen`}>
                <Col md="auto">
                  <Form.Group controlId="showPassword">
                    <Form.Check type="checkbox" label="顯示密碼" />
                  </Form.Group>
                </Col>
                <Col className={`col-auto`}>
                  <Form.Group controlId="remeberMe">
                    <Form.Check type="checkbox" label="記住我的帳號" />
                  </Form.Group>
                </Col>
              </Row>
              <div className={`mx-auto`} style={{ width: 200 }}>
                <Button
                  variant="chicofgo-brown"
                  className={`${style.loginBtn} mx-auto chicofgo_white_font`}
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
