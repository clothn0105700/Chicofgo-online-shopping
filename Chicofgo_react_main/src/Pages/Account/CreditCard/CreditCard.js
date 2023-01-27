import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  InputGroup,
} from 'react-bootstrap';
import MemberBar from '../Components/MemberBar';
import './CreditCard.scss';
import ChContainer from '../../ComponentShare/ChContainer';

function CreditCard() {
  return (
    <ChContainer ChClass={'chicofgo-font-700'} breadCrumb={'信用卡'}>
      <MemberBar />
      <Col sm={7} className="border m-5 p-5 rounded-5">
        <h2 className="">VISA</h2>
        <p>尾碼為8802的信用卡</p>
        <Link to="/member/cardDetail" className="btn border">
          編輯
        </Link>
      </Col>
    </ChContainer>
  );
}

export default CreditCard;
