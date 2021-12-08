import React, {useState } from 'react';
import { InputText } from '../../componentes/InputText';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './index.css';

export default function Editar(){

    const {codigo,nome_,quantidade_,valor_,descricao_,data_} = useParams()

    let [nome,setNome] = useState(nome_)
    let [valor,setValor] = useState(valor_)
    let [quantidade,setQuantidade] = useState(quantidade_)
    let [data,setData] = useState(data_)
    let [descricao,setDescricao] = useState(descricao_)

    console.log(descricao_)

    let editar = async() =>{ 
        await axios.put('https://api-unifaa-crud.herokuapp.com/produtos/update',[{"codigo":codigo,"produto":nome, "quantidade":quantidade, "data":descricao, "valor":valor, "descrição":data}])
            .then((response)=>{
                alert(response.data['message'])})
            .catch((e)=> alert(e))
        }
        
        return(
            <div className="container" >
                <div className="header">
                    <h2>Editar Produto</h2>
                </div>
                <div className='formulario'>
                    <InputText className="inputCadastro" id="Código"type="number"min="1" value = {codigo} />
                    <InputText className="inputCadastro" id = "Nome" value={nome} callBack={(event)=> setNome(event.target.value)}/>
                    <InputText className="inputCadastro" id="Quantidade" min = "1" type="number" value={quantidade} callBack={(event)=> setQuantidade(event.target.value)}/>
                    <InputText className="inputCadastro" id = "Valor" min ="0.01" type="number"value={valor} callBack={(event)=> setValor(event.target.value)}/>    
            
                    <InputText type="datetime-local" className="inputCadastro" id="Data Cadastro" value={descricao} callBack={(event)=> setDescricao(event.target.value)}/>
                    <div className="container">
                        <label htmlFor="descricao">Observação</label>
                        <textarea id = "descricao" value={data} onChange={(event)=> setData(event.target.value)}/> 
                        <input className="botao" type="button" value="Editar" onClick={()=> editar()}></input>
                    </div>
                    
                </div> 
            
            </div>
        
        )
    
}