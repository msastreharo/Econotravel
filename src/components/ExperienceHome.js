import React from "react";
import ExperienceNavbar from './ExperienceNavbar.js';
import ExperienceGridCard from './ExperienceGridCard.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'



const ExperienceHome = () => (
  <div className="ExperienceHome">
    <div><h1 className="ExperienceTitle">Experiencias en el área de Barcelona</h1></div>
    <ExperienceNavbar />
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4" >
        <ExperienceGridCard />
      </Row>
    </Container>
  
  </div>
  );



export default ExperienceHome;