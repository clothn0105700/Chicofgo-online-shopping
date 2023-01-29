import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import {
  BsFillPersonFill,
  BsCartCheck,
  BsFillBookmarkHeartFill,
} from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { RiCoupon2Line, RiMessage2Fill } from 'react-icons/ri';
import style from './SideBar.module.scss';
function SideBar() {
  return (
    <>
      <Nav
        defaultActiveKey="/member"
        className={`${style.SideBarBody} flex-column h-100 px-xxl-5 chicofgo-font`}
        variant=""
      >
        <Nav.Link as={Link} to="/member">
          <p>
            <BsFillPersonFill />
            &thinsp; 我的帳號
          </p>
        </Nav.Link>
        <Nav.Link as={Link} to="/member/orderHistory">
          <p>
            <FaSearch />
            &thinsp; 歷史訂單
          </p>
        </Nav.Link>
        <Nav.Link as={Link} to="/member/shoppingcart">
          <p>
            <BsCartCheck />
            &thinsp; 我的購物車
          </p>
        </Nav.Link>
        <Nav.Link as={Link} to="/member/coupons">
          <p>
            <RiCoupon2Line />
            &thinsp; 我的優惠券
          </p>
        </Nav.Link>
        <Nav.Link as={Link} to="/member/collect">
          <p>
            <BsFillBookmarkHeartFill />
            &thinsp; 我的收藏
          </p>
        </Nav.Link>
        <Nav.Link as={Link} to="/member/messages">
          <p>
            <RiMessage2Fill />
            &thinsp; 通知總覽
          </p>
        </Nav.Link>
      </Nav>
    </>
  );
}

export default SideBar;
