import React, { useState } from 'react';
import {Link} from "react-router-dom";

const Login = () => {


    const [usuario,setUsuario] = useState({
        email:"",
        password:""
    });
    const {email,password} = usuario;
    
    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault();

        //Validar

        //pasarlo al action
    }

    return ( 
        <div className="global-container vh-100">
            <div className="card login-form" >
                
                    <div className="card-body">
                        <h1 className="card-title text-center">Iniciar Sesion</h1>
                        <div className="card-text">
                            <form 
                                className="d-grid gap-2 formulario"
                                onSubmit={onSubmit}
                            >
                                <div className="form-group">
                                    <label 
                                        for="email" 
                                        className="form-label"
                                    >Correo Electronico</label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        name="email"
                                        className="form-control" 
                                        placeholder="example@example.com"
                                        value={email}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label 
                                        for="password" 
                                        className="form-label"
                                    >Contraseña</label>
                                    <input 
                                        type="password" 
                                        id="password"
                                        name="password"
                                        className="form-control" 
                                        placeholder="Tu Contraseña"
                                        value={password}
                                        onChange={onChange}
                                    />
                                </div>

                                <button type="submit" className="btn btn-block btn-primary">Entrar</button>
                            </form>
                            
                        </div>
                        <div className="registrarse">
                            ¿No tienes cuenta? <Link to="/register" className="link card-link">Registrarme</Link>
                            </div>
                    </div>
                
            </div>
        </div>
     );
}
 
export default Login;