import React from 'react';

const Barra = () => {
    return ( 
        <div className="row">
            <div className="navbar barra flex-row">
                <div className="container-fluid ">
                    <h1 className="navbar-brand">Juegos.com</h1>
                    <form className="d-flex ">
                        <input type="search" className="form-control me-2" placeholder="¿Que Buscas?"/>
                        <button class="btn btn-outline-light" type="submit">Buscar</button>
                    </form>
                    <div className="d-inline-flex">
                        <button className="btn btn-outline-light m-1">Cuni Gramajo</button>
                        <button className="btn btn-outline-light m-1">Cerrar sesion</button>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Barra;