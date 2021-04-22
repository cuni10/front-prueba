import React from 'react';

import{BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Productos from "./components/productos/Productos";
import Admin from "./components/admin/Admin";
import AddProduct from "./components/admin/AddProduct";

import ProductoState from "./context/ProductosState";

function App() {
  return (
    <ProductoState>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/productos" component={Productos}/>
          <Route exact path="/admin" component={Admin}/>
          <Route exact path="/admin/add" component={AddProduct}/>
        </Switch>
      </Router>
    </ProductoState>
  );
}

export default App;
