import { cardInfo } from '../../../../Config/ProductConfig';
import { useNavigate } from 'react-router-dom';
import Card from '../../../ComponentShare/Card';
import { Col, Row } from 'react-bootstrap';
import MoreCard from '../../../ComponentShare/MoreCard';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import ThisCard from '../../../ComponentShare/ThisCard';
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
    <>
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
      {/* <MoreCard
      product_id={collects}
      amount={10}
      /> */}
      <Row className={`justify-content-center px-3 px-md-5`}>
        {collects.map((v, i) => {
          return (
            <Col className={` col-6 col-md-3 my-md-3 my-2`}>
              <ThisCard product_id={v} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default CollectItem;
