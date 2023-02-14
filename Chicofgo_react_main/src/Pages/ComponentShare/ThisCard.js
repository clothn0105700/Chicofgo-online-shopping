import style from './ThisCard.module.scss';
import { v4 } from 'uuid';
import { FaShoppingCart, FaBookmark } from 'react-icons/fa';
import { Card, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';
import { minHeight } from '@mui/system';
import Modal from 'react-bootstrap/Modal';

function ThisCard(props) {
  const { isLoggedIn, userid } = useAuth();
  const { product_id } = props;
  const [backendData, setBackendData] = useState([]);
  const [title, setTitle] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [showMsg, setShowMsg] = useState('');
  const handleClose = () => setIsShow(false);
  const [isShowC, setIsShowC] = useState(false);
  const [showMsgC, setShowMsgC] = useState('');
  const handleCloseC = () => setIsShowC(false);

  useLayoutEffect(() => {
    async function getProductData() {
      try {
        let response = await axios.get(
          `http://localhost:3001/api/shoppingCarts/productData/${product_id}`
        );
        console.log(response.data[0]);
        setBackendData(response.data[0]);
        if (response.data[0].name.length > 10) {
          let chunkSize = 10;
          let inputString = response.data[0].name;
          for (let i = 0; i < inputString.length; i += chunkSize) {
            let chunk = inputString.substr(i, chunkSize);
            if (title.length >= 2) {
              chunk += '...';
              title.push(chunk);
              break;
            }
            title.push(chunk);
          }
          setTitle(title);
        }
      } catch (e) {
        if (e.response.status === 400) {
          console.log('後端錯誤');
        }
      }
    }
    getProductData();
  }, []);

  //加入購物車
  async function sendCart() {
    if (isLoggedIn) {
      try {
        let response = await axios.post(
          'http://localhost:3001/api/products/sendCart',
          {
            cartProductId: backendData.product_id,
            cartUserId: userid,
            cartPrice: backendData.price,
            cartQuantity: 1,
          }
        );
        if (response.data.result === 'ok') {
          setIsShow(true);
          setShowMsg('成功加入購物車');
        } else if (response.data.result === 'been added') {
          setIsShow(true);
          setShowMsg('已加入過購物車囉，看看其他商品吧');
        } else {
          setIsShow(true);
          setShowMsg('加入失敗');
        }
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsShow(true);
    }
  }
  //加入收藏
  async function sendCollect() {
    if (isLoggedIn) {
      try {
        let response = await axios.post(
          'http://localhost:3001/api/members/sendUserCollect',
          {
            product_id: backendData.product_id,
            member_id: userid,
            // cartPrice: backendData.price,
            // cartQuantity: 1,
          }
        );
        if (response.data.result === 'ok') {
          setIsShowC(true);
          setShowMsgC('成功加入收藏');
        } else if (response.data.result === 'been added') {
          setIsShowC(true);
          setShowMsgC('已加入過收藏囉，看看其他商品吧');
        } else {
          setIsShowC(true);
          setShowMsgC('加入失敗');
        }
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsShow(true);
    }
  }
  return (
    <Card className={`${style.thisCard} m-0 mx-auto`}>
      <Link
        className={`${style.LinkHover} text-decoration-none chicofgo_dark_font chicofgo-font`}
        to={`/products/product_detail/${product_id}`}
      >
        <Card.Img
          variant="top"
          src={`http://localhost:3001/api/images/productImg/coffee_${product_id}/coffee_${product_id}-1.png`}
        />
        <Card.Body className={`text-center  p-0 ${style.textOverFlowBody}`}>
          <Card.Text>
            {title[0] || ''}
            <br />
            {title[1] || ''}
            <br />
            {title[2] || ''}
          </Card.Text>
        </Card.Body>
        <Card.Body className={`text-center py-1`}>
          {new Array(backendData.rating).fill().map((star) => {
            return <span key={v4()}>⭐</span>;
          })}
        </Card.Body>
      </Link>
      <Card.Footer className={` fs-4 py-1`}>
        <Row className={`justify-content-between text-center`}>
          <Col className={`col-6`}>
            <span className={`chicofgo-font-700 text-nowrap`}>
              ${backendData.price}
            </span>
          </Col>
          <Col className={`col-3`}>
            <div className={`${style.useFinger}`} onClick={sendCollect}>
              <span className={`chicofgo_brown_font`}>
                <FaBookmark />
              </span>
            </div>
          </Col>
          <Col className={`col-3`}>
            <div className={`${style.useFinger}`} onClick={sendCart}>
              <span className={`chicofgo_brown_font`}>
                <FaShoppingCart />
              </span>
            </div>
          </Col>
        </Row>
      </Card.Footer>
      {/* 彈出視窗-加入購物車 */}
      <Modal show={isShow} onHide={handleClose} centered size="sm">
        <Modal.Header closeButton>
          <Modal.Title className={`fs-5 mx-1`}>加入購物車</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`mx-1`}>
          {isLoggedIn ? showMsg : '尚未登入,請登入後開始購物!'}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-chicofgo-brown" onClick={handleClose}>
            關閉
          </Button>
          {isLoggedIn ? (
            ''
          ) : (
            <Button
              as={Link}
              to="/login"
              variant="outline-chicofgo-green"
              onClick={handleClose}
            >
              前往登入
            </Button>
          )}
        </Modal.Footer>
      </Modal>
      {/* 彈出視窗-加入收藏 */}
      <Modal show={isShowC} onHide={handleCloseC} centered size="sm">
        <Modal.Header closeButton>
          <Modal.Title className={`fs-5 mx-1`}>加入收藏</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`mx-1`}>
          {isLoggedIn ? showMsgC : '尚未登入,請登入後開始收藏!'}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-chicofgo-brown" onClick={handleCloseC}>
            關閉
          </Button>
          {isLoggedIn ? (
            ''
          ) : (
            <Button
              as={Link}
              to="/login"
              variant="outline-chicofgo-green"
              onClick={handleCloseC}
            >
              前往登入
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Card>
  );
}

export default ThisCard;
