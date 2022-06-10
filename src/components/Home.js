import Subscribe from './Subscribe.js';
import Header from './Header.js'
import Carrusel from './Carrusel.js'
import Footer from './Footer.js'
import ExperienceHome from "./ExperienceHome.js";


export default function Home() {
  return (
    <div className="Home">
        <Header />
        <Carrusel /> 
        <ExperienceHome />
        <Subscribe />
        <Footer />
    </div>
  );
}

