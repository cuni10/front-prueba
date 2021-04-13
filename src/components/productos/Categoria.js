import React from 'react';

const Categoria = ({categoria}) => {
    return ( 
        <li className="m-2">
            <button
                type="button"
                className="btn categoria w-100"
            >{categoria.name}</button>
        </li>
     );
}
 
export default Categoria;