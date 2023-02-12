import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BusinessOrderList(props) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getorders() {
      let response = await axios.get(
        'http://localhost:3001/api/business/order'
      );
      setOrders(response.data);
    }
    getorders();
  }, []);
  console.log(orders);
  //取得陣列資料放進orders
  console.log(props.search);
  // console.log(props.selectedStatus);


  return (
    <>
      {orders
        .filter((order) => {
          return props.search.toLowerCase() === ''
            ? order
            : order.name.toLowerCase().includes(props.search);
        })
        .filter((order) => {
          return props.selectedStatus === ''
            ? order
            : order.status === props.selectedStatus;
        })

        .map((order, index) => {
          return (
            <Row
              className="text-center border-bottom align-items-center py-1 my-2"
              key={order.id}
            >
              <Col className="mb-2">{order.time}</Col>
              <Col className="mb-2">{order.mail}</Col>
              <Col className="mb-2">{order.name}</Col>
              <Col className="mb-2">{order.status}</Col>
              <Col className="text-center">
                <Link to={`/businessOrderDetail/${order.id}`}>
                  <Button className="mb-2" variant="chicofgo-khaki text-white">
                    訂單細節
                  </Button>
                </Link>
              </Col>
            </Row>
          );
        })}
    </>
  );
}

export default BusinessOrderList;
