import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { BsFillPencilFill } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import MemberBar from './Components/MemberBar';
import style from './Account.module.scss';
import ChContainer from '../ComponentShare/ChContainer';

function Account() {
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
        <Form className={`${style.formText}`}>
          <h2 className={`text-center mb-3`}>我的帳號</h2>
          <h5>
            姓名：皮卡丘
            <Button variant="">
              <BsFillPencilFill />
            </Button>
          </h5>
          <h5>
            使用者帳號：pekorchu
            <Button variant="">
              <BsFillPencilFill />
            </Button>
          </h5>
          <h5>
            Email：pekorchu＠gmail.com
            <Button variant="">
              <BsFillPencilFill />
            </Button>
          </h5>
          <h5>
            手機號碼：0912341234
            <Button variant="">
              <BsFillPencilFill />
            </Button>
          </h5>

          {/* 性別 radio */}
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className={`mb-3`}>
              <h5>
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
            生日：1999/3/27
            <Button variant="">
              <BsFillPencilFill />
            </Button>
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
