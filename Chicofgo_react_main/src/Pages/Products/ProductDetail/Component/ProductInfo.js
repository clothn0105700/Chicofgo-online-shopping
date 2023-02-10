import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../../../Contexts/AuthContext';
import styles from './ProductInfo.module.scss';
import { FaShoppingCart, FaBookmark } from 'react-icons/fa';
import axios from 'axios';
import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import Modal from '../../../ComponentShare/Modal';
import Btn from '../../../../Layout/Item/Btn/Btn';

const Productinfo = (props) => {
  const { title, content, price, productsCount, setProductsCount } = props;
  const {
    info_contorl,
    spe_text,
    products_count,
    button_wrap,
    minus_style,
    input_style,
    plus_style,
    collect_cart,
    btn_collect,
    btn_cart,
    title_box,
    content_box,
  } = styles;

  const location = useLocation();
  const { userid } = useAuth();
  const { isLoggedIn } = useAuth();

  const navigate = useNavigate();

  //設置彈跳訊息
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [userLike, setUserLike] = useState([]);
  const [checkLike, setCheckLike] = useState(false);
  const [btnContext, setBtnContext] = useState('未加入收藏');
  const [modalCase, setModalCase] = useState(false);

  useEffect(() => {
    if (productsCount < 1) {
      setProductsCount(1);
    }
  });

  //加入購物車
  async function sendCart() {
    const urlArray = location.pathname.split('/');
    const id = parseInt(urlArray[urlArray.length - 1]);
    try {
      let response = await axios
        .post('http://localhost:3001/api/products/sendCart', {
          cartProductId: id ? id : '此商品已加入購物車',
          cartUserId: userid,
          cartPrice: price,
          cartQuantity: productsCount,
        })
        .then((res) => {
          setModalCase(true);
          setModalContent('成功加入購物車');
          setIsOpen(true);
        });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <div className={`${info_contorl} d-flex flex-column`}>
        <div className={`${title_box}`}>
          <h3>{title}</h3>
        </div>
        <div className={`${content_box}`}>
          {/* <p className="mt-2">{content}</p> */}
          <pre>{content}</pre>
        </div>

        <h4 className="d-flex mt-2">
          價格:<div className="mx-3">{price}</div>
        </h4>
        <h4 className="mt-3">
          <div className="d-flex align-items-center">
            類別:
            <button className="btn1 mx-3 ">
              <div className={spe_text}>1箱/10包入</div>
            </button>
            <button className="btn1 mx-3">
              <div className={spe_text}>1箱/20包入</div>
            </button>
            <button className="btn1 mx-3">
              <div className={spe_text}>1箱/25包入</div>
            </button>
          </div>
        </h4>
        <div className="mt-5">
          <h4>總計:{price * productsCount} 元</h4>
          <div className={`${products_count} mt-3`}>
            <h4>數量</h4>
            <div className={`${button_wrap} d-flex align-items-center`}>
              <button
                className={`${minus_style}`}
                value={productsCount}
                onClick={(e) => {
                  setProductsCount(productsCount - 1);
                }}
              ></button>
              <input
                type="text"
                className={`${input_style}`}
                value={productsCount}
                onChange={(e) => {
                  setProductsCount(e.target.value);
                }}
              />
              <button
                className={`${plus_style}`}
                value={productsCount}
                onClick={(e) => {
                  setProductsCount(productsCount + 1);
                }}
              ></button>
            </div>
          </div>
        </div>
        <div
          className={`${collect_cart} d-flex align-items-center justify-content-between mt-3`}
        >
          <button
            className={`${btn_collect} d-flex align-items-center justify-content-center`}
          >
            <FaBookmark className="mx-2" />
            加入收藏
          </button>
          <button
            className={`${btn_cart} d-flex align-items-center justify-content-center`}
            onClick={() => {
              if (isLoggedIn) {
                sendCart();
              } else {
                setModalContent('請先登入');
                setIsOpen(true);
              }
            }}
          >
            <FaShoppingCart className="mx-2" />
            加入購物車
          </button>
        </div>
      </div>
      {modalCase ? (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <h4 style={{ color: 'rgb(73, 67, 61)', padding: '24px 36px' }}>
            {modalContent}
          </h4>
        </Modal>
      ) : (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <Link
            to="/login"
            style={{
              textDecoration: 'none',
              color: 'rgb(73, 67, 61)',

              padding: '24px 36px',
              textAlign: 'center',
            }}
          >
            <h4>{modalContent}</h4>
            <Btn
              style={{
                width: '75px',
                fontSize: '14px',
                marginTop: '12px',
              }}
              onClick={() => {
                navigate('/login');
              }}
            >
              確定
            </Btn>
          </Link>
        </Modal>
      )}
    </div>
  );
};

export default Productinfo;
