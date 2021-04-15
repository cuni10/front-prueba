import React, { Fragment } from 'react';

const Producto = ({producto}) => {

    const {name,stock,price,img} = producto;

    return ( 
        <Fragment className="col-md-4 ">
            <div className="card align-items-center p-2 text-center producto ">
                <img src={img} className="w-50 rounded" alt="..."></img>
                <div className="card-body ">
                    
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Precio: {price}$</p>
                    {stock === false
                        ?(<a href="#!" className="btn btn-primary disabled">Sin Stock</a>)
                        :(<a href="#!" className="btn btn-primary">Obtener</a>)
                    }
                    
                </div>
            </div>
        </Fragment>
     );
}
 
export default Producto;