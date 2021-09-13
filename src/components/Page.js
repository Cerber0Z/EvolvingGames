import React from "react";
import { Switch, Route} from "react-router-dom";
import Inicio from "./page/inicio";
import { ProductosList } from "./page/productos";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";

export default function Page() {
  return (
    <section>
      <Switch>
				<Route path="/" exact component={Inicio} />
				<Route path="/playstation" exact component={ProductosList} />
        <Route path="/playstation/:id" exact component={ProductosDetalles} />
			</Switch>
    </section>
  );
}
