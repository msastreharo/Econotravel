import Subscribe from '../components/Subscribe.js';
import Header from '../components/Header.js'
import Carrusel from '../components/Carrusel.js'
import Footer from '../components/Footer.js'


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

