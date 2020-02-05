import React from "react";
import '../../styles/login.css';
import { Link } from "react-router-dom";
import { Footer } from '../component/footer.js';

export const Login = () => {
	return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div id="loginImage" className="col-6 left-align bg-primary">
                    <img src="/assets/images/logo.svg" alt="logo" className="img-fluid"></img>
                </div>
                <div className="col-6 right-side">
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" placeholder="Correo electrónico"></input>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="password" placeholder="Contraseña"></input>
                        </div>
                        <div className="form-group">
                            <Link to="/home" className="btn btn-primary">Iniciar sesión</Link>
                        </div>
                        <div className="form-group">
                            <button href="..." id="contraseña">¿Olvidaste tu contraseña?</button>
                        </div>
                        <div className="form-group">
                            <label>¿No tienes una cuenta? </label>
                            <Link to="/formregister">
                            <button href="..." id="registro"> Regístrate</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
           
        </div>
        <Footer />
        </>
	);
};
