import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Router,
  Link,
} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import {
  BsSearch,
  BsFillBellFill,
  BsSuitHeartFill,
  BsFillPersonFill,
  BsFillCartFill,
} from 'react-icons/bs';

import { FaSearch } from 'react-icons/fa';
import { RiCoupon2Line, RiMessage2Fill } from 'react-icons/ri';

// import { Nav } from 'react-bootstrap';

// import './SideBar.scss';
import style from './SideBar.module.scss';

// className={`${style.homePageAll}`}
function SideBar() {
  return (
    <>
      <Nav
        defaultActiveKey="/member"
        className={`${style.SideBarBody} flex-column text-center h-100`}
        variant=""
      >
        <Nav.Link as={Link} to="/member">
          <p>
            <BsFillPersonFill />
            我的帳號
          </p>
        </Nav.Link>
        <Nav.Link as={Link} to="/member/orderHistory">
          <p>
            <FaSearch />
            歷史訂單
          </p>
        </Nav.Link>
        <Nav.Link as={Link} to="/member/coupon">
          <p>
            <RiCoupon2Line />
            我的優惠券
          </p>
        </Nav.Link>
        <Nav.Link as={Link} to="/member/messages">
          <p>
            <RiMessage2Fill />
            通知總覽
          </p>
        </Nav.Link>
      </Nav>
    </>
  );
}

export default SideBar;
