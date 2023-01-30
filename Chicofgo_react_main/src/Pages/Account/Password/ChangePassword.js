import { Row, Col, Form, Button } from 'react-bootstrap';
import MemberBar from '../Components/MemberBar';
import ChContainer from '../../ComponentShare/ChContainer';
function ChangePassword() {
  return (
    <ChContainer ChClass={'chicofgo-font-700'} breadCrumb={'修改密碼'}>
      <MemberBar />
      <Row className="d-flex justify-content-center">
        <Col
          sm={9}
          className="border border-5 rounded-5  pt-3 pb-4 px-5 mb-5 mt-3 "
        >
          <h2 className="text-center chicofgo_brown_font chicofgo-font-700 py-3">
            修改密碼
          </h2>
          <Form.Floating className="mb-3 chicofgo_brown_font">
            <Form.Control
              id="floatingInputCustom"
              placeholder="帳號"
              type="email"
              disabled
            />
            <label htmlFor="floatingInputCustom">
              帳號:
              <span className="chicofgo-font-700 chicofgo_dark_font ">
                87878787@suck.com
              </span>
            </label>
          </Form.Floating>
          <Form.Floating className="mb-3 chicofgo_brown_font">
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="請輸入舊密碼"
            />
            <label htmlFor="floatingPasswordCustom">舊密碼:</label>
          </Form.Floating>
          <Form.Floating className="mb-3 chicofgo_brown_font">
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="請輸入新密碼"
            />
            <label htmlFor="floatingPasswordCustom">新密碼:</label>
          </Form.Floating>
          <Form.Floating className="mb-3 chicofgo_brown_font">
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="請確認新密碼"
            />
            <label htmlFor="floatingPasswordCustom">確認新密碼:</label>
          </Form.Floating>
          {['Checkbox'].map((type) => (
            <div key={`inline-${type}`} className="">
              <Form.Check
                inline
                label="顯示密碼"
                name="group1"
                type={type}
                id={`inline-${type}-3`}
              />
            </div>
          ))}
          <div className="text-center my-3">
            <Button variant="chicofgo-brown chicofgo_white_font" size="lg">
              確定修改
            </Button>
          </div>
        </Col>
      </Row>
    </ChContainer>
  );
}

export default ChangePassword;
