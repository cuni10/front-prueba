import React from 'react';

const Barra = () => {
    return ( 
        <div className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <h1 className="navbar-brand">Juegos.com</h1>
                <form className="d-flex">
                    <input type="search" className="form-control me-2" placeholder="¿Que Buscas?"/>
                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                <button className="btn">Cerrar sesion</button>
            </div>
        </div>
     );
}
 
export default Barra;