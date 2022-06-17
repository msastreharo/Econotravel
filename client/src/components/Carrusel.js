import React from "react"; 
import {Carousel} from "react-bootstrap"; 
import foto1 from "../assets/fotos-carrusel/CostaBrava.jpg"
import foto2 from "../assets/fotos-carrusel/Playabcn.jpg"
import foto3 from "../assets/fotos-carrusel/Montserrat.jpg"


function Carrusel(){
    return( 
        <div id="carrusel">
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={foto1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={foto2}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={foto3}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> 
      </div>
    )
} 

export default Carrusel