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
import ChContainer from '../../ComponentShare/ChContainer';
import CardForm from './Components/CardForm';

function CreditCard() {
  return (
    <ChContainer
      ChClass={'chicofgo-font-700 border border-5'}
      breadCrumb={'信用卡'}
    >
      <MemberBar />
      <Row className="d-flex justify-content-center">
        <Col sm={9} className="pt-3 pb-4 px-5 mb-5 mt-3 ">
          <CardForm />
        </Col>
      </Row>
    </ChContainer>
  );
}

export default CreditCard;
