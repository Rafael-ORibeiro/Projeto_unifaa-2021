import React from "react";
import { DivPersolanizada } from "../../styles/geral-styles";
import { InputText } from "../../componentes/InputText";
import './index.css';
import { Link } from "react-router-dom";

const Login = () =>{
   
   
    return(
        <DivPersolanizada 
            width = "350px" 
            margin = "auto" 
            border = "1px solid #ddd"
            marginTop = "50px"
        >
            <div className = "logo">

                <h1>Login</h1>

            </div>
            

            <InputText
            id="email"
            text="E-mail"
            placeholder="exemplo@exemplo.com"
            ></InputText>
            <InputText
            id="senha"
            text="Senha"
            placeholder="123456"
            type = "password"
            
            ></InputText>
            <div className="input"></div>
            <Link className="link" to="/produtos">Entrar</Link>
            <div className = "esqueci-senha">
                <Link to="/esqueciSenha" >Esqueci minha senha</Link>            
            </div>
        </DivPersolanizada>

    )
}

export default Login;