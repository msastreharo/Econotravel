import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Ubicacion = () => {
    //setear hooks useState
    let [card, setCards] = useState ([])
    let [lugar, setLugar] = useState ([])
    //data json
    useEffect(() => {
        axios
          .get(`./db.json`)
          .then((res) => {
            //setName(res.data.name);
          })
      }, []);
    //metrodo filtrado

    //renderizar
  return (
    <div>Ubicacion</div>
  )
}

export default Ubicacion