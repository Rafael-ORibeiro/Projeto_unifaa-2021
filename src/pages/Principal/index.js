import React from "react";
import "./index.css";
import {Link} from 'react-router-dom'

export default class Detalhes extends React.Component{

    render(){
        return(

            <div>
                <h1  className = "principal">Estou na página Principal</h1>
                <Link to="/detalhes">Detalhes</Link>
            </div>
        )
    };
}