import React from 'react';
import { useEffect, useMemo } from 'react';
import styles from './Card1.module.scss';
import testpic from '../../../Img/ProductsTest/test.jpg';
import { v4 } from 'uuid';
import { FaShoppingCart, FaBookmark } from 'react-icons/fa';

const Card1 = (props) => {
  const { title, rating, price } = props;

  const {
    card_contorl,
    card_body,
    p_img_c,
    content,
    text_contorl,
    evaluate,
    keepshop,
    price_contorl,
    mark_contorl,
    cart_contorl,
  } = styles;
  //   const numberRating = useMemo(() => {
  //     return Number.isNaN(parseInt(rating)) ? 1 : parseInt(rating);
  //   }, [rating]);

  return (
    <div className={`${card_contorl}`}>
      <div className={`${card_body} card`}>
        <div className={`${p_img_c} `}>
          <img
            src={`http://localhost:3001/api/images/productImg/coffee_7/coffee_7-1.png`}
            className="card-img-top"
            alt=""
          />
        </div>
        <div
          className={`${content} d-flex flex-column align-items-center mt-2`}
        >
          <div className={`${text_contorl}`}>
            <p>【金杯咖啡】女王咖啡豆x3袋(250g/袋)</p>
            {/* <p>{title}</p> */}
          </div>
          <div className={`${evaluate} d-flex justify-content-center mt-2`}>
            {/* {new Array(numberRating).fill().map((star) => {
              return <p key={v4()}>⭐</p>;
            })} */}
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
          </div>
        </div>
        <div
          className={`${keepshop} card-img-bottom d-flex align-items-center `}
        >
          <div className={`${price_contorl} `}>$899</div>
          {/* <div className={`${mark_contorl} `}>
            <FaBookmark />
          </div>
          <div className={`${cart_contorl} `}>
            <FaShoppingCart />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card1;
