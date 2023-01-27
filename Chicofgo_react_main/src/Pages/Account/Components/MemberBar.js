import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  InputGroup,
} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import {
  BsPerson,
  BsPencil,
  BsCreditCard2Back,
  BsGeoAlt,
  BsFillPencilFill,
} from 'react-icons/bs';
import { IconContext } from 'react-icons';

function MemberBar() {
  return (
    <Col
      sm={12}
      className="chicofgo_gray my-4 py-1 d-flex justify-content-center"
    >
      <IconContext.Provider value={{ className: 'icon chicofgo_brown_font ' }}>
        <Link
          to="/member"
          className="px-2 mx-2 my-2 text-decoration-none  chicofgo_brown_font chicofgo-font-700"
        >
          <BsPerson />
          &ensp;我的帳號
        </Link>

        <Link
          to="/member/password"
          className="px-2 mx-2 my-2  text-decoration-none  chicofgo_brown_font chicofgo-font-700"
        >
          <BsPencil />
          &ensp;修改密碼
        </Link>
        <Link
          to="/member/creditcard"
          className="px-2 mx-2 my-2 
            text-decoration-none  chicofgo_brown_font chicofgo-font-700"
        >
          <BsCreditCard2Back />
          &ensp;信用卡
        </Link>
        <Link
          to="/member/address"
          className="px-2 mx-2 my-2  text-decoration-none  chicofgo_brown_font chicofgo-font-700"
        >
          <BsGeoAlt />
          &ensp;地址
        </Link>
      </IconContext.Provider>
    </Col>
  );
}

export default MemberBar;
