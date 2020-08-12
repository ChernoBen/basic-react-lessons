import React from 'react';
import ItemComponent from './ItemComponent';


export default function ListComponent(props){
    //criando variavel p/ receber items_set de UserLists
    const items = props.items;
    //criando funcao lambda para instanciar itens de 'item'
    return (

        <div>      
            <h2>{props.listName}</h2>   
            <ul>
                {items.map(item => <ItemComponent key={item.id} name={item.name} status={item.done} />)}
            </ul>
        </div>
        )
}