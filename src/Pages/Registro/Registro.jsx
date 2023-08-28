
import "./Css_Styles/Registro_styles.css";
import React from 'react';

const Registro = () => {
    return (
        <div className="registrase">
    <div className="container-registro-wrapper">
        <div className="container-registro">

            <img className="rectangle" alt="Rectangle" src="rectangle-1.png" />

            <div className="text-wrapper">Registrarse</div>

            <div className="overlap">
            <label for="username" className="User"></label>
            <input type="text" id="username" name="username" placeholder="    User34" />
            </div>

            <div className="overlap-group">
            <label for="email" className="User"></label>
            <input type="text" id="email" name="email" placeholder="    User@gmail.com" />
            </div>

            <div className="text-wrapper-3">Nombre de usuario</div>
            <div className="text-wrapper-4">Email</div>
            <div className="text-wrapper-5">Contraseña</div>

            <div className="div-wrapper">
                <label for="password" className="password"></label>
                <input type="password" id="password" name="password" placeholder="********" />
            </div>

            <div className="btn-registrarse">
                <div className="overlap-group-2">
                    <span className="text-wrapper-7">Registrarse</span>
                <div className="rectangle-2"></div>
                </div>
            </div>

            <div className="text-wrapper-8">Confirmar Contraseña</div>

            <div className="overlap-2">
            <label for="password" className="password"></label>
            <input type="password" id="password2" name="password" placeholder="********" />
            </div>


        </div>
    </div>
</div>

);
};
  
  export default Registro;