import React from 'react';
import "./Css_Styles/Login_Styles.css";
/*import LoginForm from '../Components/Login/LoginForm';*/
import Paisaje from "./Imagenes/Rectangle-1.png";

const Login = () => {
  return (
    <div className="iniciar-sesion">

    <div className="div">
        <img className="rectangle" alt="Rectangle" src={Paisaje} />

        <div className="text-wrapper">Iniciar sesión</div>

        <div className="overlap">
            <label for="username" className="text-wrapper-2"></label>
            <input type="text" id="username" name="username" placeholder="    User34" />
        </div>

        <p className="p">Nombre de usuario o email</p>

        <div className="text-wrapper-3">Contraseña</div>

        <div className="overlap-group">
            <label for="password" className="text-wrapper-6"></label>
            <input type="password" id="password" name="password" placeholder="********" />
        </div>

        <div className="text-wrapper-4">¿No estás registrado?</div>
        <div className="text-wrapper-5">Crea una cuenta</div>

        <button className="btn-iniciar-sesion">
            <div className="overlap-group-2">
                <span className="text-wrapper-7">Iniciar sesión</span>
                <div className="rectangle-2"></div>
            </div>
        </button>

    </div>

</div>



  );
};

export default Login;
