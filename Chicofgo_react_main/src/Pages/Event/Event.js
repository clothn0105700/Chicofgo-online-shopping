import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousels from './Component/EventCarousels';
import style from './Event.module.scss';

function Event() {
  return (
    <Container fluid>
      <Carousels
        className={`${style.event}`}
        showImg={['Carousels-1.png', 'Carousels-2.png', 'Carousels-3.png']}
        srcollTo={0}
        changeDelay={2000}
        fade={true}
      />
      <Carousels
        showImg={['Carousels-2.png', 'Carousels-3.png', 'Carousels-1.png']}
        srcollTo={window.innerHeight}
        changeDelay={2000}
        fade={true}
      />
      <Carousels
        showImg={['Carousels-3.png', 'Carousels-1.png', 'Carousels-2.png']}
        srcollTo={2 * window.innerHeight}
        changeDelay={2000}
        fade={true}
      />
      <Carousels
        showImg={['Carousels-1.png', 'Carousels-2.png', 'Carousels-3.png']}
        srcollTo={3 * window.innerHeight}
        changeDelay={2000}
        fade={true}
      />
    </Container>
  );
}

export default Event;
