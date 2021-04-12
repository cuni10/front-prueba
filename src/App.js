import React from 'react';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Inicio}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/productos" component={Productos}/>
      </Switch>
    </Router>
  );
}

export default App;
