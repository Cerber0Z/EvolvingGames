import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from "context/DataProvider";
import { useParams } from "react-router-dom";


export const ProductosDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([])
  const [url, setUrl]= useState(0)
  const params = useParams();
  let item = 0;

  useEffect(() =>{

    item=0;
    productos.forEach(producto =>{
      if(producto.id === parseInt(params.id)){
        setDetalle(producto)
        setUrl(0)
      }
    })
  },[params.id, productos])


  if(detalle.length < 1) return null;

  return (
    <>
    
       <div className="banner">
                <img className="banner-img" src={detalle.banner} alt={detalle.name} />
        </div>
            <div className="container">
                <div className="card-page">
                    <h1 className="title-game">{detalle.name}</h1>
                    <div className="precio-development">
                        <h6 className="developers">{detalle.developers}</h6>
                        <h2 className="precio">${detalle.price},00</h2>
                    </div>
                    <button onClick={() => addCarrito(detalle.id)} className="btn-añadir" id="btn-añadir" >Añadir</button> 
                    <div className="card card-img">
                    <img className="mask-img" src={detalle.image} alt={detalle.name} ></img>    
                    </div>
                    <div className="card-description">
                        <h3 className="Description">DESCRIPCIÓN DEL JUEGO</h3>
                        <p className="description-text">{detalle.description}</p> 
                    </div>
                    
                </div>

               
 
            </div>
   
   
    
    </>
  )
}
