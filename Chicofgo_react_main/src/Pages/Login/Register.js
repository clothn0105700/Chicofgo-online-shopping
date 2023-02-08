import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button, Row, Col } from 'react-bootstrap';
import style from './Register.module.scss';
import { useState } from 'react';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [member, setMember] = useState({
    account: 'c8763333',
    email: '7788@gmail.com',
    phone: '0912345678',
    name: '阿明',
    password: 'test1234',
    confirmPassword: 'test1234',
  });

  const [regErrors, setregErrors] = useState({
    accountError: '',
    account: false,
    emailError: '',
    email: false,
    phoneError: '',
    phone: false,
    nameError: '',
    name: false,
    passwordError: '',
    password: false,
    confirmPasswordError: '',
    confirmPassword: false,
  });
  function handleChange(e) {
    // console.log(e);
    let newMember = { ...member };
    newMember[e.target.name] = e.target.value;
    setMember(newMember);
    console.log(member);
    // setMember({ ...member, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    console.log('handleSubmit');
    // 關閉表單的預設行為
    e.preventDefault();
    try {
      let response = await axios.post(
        'http://localhost:3001/api/auth/register',
        member
      );

      console.log(response.data);
      if (response.status === 200) {
        setregErrors({
          accountError: '',
          account: false,
          emailError: '',
          email: false,
          phoneError: '',
          phone: false,
          nameError: '',
          name: false,
          passwordError: '',
          password: false,
          confirmPasswordError: '',
          confirmPassword: false,
        });
        console.log('註冊成功');
        navigate('/login');
      }
    } catch (e) {
      if (e.response.status === 401) {
        let allErrors = e.response.data.errors;
        console.log('更新失敗');
        console.log(allErrors);

        let newErrors = {
          accountError: '',
          account: false,
          emailError: '',
          email: false,
          phoneError: '',
          phone: false,
          nameError: '',
          name: false,
          passwordError: '',
          password: false,
          confirmPasswordError: '',
          confirmPassword: false,
        };
        allErrors.map(
          (thisError) => (
            (newErrors[thisError.param] = true),
            (newErrors[thisError.param + 'Error'] = thisError.msg)
          )
        );
        setregErrors(newErrors);
        console.log(regErrors);
      }
    }
  }
  // ---顯示密碼---
  const [passwordIsOpen, setPasswordIsOpen] = useState(false);
  const passwordOpen = () => {
    setPasswordIsOpen(!passwordIsOpen);
  };
  return (
    <Fragment>
      <Container fluid className={`${style.background} py-4`}>
        <div className={`${style.content} ${style.registerContent}  mx-auto`}>
          <div>
            <h2
              className={`text-center fs-2 chicofgo-font-700 chicofgo_brown_font`}
            >
              會員註冊
            </h2>
          </div>
          <div className={`${style.img}`}></div>
          <div className={`${style.formControl} ${style.registerControl}`}>
            <Form className={`${style.form} mx-auto`}>
              <div className={`mb-3`}>
                <Link
                  to="/Login"
                  className={`chicofgo_brown_font text-decoration-none`}
                >
                  前往登入
                </Link>
              </div>
              <FloatingLabel
                controlId="floatingInput"
                label="帳號："
                className={`mb-3`}
              >
                <Form.Control
                  type="text"
                  placeholder=" "
                  // id="email"
                  name="account"
                  value={member.account}
                  onChange={handleChange}
                  isInvalid={regErrors.account}
                />
                <Form.Control.Feedback type="invalid">
                  {regErrors.accountError}
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="電子信箱："
                className={`mb-3`}
              >
                <Form.Control
                  type="email"
                  placeholder=" "
                  // id="email"
                  name="email"
                  value={member.email}
                  onChange={handleChange}
                  isInvalid={regErrors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {regErrors.emailError}
                </Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="手機號碼："
                className={`mb-3`}
              >
                <Form.Control
                  type="text"
                  placeholder=" "
                  // id="email"
                  name="phone"
                  value={member.phone}
                  onChange={handleChange}
                  isInvalid={regErrors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {regErrors.phoneError}
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="姓名："
                className={`mb-3`}
              >
                <Form.Control
                  type="text"
                  placeholder=" "
                  name="name"
                  value={member.name}
                  onChange={handleChange}
                  isInvalid={regErrors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {regErrors.nameError}
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="密碼："
                className={`mb-3`}
              >
                <Form.Control
                  type={passwordIsOpen ? 'text' : 'password'}
                  placeholder=" "
                  name="password"
                  value={member.password}
                  onChange={handleChange}
                  isInvalid={regErrors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {regErrors.passwordError}
                </Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="確認密碼："
                className={`mb-3`}
              >
                <Form.Control
                  type={passwordIsOpen ? 'text' : 'password'}
                  placeholder=" "
                  // id="confirmPassword"
                  name="confirmPassword"
                  value={member.confirmPassword}
                  onChange={handleChange}
                  isInvalid={regErrors.confirmPassword}
                />
                <Form.Control.Feedback type="invalid">
                  {regErrors.confirmPasswordError}
                </Form.Control.Feedback>
              </FloatingLabel>
              <Row className={`mb-3 justify-content-bewteen`}>
                <Col md="auto">
                  <Form.Group controlId="showPassword">
                    <Form.Check
                      type="checkbox"
                      label="顯示密碼"
                      onClick={passwordOpen}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* <FloatingLabel
                controlId="floatingInput"
                label="地址："
                className={`mb-3`}
              >
                <Form.Control
                  type="text"
                  placeholder=" "
                  // id="address"
                  name="address"
                  value={member.address}
                  onChange={handleChange}
                />
              </FloatingLabel> */}

              {/* <FloatingLabel
                controlId="floatingInput"
                label="生日："
                className={`mb-3`}
              >
                <Form.Control
                  type="datetime"
                  placeholder=" "
                  // id="birthday"
                  name="birthday"
                  value={member.birthday}
                  onChange={handleChange}
                />
              </FloatingLabel> */}
              <div className={`mx-auto pt-3`} style={{ width: 200 }}>
                <Button
                  className={`${style.doRegisterBtn} mx-auto chicofgo_white_font`}
                  variant="chicofgo-brown"
                  onClick={handleSubmit}
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
