import React, {useEffect, useState} from "react";
import {Card, Button } from "react-bootstrap";
import '../Styles/PaginasExperiences.css'
import { useParams, Link } from "react-router-dom";
import axios from "axios"; 
import Contador from '../components/Contador'
import Header from '../components/Header'

function PaginasExperiences() {
  const {id}=useParams()
  const [experiences, setExperiences]= useState([id])

  useEffect((id) => {
    const promise = axios.get("http://localhost:3000/econoExperience")

  promise.then((response) => {
       console.log(response)
       setExperiences(response.data[id])
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return ( 
    <>
    <Header />
    <section className="container-paginasexperiences"> 
     <img src={experiences.imagen} className="headshot foto" alt=''></img>
      <Card style={{ width: "40rem" }} className="ml-4">
        <Card.Body>
          <Card.Title>{experiences.nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{experiences.precio}</Card.Subtitle>
          <Card.Text>{experiences.descripcion}</Card.Text>
          <Link to="/checkout"> 
          <Button className="my-4">Reservar</Button>
          </Link>
          <Contador />
        </Card.Body>
      </Card>
    </section> 
    </>
  );
}

export default PaginasExperiences;
