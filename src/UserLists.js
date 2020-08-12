import React from 'react';
import ListComponent from './ListComponent';

//class que herda de react component
export default class UserLists extends React.Component {
    //integrando api de forma asincrona
    state = {lists:null,loading:true}

    async componentDidMount(){
        //integrando token
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        config.headers['Authorization'] = 'Token 85658bb0499387dcfa14a22775bb34bcc186e31c';
        
        //obtendo json do django server
        var url = 'http://127.0.0.1:8000/list/';
        //passando url e token como parametro 
        const response = await fetch(url,config);
        const data = await response.json();
        console.log(data);
        this.setState({lists:data,loading:false});
        
    }

    render(){
        return (
            <div>
                <ListComponent listName = {'Minha Lista'} />
                <ListComponent listName = {'Minha Lista'} />
            </div>
        )
    }
}