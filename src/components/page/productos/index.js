import React, {useContext} from 'react'
import { DataContext } from "context/DataProvider";
import { ProductoItem } from "./ProductoItem";
import Footer from "../footer/footer"
export const ProductosList = () => {
	const value = useContext(DataContext)
	const [productos] = value.productos;
    return (
			<>
			<h1 className="produ">VIDEOJUEGOS</h1>
        <div className="productos">
            {
							productos.map(videogame =>(
								<ProductoItem 
									key={videogame.id}
									title={videogame.title}
									image={videogame.image}
									category={videogame.category}
									price={videogame.price}
									id={videogame.id}
									description={videogame.description}
								/>
							))
						}					
        </div>
			<Footer />			
				</>
    )
}
