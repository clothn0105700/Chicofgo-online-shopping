import { Container, Row, Col } from 'react-bootstrap';
import Path from '../../Layout/Item/Path/Path';
import PropTypes from 'prop-types';

function Layout(props) {
  return (
    <Container>
      <Row className={` justify-content-center`}>
        <Col
          xs={10}
          style={{
            marginBottom: '110px',
            minHeight: '100vh',
          }}
        >
          <Path pathObj={{ path: [props.breadCrumb] }} />
          <Row
            className={`${props.ChClass} rounded-5 justify-content-center `}
            style={{
              backgroundColor: 'rgb(250, 250, 250)',
              border: props.ChBorder,
            }}
          >
            {props.children}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
Layout.defaultProps = {
  breadCrumb: '',
  ChClass: '',
  ChBorder: '5px solid transparent',
  //   border border-5
};

Layout.propTypes = {
  breadCrumb: PropTypes.string,
  ChClass: PropTypes.string,
  ChBorder: PropTypes.string,
};

export default Layout;
