import React from 'react';

export default class LoginComponent extends React.Component{
   //form p/ login
   constructor(props){
       super (props);
       this.state = {value: '',password: ''};
       
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleChangePassword = this.handleChangePassword.bind(this);

   }
   handleChange(event){
       this.setState({value: event.target.value});

   }
   handleChangePassword(event){
    this.setState({password: event.target.value});

}
   handleSubmit(event){
       alert('A name was submitted:' + this.state.value + ' Password: ' + this.state.password);
       event.preventDefault();

   }
   render(){
       return(
           <form onSubmit={this.handleSubmit}>
               <label>
                   name:
                   <input type="text" value={this.state.value} onChange={this.handleChange} />
                   <input type="password" value={this.state.password} onChange={this.handleChangePassword} />

               </label>
               <input type="submit" value="submit"/>
           </form>
       );
   }
}