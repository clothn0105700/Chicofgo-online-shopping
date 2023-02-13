import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './BusinessOrderList.scss';

function BusinessOrderList(props) {
  const [orders, setOrders] = useState([]);

  //分頁
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(8);

  //要顯示的組數
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const paginatedItems = orders.slice(
    currentPage * perPage,
    currentPage * perPage + perPage
  );

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
              className="text-center border-bottom align-items-center py-1 my-2 list"
              key={order.id}
            >
              <Col className="mb-2 ">{order.time}</Col>
              <Col className="mb-2 ">{order.mail}</Col>
              <Col className="mb-2 ">{order.name}</Col>
              <Col className="mb-2 ">{order.status}</Col>
              <Col className="text-center">
                <Link to={`/businessOrderDetail/${order.id}`}>
                  <Button
                    className="mb-2 detail"
                    variant="chicofgo-khaki text-white"
                  >
                    訂單細節
                  </Button>
                </Link>
              </Col>
            </Row>
          );
        })}
      <Row className="my-5 ">
        <Col className="col-4"></Col>
        <Col className="d-flex col-4">
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            pageCount={Math.ceil(orders.length / perPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            subContainerClassName={'pages pagination '}
            pageClassName="page-item "
            pageLinkClassName="page-link"
            previousClassName="page-item "
            previousLinkClassName="page-link "
            nextClassName="page-item "
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link "
            containerClassName="pagination "
            activeClassName="active "
            renderOnZeroPageCount={null}
          />
        </Col>
        <Col className="col-4"></Col>
      </Row>
    </>
  );
}

export default BusinessOrderList;
