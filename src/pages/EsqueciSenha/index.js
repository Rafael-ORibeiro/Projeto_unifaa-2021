import React from "react";
import { Link } from "react-router-dom";

export default function EsqueciSenha(){

    return(
        <div>
            <h1>Página esqueci senha</h1>
            <Link to = "/login">Voltar para login</Link>
        </div>
    )
}
