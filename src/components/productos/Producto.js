import React, { Fragment } from 'react';

const Producto = ({producto}) => {

    const {name,stock,price,img} = producto;

    return ( 
        <Fragment>
            <div class="card col producto ">
                <img src={img} class="card-img-top w-50" alt="..."></img>
                <div class="card-body ">
                    
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Precio: {price}$</p>
                    {stock === false
                        ?(<a href="#!" class="btn btn-primary disabled">Sin Stock</a>)
                        :(<a href="#!" class="btn btn-primary">Obtener</a>)
                    }
                    
                </div>
            </div>
        </Fragment>
     );
}
 
export default Producto;