import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return ( 
        <Fragment>
            <h1>Administrador</h1>
            <Link to="/admin/products">Ver Productos</Link>
            <Link to="/admin/add">Agregar Producto</Link>
        </Fragment>
     );
}
 
export default Admin;