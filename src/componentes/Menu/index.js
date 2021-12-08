import React from "react";

import { NavBar } from "../../styles/geral-styles";

import { Link, useLocation } from "react-router-dom";

import storage from "../../utils/storage";



const Menu = () =>{
    const logout = () =>{
       storage.removerAutenticacao()
       window.open("/login","_self")
    }

    if(useLocation().pathname !== "/login"){

        return(
            <div>
                <NavBar>

                    <li>
                        <Link to = {'/produtos'}>Produtos</Link>
                    </li>

                    <li>
                        <Link to = {'/cadastro'}>Cadastro de Produtos</Link>
                    </li>

                    <li>
                        <Link to = {'/sobre'}>Sobre</Link>
                    </li>

                    <li>
                        <a href = "#" onClick = {logout}>Sair</a>
                        
                    </li>
                </NavBar>

            </div>
        )
    }else{
        return(<div></div>)
    }


}

export default Menu;
