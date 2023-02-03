import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  Dropdown,
  DropdownButton,
  InputGroup,
} from 'react-bootstrap';
import BusinessSiderbar from '../Components/BusinessSiderbar';

function BusinessProductsAdd() {
  return (
    <div className="chicofgo_white">
      <Container className="pt-5">
        <Row>
          <BusinessSiderbar />
          <Col>
            <Row className="bg-white">
              <Col sm={12} className="text-center pt-2">
                <h4>新增商品</h4>
              </Col>
              <Col sm={10} className="my-2">
                <InputGroup className="align-items-center pb-2">
                  商品圖片：
                  <Button>上傳圖片</Button>
                </InputGroup>
              </Col>
              <Col sm={10} className="my-2">
                <InputGroup className="align-items-center pb-2">
                  商品名稱：
                  <Form.Control
                    size="sm"
                    type="text"
                    id=""
                    name="name"
                    value="name"
                  />
                </InputGroup>
              </Col>
              <Col sm={10} className="my-2">
                <InputGroup className="align-items-center pb-2">
                  商品類別：
                  <Form.Select
                    aria-label="Default select example"
                    size="sm"
                    className="me-2"
                  >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>{' '}
                  </Form.Select>
                  <Form.Select
                    aria-label="Default select example"
                    size="sm"
                    className="me-2"
                  >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>{' '}
                  </Form.Select>
                  <Form.Select
                    aria-label="Default select example"
                    size="sm"
                    className=""
                  >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>{' '}
                  </Form.Select>
                </InputGroup>
              </Col>
              <Col sm={10} className="my-2">
                <InputGroup className="align-items-center pb-2">
                  商品數量：
                  <Form.Control
                    size="sm"
                    type="text"
                    id=""
                    name="name"
                    value="name"
                  />
                </InputGroup>
              </Col>
              <Col sm={10} className="my-2">
                <InputGroup className="align-items-center pb-2">
                  商品價格：
                  <Form.Control
                    size="sm"
                    type="text"
                    id=""
                    name="name"
                    value="name"
                  />
                </InputGroup>
              </Col>
              <Col sm={10} className="my-2">
                <Form.Label>商品描述</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Col>
            </Row>
            <Row className="justify-content-end">
              <Col sm={5}>
                <Button className="ms-1 me-2">儲存並上架</Button>
                <Button>儲存不上架</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
    // <Container>
    //   <Row>
    //     <BusinessSiderbar />
    //     <Col sm={9} className="mt-4">
    //       <h2 className="text-center">新增商品</h2>
    //       <div>
    //         商品圖片： <Button>新增圖片</Button>
    //       </div>
    //       <div>
    // <InputGroup className="align-items-center pb-2">
    //   商品名稱：
    //   <Form.Control
    //     size="sm"
    //     type="text"
    //     id=""
    //     name="name"
    //     value="name"
    //   />
    // </InputGroup>
    //       </div>
    //       <div>
    //         <Row>
    //           <Col sm={1}>類別：</Col>
    //           <Col>
    //             <Form.Select aria-label="Default select example" size="sm">
    //               <option>Open this select menu</option>
    //               <option value="1">One</option>
    //               <option value="2">Two</option>
    //               <option value="3">Three</option>
    //             </Form.Select>
    //           </Col>
    //           <Col>
    //             <Form.Select aria-label="Default select example" size="sm">
    //               <option>Open this select menu</option>
    //               <option value="1">One</option>
    //               <option value="2">Two</option>
    //               <option value="3">Three</option>
    //             </Form.Select>
    //           </Col>
    //           <Col>
    //             <Form.Select aria-label="Default select example" size="sm">
    //               <option>Open this select menu</option>
    //               <option value="1">One</option>
    //               <option value="2">Two</option>
    //               <option value="3">Three</option>
    //             </Form.Select>
    //           </Col>
    //         </Row>
    //       </div>
    //       <div>
    //         <InputGroup className="align-items-center pb-2">
    //           商品數量：
    //           <Form.Control
    //             size="sm"
    //             type="text"
    //             id=""
    //             name="name"
    //             value="name"
    //           />
    //         </InputGroup>
    //       </div>
    //       <div>
    //         <InputGroup className="align-items-center pb-2">
    //           商品價格：
    //           <Form.Control
    //             size="sm"
    //             type="text"
    //             id=""
    //             name="name"
    //             value="name"
    //           />
    //         </InputGroup>
    //       </div>
    //       <div>
    //         <Form.Label>商品描述</Form.Label>
    //         <Form.Control as="textarea" rows={3} />
    //       </div>
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default BusinessProductsAdd;
