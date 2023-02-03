import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CardListS(props) {
  const imgName = props.showImg;
  return (
    <>
      <CardGroup>
        {imgName.map((v, i) => {
          return (
            <Card
              className={`text-white`}
              key={i}
              style={{
                border: '0px solid #000',
              }}
            >
              <Card.Img
                src={require('../../../Img/Home/' + v)}
                alt="Card image"
                style={{
                  height: props.cardHeight,
                  objectFit: 'contain',
                }}
              />
            </Card>
          );
        })}
      </CardGroup>
    </>
  );
}

export default CardListS;
