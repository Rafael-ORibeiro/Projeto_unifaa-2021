import React, { useState, useEffect } from "react";
import "./index.css";
import {Link} from 'react-router-dom'
import axios from "axios";
import tela_editar from './../Tela_editar'
import ModalEditar from './../../componentes/Modal'

export default function Produtos(props){


    let[listaProdutos,setListaProdutos] = useState(null)

    let [listaEdicao,setListaEdicao] = useState(' ')

   

    let dados = async() =>{

        await axios.get('https://api-unifaa-crud.herokuapp.com/produtos')
        .then((response)=>{return setListaProdutos(response.data.result.reverse())})
        .catch()

    }
    let excluir = async(codigo) =>{
        let pergunta = window.confirm(`Você deseja excluir o produto de código ${codigo}`)
        if(pergunta){
            axios.delete('https://api-unifaa-crud.herokuapp.com/produtos/delete',{data:[{'codigo':codigo}]})
            .then((response)=>{
                alert(response.data['message'])
                dados()
            })
            .catch((e)=> alert(e))
        
        }
        
    }

    let editar = (classe)=>{

        window.localStorage.removeItem('lista')

        setListaEdicao(document.querySelector(`.${classe}`).innerText.split('  '))
        
        window.localStorage.setItem("lista",listaEdicao)
        
        alert(window.localStorage.getItem("lista"))
        
    }

    useEffect(()=> dados(),[])

        if(listaProdutos != null){
        return(

            <div className="conteudo">
                <table border='1'>
                    <tr>
                        <th>
                            Código
                        </th>
                        <th>
                            Nome
                        </th>
                        <th>
                            Quantidade
                        </th>
                        <th>
                            Valor
                        </th>
                        <th>
                            Data do cadastro
                        </th>
                        <th>
                            Descrição
                        </th>
                        <th>
                            
                        </th>
                    </tr>

                    {listaProdutos.map((produto) =>{
                        return(
                            <tr className={`C${produto["codigo"]}`}>
                        <td >
                            {produto["codigo"]}
                        </td>
                        <td>
                           { produto["produto"]}
                        </td>
                        <td>
                              {produto["quantidade"]}
                        </td>
                        <td>
                            {produto["valor"]}
                        </td>
                        <td>
                            {produto["data"]}
                        </td>
                        <td>
                            {produto["descrição"]}
                        </td>
                        <td>
                            <Link  to={`/editar/${produto["codigo"]}/${produto["produto"]}/${produto["quantidade"]}/${produto["valor"]}/${produto["descrição"]}/${produto["data"]}/`}>Editar</Link>
                            <input className="excluir" type="button" value="Excluir" onClick={() => excluir(produto["codigo"])}></input>
                            
                        </td>
                    </tr>
                            


                        )

                    })}
                    
                </table>
               
            </div>
            
        )
        }else{
            return(
                <div>
                    <h2>Recebendo dados...</h2>
                </div>
            )
        }

}