import Subscribe from './Subscribe.js';
import Header from './Header.js'
import Carrusel from './Carrusel.js'
import Footer from './Footer.js'

export default function Home() {
  return (
    <div className="Home">
        <Header />
        <Carrusel /> 
        
        <Subscribe />
        <Footer />
    </div>
  );
}

