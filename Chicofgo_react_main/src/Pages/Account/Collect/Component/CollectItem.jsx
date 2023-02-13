import { cardInfo } from '../../../../Config/ProductConfig';
import { useNavigate } from 'react-router-dom';
import Card from '../../../ComponentShare/Card';
import { Col } from 'react-bootstrap';
import MoreCard from '../../../ComponentShare/MoreCard';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
function CollectItem() {
  const [collects, setCollects] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    async function getCollectData() {
      try {
        let response = await axios.get(
          'http://localhost:3001/api/members/getUserCollect',
          {
            withCredentials: true,
          }
        );
        setCollects(response.data);
        // console.log(response.data);
      } catch (e) {
        if (e.response.status === 400) {
          console.log('收藏是空的');
        }
      }
    }
    getCollectData();
  }, []);

  return (
    <Col className={`d-flex justify-content-center flex-wrap mx-0 my-2`}>
      {/* {cardInfo.map((info) => {
        return (
          <div
            key={info.id}
            onClick={() => goToDetail(info.id)}
            className={`mx-3 my-3`}
          >
            <Card title={info.title} rating={info.rating} />
          </div>
        );
      })} */}
      <MoreCard
        product_id={collects}
        // amount={10}
      />
    </Col>
  );
}

export default CollectItem;
