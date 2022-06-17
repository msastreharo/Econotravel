import React from "react";
import qrstyle from '../assets/qrstyle.jpg'

function Footer (){
    return( 
      <footer className="div-footer" > 
        <ul className='infoFooter'>
          <li>Nosotros</li>
          <li>Cómo funciona</li>
          <li>Medios de pago</li>
          
        </ul>
        <div className='qrside'>
      <h4 className='app'>Descargate la app</h4>
    <img src= {qrstyle} className='qr' />      
      </div>
     </footer>
    )
} 

export default Footer