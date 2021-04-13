import React from 'react';

const Categoria = ({categoria}) => {
    return ( 
        <li className="nav-item">
            <button
                type="button"
                className="btn btn-light"
            >{categoria.name}</button>
        </li>
     );
}
 
export default Categoria;