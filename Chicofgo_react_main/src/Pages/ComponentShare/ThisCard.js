import style from './ThisCard.module.scss';
import { v4 } from 'uuid';
import { FaShoppingCart, FaBookmark } from 'react-icons/fa';
import { Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import React, { useState, useEffect, useLayoutEffect } from 'react';

function ThisCard(props) {
  const { product_id } = props;
  const [backendData, setBackendData] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    async function getProductData() {
      try {
        let response = await axios.get(
          `http://localhost:3001/api/shoppingCarts/productData/${product_id}`
        );
        // console.log(response.data[0]);
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

  return (
    <Card className={`${style.thisCard} m-0`}>
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
      <Card.Footer className={` fs-4 py-1`}>
        <Row className={`justify-content-between text-center`}>
          <Col className={`col-6`}>
            <span className={`chicofgo-font-700 `}>${backendData.price}</span>
          </Col>
          <Col className={`col-3`}>
            <span className={`chicofgo_brown_font`}>
              <FaBookmark />
            </span>
          </Col>
          <Col className={`col-3`}>
            <span className={`chicofgo_brown_font`}>
              <FaShoppingCart />
            </span>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default ThisCard;
