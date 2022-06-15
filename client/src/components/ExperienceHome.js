import React from "react";
import ExperienceNavbar from './ExperienceNavbar.js';
import ExperienceGridCard from '../pages/ExperienceGridCard.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Header from './Header.js'
import Footer from './Footer.js'
import Ubicacion from "./Filter/category/Ubicacion.js";



const ExperienceHome = () => (
  <div className="ExperienceHome">
    <Header />
    <div><h1 className="ExperienceTitle">Experiencias en el área de Barcelona</h1></div>
    <ExperienceNavbar />
    
  
  </div>
  );



export default ExperienceHome;