import React, { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import 'react-credit-cards-2/es/styles-compiled.css';
import {
  Button,
  Collapse,
  Col,
  Form,
  Table,
  Row,
  InputGroup,
} from 'react-bootstrap';
import PopupWindow from '../../ComponentShare/PopupWindow';
import { useNavigate } from 'react-router-dom';
function AddressDetail() {
  const navigate = useNavigate();
  const [submittedData, setSubmittedData] = useState({});
  const [backendData, setBackendData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [countyData, setCountyData] = useState();
  const [districtData, setDistrictData] = useState();

  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({
    cvcError: '',
    cvc: false,
    expiryError: '',
    expiry: false,
    nameError: '',
    name: false,
    cardNumberError: '',
    cardNumber: false,
  });
  useLayoutEffect(() => {
    async function getAccountData() {
      let response = await axios.get(
        'http://localhost:3001/api/members/myaddress',
        {
          withCredentials: true,
        }
      );
      setBackendData(response.data);
    }
    getAccountData();
  }, []);

  function handleChange(event) {
    // 輸入框偵測
    setCountyData(event.target.value);
  }
  function handleChange2(event) {
    // 輸入框偵測
    setDistrictData(event.target.value);
  }

  async function handleSubmit(e) {
    console.log('handleSubmit');
    e.preventDefault();
    // setSubmittedData({ name, cardNumber, expiry, cvc });
    try {
      let response = await axios.post(
        'http://localhost:3001/api/members/creditcardchange',
        submittedData,
        {
          // 為了跨源存取 cookie
          withCredentials: true,
        }
      );
      console.log(response.data);
      if (response.status === 200) {
        console.log('更新成功');
        setShowModal(true);
        setErrors({
          cvcError: '',
          cvc: false,
          expiryError: '',
          expiry: false,
          nameError: '',
          name: false,
          cardNumberError: '',
          cardNumber: false,
        });
      }
    } catch (e) {
      if (e.response.status === 401) {
        let allErrors = e.response.data.errors;
        console.log('更新失敗');
        console.log(allErrors);
        let newErrors = {
          cvcError: '',
          cvc: false,
          expiryError: '',
          expiry: false,
          nameError: '',
          name: false,
          cardNumberError: '',
          cardNumber: false,
        };
        allErrors.forEach((thisError) => {
          newErrors[thisError.param] = true;
          newErrors[thisError.param + 'Error'] = thisError.msg;
        });
        setErrors(newErrors);
        console.log(errors);
      }
    }
  }
  return (
    <Form className={`shadow p-5 rounded-5 chicofgo-font`} Validate>
      {/* // <form className={`cardForm chicofgo-font`}> */}
      <h2 className={`text-center chicofgo-font-700 chicofgo_brown_font pb-3`}>
        地址修改
      </h2>
      <Row className="my-2">
        <Col>
          <Table borderless hover className="chicofgo-font py-2">
            <thead>
              <tr>
                <th>
                  <h3 className="chicofgo-font-700 fs-4">我的地址</h3>
                </th>
                <th className="text-end">
                  <Button variant="outline-chicofgo-brown" className={`mt-2`}>
                    預設地址
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>pekorchu</td>
                <td>(+886)0937373373</td>
              </tr>
              <tr>
                <td colSpan={2}>桃園市中壢區新生路二段421號</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        {/* <Col>預設</Col> */}
      </Row>
      <hr />
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="outline-chicofgo-green"
      >
        編輯地址
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <Row className="my-2">
            <Col className="my-2 py-3">
              <Row className="mb-3">
                <Form.Group as={Col} md="3">
                  <Form.Label>縣市</Form.Label>
                  <Form.Select onChange={handleChange}>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3">
                  <Form.Label>鄉鎮市區</Form.Label>
                  <Form.Select onChange={handleChange2}>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>詳細地址</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    // placeholder="Last name"
                    // defaultValue="Otto"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
            </Col>
          </Row>

          <Button
            type="submit"
            variant="chicofgo-green"
            className={`mt-2`}
            onClick={handleSubmit}
          >
            送出
          </Button>
          <PopupWindow
            show={showModal}
            // onclose={() => setShowModal(false)}
            onclose={() => navigate('/member')}
            title="修改結果"
            content="成功修改!"
            btnContent="回到會員中心"
          />

          {/* <button
            type="submit"
            className={`btn btn-chicofgo-green btn-block mt-2`}
            onClick={handleSubmit}
          >
            送出
          </button> */}
        </div>
      </Collapse>
      {/* </form> */}
    </Form>
  );
}

export default AddressDetail;
