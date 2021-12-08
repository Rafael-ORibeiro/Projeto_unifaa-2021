import React from "react";

import { NavBar } from "../../styles/geral-styles";

import { Link, useLocation } from "react-router-dom";

const Menu = () =>{

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
                        <Link to="/login">Sair</Link>
                        
                    </li>
                </NavBar>

            </div>
        )
    }else{
        return(<div></div>)
    }


}

export default Menu;
