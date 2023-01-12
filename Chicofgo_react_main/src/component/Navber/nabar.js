import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {
  BsSearch,
  BsFillBellFill,
  BsSuitHeartFill,
  BsFillPersonFill,
  BsFillCartFill,
} from 'react-icons/bs'

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg" className="">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">首頁</Nav.Link>
            <Nav.Link href="#action2">商品</Nav.Link>
            <Nav.Link href="#action3">活動專區</Nav.Link>
            <Nav.Link href="#action4">折價券</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder=""
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <BsSearch />
            </Button>
            <Button variant="" className="mx-1">
              <BsFillBellFill />
            </Button>
            <Button variant="" className="mx-1">
              <BsSuitHeartFill />
            </Button>
            <Button variant="" className="mx-1">
              <BsFillPersonFill />
            </Button>
            <Button variant="" className="mx-1">
              <BsFillCartFill />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavScrollExample
