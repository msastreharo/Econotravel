import data from '../dataEx.json'
import { Row, Col, Card } from 'react-bootstrap';


const ExperienceGridCard = () => {
    let experienceArray = data;

  return (
    experienceArray.map(item =>(
  
      <Col key={item.id}>
        <Card>
          <Card.Img className='cardImageExper' variant="top" src={item.imagen} />
          <Card.Body>
          <Card.ImgOverlay>
            <Card.Title>{item.nombre}</Card.Title>
          </Card.ImgOverlay>
            <Row>
              <Col><div className='tagCard' ><Card.Text >{item.ubicacion}</Card.Text></div></Col>
              <Col><div className='tagCard'><Card.Text>{item.transporte}</Card.Text></div></Col>
              <Col><div className='tagCard'><Card.Text>{item.duracionHoras}</Card.Text></div></Col>
            </Row>
                <Card.Text>{item.duracion}</Card.Text>
              <Row>
              <Col>
                <Card.Text>{item.precio}</Card.Text>
              </Col>
              <Col>
                <button className="buttonExp">Reservar</button>
              </Col>
              </Row>
          </Card.Body>
        </Card>
      </Col>
   
  )))
}


export default ExperienceGridCard;

