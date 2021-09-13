import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "context/DataProvider";

export const ProductoItem = ({title, image, id}) => {

  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;



  return (
    
    <div key={id} className="producto">
      <Link to={`/playstation/${id}`}>
     
      <div className="card ">
                <img className="mask-img" src={image} alt={title} ></img>    
            </div>
     
      </Link>
      
    </div>
    
  );
};
