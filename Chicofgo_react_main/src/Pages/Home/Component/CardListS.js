import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CardListS(props) {
  const imgName = props.showImg;
  return (
    <>
      <CardGroup>
        {imgName.map((v, i) => {
          return (
            <Card className=" text-white " key={i}>
              <Card.Img
                src={require('./' + v)}
                alt="Card image"
                style={{ height: props.cardHeight, objectFit: 'contain' }}
              />
              {/* <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay> */}
            </Card>
          );
        })}
      </CardGroup>
    </>
  );
}

export default CardListS;
