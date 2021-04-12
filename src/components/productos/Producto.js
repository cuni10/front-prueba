import React from 'react';

const Producto = ({producto}) => {
    return ( 
        <li className="nav-item">
            <button
                type="button"
                className="btn btn-light"
            >{producto.name}</button>
        </li>
     );
}
 
export default Producto;