import { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import { Row, Col, Form, Button, Image, InputGroup } from 'react-bootstrap';
import { BsFillPencilFill } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import MemberBar from './Components/MemberBar';
import style from './Account.module.scss';
import ChContainer from '../ComponentShare/ChContainer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import ZhTW from 'date-fns/locale/zh-TW';
registerLocale('zh-TW', ZhTW);

function Account() {
  const [inputDisable, setInputDisable] = useState('true');
  const [backendData, setbackendData] = useState({});
  const [startDate, setStartDate] = useState();
  const [selectedOption, setSelectedOption] = useState();
  const [errors, setErrors] = useState({
    nameError: '',
    name: false,
    emailError: '',
    email: false,
    phoneError: '',
    phone: false,
    birthdayError: '',
    birthday: false,
  });

  function handleDateChange(date) {
    setStartDate(date);
    // 改生日
    let newMember = { ...backendData };
    newMember.birthday = date.toLocaleDateString();
    setbackendData(newMember);
    console.log(newMember);
  }

  function handleOptionChange(event) {
    // 改性別
    setSelectedOption(event.target.value);
    let newMember = { ...backendData };
    newMember.gender = event.target.value;
    setbackendData(newMember);
    console.log(newMember);
  }

  //
  function handleChange(e) {
    // 輸入框偵測
    let newMember = { ...backendData };
    newMember[e.target.name] = e.target.value;
    setbackendData(newMember);
    console.log(newMember);
    console.log(errors);
  }
  async function handleSubmit(e) {
    // 送出
    console.log('handleSubmit');
    // console.log(backendData);
    setInputDisable(false);

    // 關閉表單的預設行為
    e.preventDefault();
    try {
      let response = await axios.post(
        'http://localhost:3001/api/members/accountChange',
        backendData,
        {
          // 為了跨源存取 cookie
          withCredentials: true,
        }
      );
      console.log(response.data);
      if (response.status === 200) {
        console.log('更新成功');
        setErrors({
          nameError: '',
          name: false,
          emailError: '',
          email: false,
          phoneError: '',
          phone: false,
          birthdayError: '',
          birthday: false,
        });
      }
    } catch (e) {
      if (e.response.status === 400) {
        let allErrors = e.response.data.errors;
        console.log('更新失敗');
        console.log(allErrors);

        let newErrors = {
          nameError: '',
          name: false,
          emailError: '',
          email: false,
          phoneError: '',
          phone: false,
          birthdayError: '',
          birthday: false,
        };
        allErrors.map(
          (thisError) => (
            (newErrors[thisError.param] = true),
            (newErrors[thisError.param + 'Error'] = thisError.msg)
          )
        );
        setErrors(newErrors);
        console.log(errors);
      }
    }
  }
  //
  useLayoutEffect(() => {
    async function getAccountData() {
      let response = await axios.get(
        'http://localhost:3001/api/members/account',
        {
          withCredentials: true,
        }
      );
      setbackendData(response.data);
      setSelectedOption(String(response.data.gender));
    }
    getAccountData();
  }, []);
  //製作單一disable
  const handleClick = (currentInput) => {
    if (inputDisable === currentInput) {
      setInputDisable(false);
    } else {
      setInputDisable(currentInput);
    }
  };

  return (
    <ChContainer
      ChClass={'border border-5 chicofgo-font'}
      breadCrumb={'我的帳號'}
    >
      <MemberBar />
      <Col
        sm={4}
        className={`d-flex flex-column text-center align-items-center justify-content-center `}
      >
        <Image
          alt=""
          width={150}
          height={150}
          src={require('../../Layout/Navbar/logo.png')}
          className={`border border-3 rounded-circle  ${style.pic}`}
        />
        <h5 className={`${style.imgLimitIcon}`}>
          <Button variant="">
            <FaEdit />
          </Button>
        </h5>

        <h5 className={`${style.imgLimitText}`}>
          檔案大小:最大1MB <br />
          檔案限制: .JPEG, .PNG
        </h5>
      </Col>
      <Col sm={7} className={`border py-3 px-5 mb-5 mt-3`}>
        <Form className={`${style.formText} `}>
          <h2 className="text-center chicofgo_brown_font large pb-2">
            我的帳號
          </h2>
          <h5 className="h5-border-bottom chicofgo_dark_font pt-2">
            <InputGroup className="align-items-center">
              使用者帳號：
              <Form.Control
                disabled
                size="sm"
                type="text"
                id="account"
                name="account"
                value={backendData.account}
              />
              <Button variant="chicofgo-white" className="mx-1" disabled>
                <BsFillPencilFill color="rgb(161, 113, 98)" />
              </Button>
            </InputGroup>
          </h5>
          <h5 className="h5-border-bottom chicofgo_dark_font pt-2">
            <InputGroup hasValidation className="align-items-center ">
              姓名：
              <Form.Control
                disabled={inputDisable !== 'name'}
                size="sm"
                type="text"
                id="name"
                name="name"
                value={backendData.name}
                onChange={handleChange}
                isInvalid={errors.name}
              />
              <Form.Control.Feedback
                type="invalid"
                tooltip
                className="end-0 me-5"
              >
                {errors.nameError}
              </Form.Control.Feedback>
              <Button
                variant=""
                className="mx-1"
                onClick={() => handleClick('name')}
              >
                <BsFillPencilFill color="rgb(161, 113, 98)" />
              </Button>
            </InputGroup>
          </h5>
          <h5 className="h5-border-bottom chicofgo_dark_font pt-2">
            <InputGroup hasValidation className="align-items-center">
              Email：
              <Form.Control
                disabled={inputDisable !== 'email'}
                size="sm"
                type="text"
                id="email"
                name="email"
                value={backendData.email}
                onChange={handleChange}
                isInvalid={errors.email}
              />
              <Form.Control.Feedback
                type="invalid"
                tooltip
                className="end-0 me-5"
              >
                {errors.emailError}
              </Form.Control.Feedback>
              <Button
                variant=""
                className="mx-1"
                onClick={() => handleClick('email')}
              >
                <BsFillPencilFill color="rgb(161, 113, 98)" />
              </Button>
            </InputGroup>
          </h5>
          <h5 className="h5-border-bottom chicofgo_dark_font pt-2">
            <InputGroup hasValidation className="align-items-center">
              手機號碼：
              <Form.Control
                disabled={inputDisable !== 'phone'}
                size="sm"
                type="text"
                id="phone"
                name="phone"
                value={backendData.phone}
                onChange={handleChange}
                isInvalid={errors.phone}
              />
              <Form.Control.Feedback
                type="invalid"
                tooltip
                className="end-0 me-5"
              >
                {errors.phoneError}
              </Form.Control.Feedback>
              <Button
                variant=""
                className="mx-1"
                onClick={() => handleClick('phone')}
              >
                <BsFillPencilFill color="rgb(161, 113, 98)" />
              </Button>
            </InputGroup>
          </h5>

          {/* 性別 radio */}
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className=" h5-border-bottom  pt-1">
              <h5 className="pt-3 pb-1">
                性別：
                <Form.Check
                  inline
                  label="男性"
                  name="gender"
                  type={type}
                  id={`inline-${type}-1`}
                  onChange={handleOptionChange}
                  checked={selectedOption === '1'}
                  value="1"
                />
                <Form.Check
                  inline
                  label="女性"
                  name="gender"
                  type={type}
                  id={`inline-${type}-2`}
                  onChange={handleOptionChange}
                  checked={selectedOption === '2'}
                  value="2"
                />
                <Form.Check
                  inline
                  label="不透露"
                  name="gender"
                  type={type}
                  id={`inline-${type}-3`}
                  onChange={handleOptionChange}
                  checked={selectedOption === '0'}
                  value="0"
                />
              </h5>
            </div>
          ))}
          <h5 className={`${style.setBorder}`}>
            <Row className="py-2 align-items-center">
              <Col className="col-2 text-nowrap ">生日：</Col>
              <Col className={`col-5 `}>
                <div
                  className={`${style.datePicker} py-2 text-nowrap`}
                  // style={{ border: '1px solid red' }}
                >
                  <DatePicker
                    className={`w-100`}
                    dateFormat="yyyy-MM-dd"
                    // locale="zh-TW"
                    selected={startDate}
                    onChange={(date) => handleDateChange(date)}
                    isClearable
                    placeholderText={String(backendData.birthday).substring(
                      0,
                      10
                    )}
                  />
                </div>
              </Col>
              <Col>
                <div
                  className={`${style.birthdayError} ${
                    errors.birthday ? 'visible' : 'invisible'
                  } `}
                >
                  <span className={`chicofgo-font-700`}>日期格式錯誤</span>
                </div>
              </Col>
            </Row>
          </h5>
        </Form>
        <Row>
          <Col className={`d-flex justify-content-center mt-2`}>
            <Button
              variant="chicofgo-brown"
              className={` px-5 py-1 shadow chicofgo_white_font`}
              onClick={handleSubmit}
            >
              儲存
            </Button>
          </Col>
        </Row>
      </Col>
    </ChContainer>
  );
}

export default Account;
