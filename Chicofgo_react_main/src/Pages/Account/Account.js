import { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  InputGroup,
} from 'react-bootstrap';
import { BsFillPencilFill } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import MemberBar from './Components/MemberBar';
import style from './Account.module.scss';
import ChContainer from '../ComponentShare/ChContainer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import ZhTW from 'date-fns/locale/zh-TW';
registerLocale('zh-TW', ZhTW);

function Account() {
  // const [imageUrl, setImageUrl] = useState('../../Layout/Navbar/logo.png');
  const [edit, setEdit] = useState('');
  const [inputDisable, setInputDisable] = useState('true');

  //製作單一disable
  const handleClick = (currentInput) => {
    if (inputDisable === currentInput) {
      setInputDisable(false);
    } else {
      setInputDisable(currentInput);
    }
  };

  //datePicker
  const [startDate, setStartDate] = useState(new Date());

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
          <h2 className="text-center chicofgo_brown_font large ">我的帳號</h2>
          <h5 className="h5-border-bottom chicofgo_dark_font">
            <InputGroup className="align-items-center pb-2">
              姓名：
              <Form.Control
                disabled={inputDisable !== 'name'}
                size="sm"
                type="text"
                id="name"
                name="name"
                value={edit}
                onChange={(e) => {
                  setEdit(e.target.value);
                }}
              />
              <Button
                variant=""
                className="mx-1"
                onClick={() => handleClick('name')}
              >
                <BsFillPencilFill color="rgb(161, 113, 98)" />
              </Button>
            </InputGroup>
          </h5>
          <h5 className="h5-border-bottom chicofgo_dark_font">
            <InputGroup className="align-items-center pb-2">
              使用者帳號：
              <Form.Control
                disabled={inputDisable !== 'account'}
                size="sm"
                type="text"
                id="account"
                name="account"
              />
              <Button
                variant=""
                className="mx-1"
                onClick={() => handleClick('account')}
              >
                <BsFillPencilFill color="rgb(161, 113, 98)" />
              </Button>
            </InputGroup>
          </h5>
          <h5 className="h5-border-bottom chicofgo_dark_font">
            <InputGroup className="align-items-center pb-2">
              Email：
              <Form.Control
                disabled={inputDisable !== 'email'}
                size="sm"
                type="text"
                id="email"
                name="email"
              />
              <Button
                variant=""
                className="mx-1"
                onClick={() => handleClick('email')}
              >
                <BsFillPencilFill color="rgb(161, 113, 98)" />
              </Button>
            </InputGroup>
          </h5>
          <h5 className="h5-border-bottom chicofgo_dark_font">
            <InputGroup className="align-items-center pb-2">
              手機號碼：
              <Form.Control
                disabled={inputDisable !== 'phone'}
                size="sm"
                type="text"
                id="phone"
                name="phone"
              />
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
            <div key={`inline-${type}`} className=" h5-border-bottom ">
              <h5 className="pb-2">
                性別：
                <Form.Check
                  inline
                  label="男性"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="女性"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="不透露"
                  name="group1"
                  type={type}
                  id={`inline-${type}-3`}
                />
              </h5>
            </div>
          ))}
          <h5>
            <Row className="py-2">
              <Col sm={2}>生日：</Col>
              <Col>
                <DatePicker
                  locale="zh-TW"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </Col>
            </Row>
          </h5>
        </Form>
        <Row>
          <Col className={`d-flex justify-content-center mt-2`}>
            <Button
              variant="chicofgo-brown"
              className={` px-5 py-1 shadow chicofgo_white_font`}
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
