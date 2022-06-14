import React from "react";
import foto2 from "../fotitos-carrusel/carrusel2.jpg";
import foto3 from "../fotitos-carrusel/carrusel3.jpg";
import foto1 from "../fotitos-carrusel/carrusel1.jpg";
import { Carousel, Card, Button } from "react-bootstrap";

function PaginaMolde() {
  return (
    <section className="container-paginamolde">
      <Carousel className="w-50">
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={foto2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={foto3} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={foto1} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <Card style={{ width: "18rem" }} className="ml-4">
        <Card.Body>
          <Card.Title>Titulo de la experiencia</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Precio</Card.Subtitle>
          <Card.Text>toooooda la info del paseo</Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Button href="#">Reservar</Button>
        </Card.Body>
      </Card>
    </section>
  );
}

export default PaginaMolde;
