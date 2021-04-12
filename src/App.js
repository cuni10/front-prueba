import React from 'react';

import{BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Productos from "./components/productos/Productos";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/productos" component={Productos}/>
      </Switch>
    </Router>
  );
}

export default App;
