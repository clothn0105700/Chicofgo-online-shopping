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

function Address() {
  return (
    <ChContainer
      ChClass={'chicofgo-font-700 border border-5'}
      breadCrumb={'地址'}
    >
      <MemberBar />
      <div className="d-flex justify-content-center ">
        <Col sm={7} className="border m-5 p-5 ">
          <h2 className="">我的地址</h2>
          <p>桃園市中壢區新生路二段421號</p>
          <Link to="/member/addressDatail" className="btn border">
            編輯
          </Link>
        </Col>
      </div>
    </ChContainer>
  );
}

export default Address;
