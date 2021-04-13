import React from 'react';
import Barra from '../layout/Barra';
import Sidebar from "../layout/Sidebar";

const Productos = () => {
    return ( 

        <div className="container-fluid">
            <Barra/>
            <div className="row">
                <div className="col bg-dark">
                    <Sidebar/>
                </div>
                <div className="col-10">
                    <h1>Main</h1>
                </div>
            </div>
        </div>
     );
}
 
export default Productos;