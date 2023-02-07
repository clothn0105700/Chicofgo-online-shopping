import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import style from './Register.module.scss';
import { useState } from 'react';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [member, setMember] = useState({
    email: '7788@gmail.com',
    password: 'test1234',
    confirmPassword: 'test1234',
    birthday: '1990-10-10',
    address: '火星火星火星',
    name: '阿明',
    account: 'c8763333',
  });

  // email input 的 change
  // e.target ==> email input
  // name input 的 change
  // e.target ==> name input
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
    let response = await axios.post(
      'http://localhost:3001/api/auth/register',
      member
    );

    console.log(response.data);
    if (response.status === 200) {
      console.log('註冊成功');
      navigate('/login');
    }
  }
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
                  placeholder=""
                  // id="email"
                  name="account"
                  value={member.account}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Email："
                className={`mb-3`}
              >
                <Form.Control
                  type="email"
                  placeholder=" "
                  // id="email"
                  name="email"
                  value={member.email}
                  onChange={handleChange}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="創建密碼："
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

              <FloatingLabel
                controlId="floatingInput"
                label="密碼確認："
                className={`mb-3`}
              >
                <Form.Control
                  type="password"
                  placeholder=" "
                  // id="confirmPassword"
                  name="confirmPassword"
                  value={member.confirmPassword}
                  onChange={handleChange}
                />
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
                />
              </FloatingLabel>

              <FloatingLabel
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
              </FloatingLabel>

              <FloatingLabel
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
              </FloatingLabel>
              <div className={`mx-auto`} style={{ width: 200 }}>
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
