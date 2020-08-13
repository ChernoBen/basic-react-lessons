import React from 'react';
import ListComponent from './ListComponent';
import LoginComponent from './LoginComponent';

//class que herda de react component
export default class UserLists extends React.Component {
    //integrando api de forma asincrona
    state = {lists:[],loading:true}

    async componentDidMount(){
        //integrando token
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        config.headers['Authorization'] = 'Token ' + localStorage.getItem('token');
        //obtendo json do django server
        var url = 'http://127.0.0.1:8000/list/';
        //passando url e token como parametro 
        const response = await fetch(url,config);
        //instanciando json em uma constante
        const data = await response.json();
        console.log(data);
        this.setState({lists:data,loading:false});
        
    }

    render(){
        //iterando dados da api Django
        const listsApi = this.state.lists;
        
        var token = localStorage.getItem('token');
        //declarando var p/ obter token
        
        if (!token){
            // se token for vazio eu retorno o componente de login
            return <LoginComponent />

        } else {
            return (
                //criando uma lambda function para iterar itens no json
                <div>
                    {listsApi.map(list => <ListComponent key={list.id} listName={list.name} items={list.item_set} />)}
                </div>
            )
        }

        
    }
}