import React from 'react';
import Barra from '../layout/Barra';
import Sidebar from "../layout/Sidebar";

const Productos = () => {
    return ( 

        <div className="productos vh-100">
            <Barra/>
            <div className="row">
                <div className="col sidebar">
                    <Sidebar/>
                </div>
                <main className="col-10 main">
                    <h1>Main</h1>
                </main>
            </div>
        </div>
     );
}
 
export default Productos;