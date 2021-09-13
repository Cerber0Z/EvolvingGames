import React, { useContext} from "react";
import { DataContext } from "context/DataProvider";
import { Link } from "react-router-dom";
import LogoE from "images/logo-games.png";
import iconsCategories from '../icons-categorie'

export const Header = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;


  const toogleMenu = () =>{
    setMenu(!menu)
  }
 

  return (
    <header>
      <div className="menu">
      <box-icon name="menu"></box-icon>
      </div>
      <Link to="/">
      <div className="logo">
        <img src={LogoE} alt="Logo" width="150" />
      </div>
      </Link>
      <ul className="categories">
                    <div className="categories-div">
                        <li className="icons-category">
                          <Link to="/productos"><img className="icon-category" src={iconsCategories.playstation} title="PlayStation" alt="PlayStation" /></Link>
                        </li>
                    </div>
                    <div className="categories-div">
                        <li className="icons-category">
                            <Link to="/productos"><img className="icon-category" src={iconsCategories.xbox} title="Xbox" alt="Xbox" /></Link>
                        </li>
                    </div>
                    <div className="categories-div">
                        <li className="icons-category">
                            <Link to="/productos"><img className="icon-category" src={iconsCategories.nintendo} title="Nintendo" alt="Nintendo" /></Link>
                        </li>
                    </div>
                </ul>  
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total"> {carrito.length} </span>
      </div>
    </header>
  );
};
