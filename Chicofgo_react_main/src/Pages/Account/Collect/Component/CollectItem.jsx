import { cardInfo } from '../../../../Config/ProductConfig';
import { useNavigate } from 'react-router-dom';
import Card from '../../../ComponentShare/Card';
import { Col } from 'react-bootstrap';

function CollectItem() {
  const navigate = useNavigate();
  function goToDetail(cardId) {
    navigate(`/product_detail/${cardId}`, { replace: false });
  }
  return (
    <Col className={`d-flex justify-content-center flex-wrap mx-0 my-2`}>
      {cardInfo.map((info) => {
        return (
          <div
            key={info.id}
            onClick={() => goToDetail(info.id)}
            className={`mx-3 my-3`}
          >
            <Card title={info.title} rating={info.rating} />
          </div>
        );
      })}
    </Col>
  );
}

export default CollectItem;
