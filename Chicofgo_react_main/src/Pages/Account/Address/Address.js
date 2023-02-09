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

import { IconContext } from 'react-icons';
import MemberBar from '../Components/MemberBar';
import './Address.scss';
import ChContainer from '../../ComponentShare/ChContainer';
import AddressDetail from './AddressDetail';

function Address() {
  return (
    <ChContainer
      ChClass={'chicofgo-font-700 border border-5'}
      breadCrumb={'地址'}
    >
      <MemberBar />
      <Row className="d-flex justify-content-center">
        <Col sm={9} className="pt-3 pb-4 px-5 mb-5 mt-3 ">
          <AddressDetail />
        </Col>
      </Row>
    </ChContainer>
  );
}

export default Address;
