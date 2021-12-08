import React from "react";
import { Input } from "../../styles/form-styles";

export const InputText = (props) => {

    return(
        <div>
            <label htmlFor={props.id}>{props.id}</label>
            <Input value={props.value}  className='input' min = {props.min}type={props.type} id = {props.id} placeholder={props.placeholder} onChange = {props.callBack} ></Input>
        </div>
    )

}