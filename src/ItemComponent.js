import React from 'react';

export default function ItemComponent(props){
    const status = props.status;
    return <li><p>{ props.id }</p>
        <p>{ props.name }</p> 
        { status?<p>Finalizado</p>:<p>Nao Finalizado</p> } 
        </li>
}