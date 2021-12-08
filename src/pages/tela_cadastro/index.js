import React, { useState } from 'react';
import { InputText } from '../../componentes/InputText';
import axios from 'axios';
import './index.css';

export default function Cadastro(){

    let [codigo,setCodigo] = useState('')
    let [nome,setNome] = useState('')
    let [quantidade,setQuantidade] = useState('')
    let [valor,setValor] = useState('')
    let [data,setData] = useState('')
    let [descricao,setDescricao] = useState(' ')

    let dados = ()=>{
        if(codigo !== '' && nome !== '' && quantidade !== '' && valor !== '' && data !== ''){
            return {
                "codigo":codigo,
                "produto":nome,
                "quantidade":quantidade,
                "valor":valor,
                "data":data,
                "descrição":descricao
            }
        }else{
            alert('Insira dados em todos os campos.')
        }
    }

    let enviar = async()=>{
        await axios.post('https://api-unifaa-crud.herokuapp.com/produtos',[dados()])
        .then((response) =>{
            console.log(dados())
            alert(response.data['message'])

        })
        
    }



    return(
        <div className="container">
            <div className="header">
                <h2>Cadastrar Produtos</h2>
            </div>
            <div className='formulario'>
                <InputText className="inputCadastro" id="Código"type="number"min="1" callBack={(event)=> setCodigo(event.target.value)}/>
                <InputText className="inputCadastro" id = "Nome" callBack={(event)=> setNome(event.target.value)}/>
                <InputText className="inputCadastro" id="Quantidade" min = "1" type="number"callBack={(event)=> setQuantidade(event.target.value)}/>
                <InputText className="inputCadastro" id = "Valor" min ="0.01" type="number"callBack={(event)=> setValor(event.target.value)}/>    
          
                <InputText type="datetime-local" className="inputCadastro" id="Data Cadastro" callBack={(event)=> setData(event.target.value)}/>
                <div className="container">
                    <label htmlFor="descricao">Observação</label>
                    <textarea id = "descricao" onChange={(event)=> setDescricao(event.target.value)}> </textarea>
                    <input className="botao" type="button" value="Cadastrar" onClick={() => enviar()}></input>
                </div>
                
            </div> 
         
        </div>
      
    )
}