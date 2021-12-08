import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Menu from "./componentes/Menu"
import Produtos from "./pages/Produtos";
import Login from "./pages/Login";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import Cadastro from "./pages/tela_cadastro";
import Editar from "./pages/Tela_editar";
import EsqueciSenha from "./pages/EsqueciSenha";

const Router = () => (

    <BrowserRouter>
        <Menu/>
        <Routes>
            <Route exact path = "/" element = {<Login/>}/>
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "/contato" element = {<Contato/>}/>
            <Route path = "/sobre" element = {<Sobre/>}/>
            <Route path = "/produtos" element = {<Produtos/>}/>
            <Route path = "/cadastro" element = {<Cadastro/>}/>
            <Route path = "/esqueciSenha" element = {<EsqueciSenha/>}/>
            <Route path = "/editar/:codigo/:nome_/:quantidade_/:valor_/:data_/:descricao_/" element = {<Editar/>}/>

        </Routes>
    </BrowserRouter>

);

export default Router;