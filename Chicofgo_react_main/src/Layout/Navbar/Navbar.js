import { Link, NavLink } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import {
  BsSearch,
  BsFillBellFill,
  BsSuitHeartFill,
  BsFillPersonFill,
  BsFillCartFill,
} from 'react-icons/bs';
// import '../../GlobalStyles/Global.scss';
import style from './Navbar.module.scss';

function ChicofgoNavBar() {
  return (
    <Navbar expand="md" sticky="top" className={`p-0 chicofgo-font-700`}>
      <Container fluid className={`${style.navbarBody} py-2`}>
        <Navbar.Brand as={NavLink} to="/home">
          <Image
            src={require('./logo.png')}
            className={`d-inline-block align-top ms-5`}
            alt="Responsive image"
            width="80"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className={`justify-content-end`}>
          <Nav
            className={`${style.navbarCustom} my-0 text-nowrap py-2`}
            style={{ maxHeight: '100px' }}
            navbarScroll
            variant="chicofgo-brown"
            defaultActiveKey="/home"
          >
            <Nav.Item>
              <Nav.Link as={NavLink} to="/home" className={`px-3 py-1 me-1`}>
                首頁
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/products"
                className={`px-3 py-1 me-1`}
              >
                商品
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/event" className={`px-3 py-1 me-1`}>
                活動專區
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/coupon" className={`px-3 py-1 me-1`}>
                折價券
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {/* className={`${style.oneAreaTitle} `} */}
          <InputGroup className={`${style.navBarSearch} mx-0 mx-xl-2`}>
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <Button
              as={Link}
              to="/"
              variant="outline-chicofgo-brown"
              id="button-addon2"
            >
              <BsSearch />
            </Button>
          </InputGroup>

          <Button as={Link} to="/" variant="" className={`mx-1`}>
            <BsFillBellFill />
          </Button>
          <Button as={Link} to="/login " variant="" className={`me-1`}>
            <BsSuitHeartFill />
          </Button>
          <Button as={Link} to="/member" variant="" className={`me-1`}>
            <BsFillPersonFill />
          </Button>
          <Button as={Link} to="/" variant="" className={`me-1`}>
            <BsFillCartFill />
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ChicofgoNavBar;
