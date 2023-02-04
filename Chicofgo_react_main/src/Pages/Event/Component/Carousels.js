import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel(props) {
  const imgName = props.showImg;

  return (
    <>
      <Carousel fade={props.fade}>
        {imgName.map((v, i) => {
          return (
            <Carousel.Item interval={props.changeDelay} key={i}>
              <img
                className="d-block w-100 h-80"
                src={require('../../../Img/Event/' + v)}
                alt="slide"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default HomeCarousel;
