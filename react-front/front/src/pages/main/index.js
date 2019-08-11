import React, { Component } from "react";
import api from "../../services/api";
import { useState } from 'react';
import "./styles.css";

export default class Main extends Component{
    state ={
        inputValue: '',
        users: [],
    }
    componentDidMount(){
        this.loadProducts();
    };
    loadProducts = async ()=>{
        const response = await api.get('/user/alpha');
        this.setState({users: response.data})
        // console.log(response.data);
        // console.log(response.data.docs);
    };
    change = e =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    constructor(props) {
        super(props);
        this.setState({
          inputValue: 'Bolinho4'
        });
      };
    findOnBd = async (param)=>{
        let response;
        if(param ==''){
            param = 'FAIL';
        }
        if(param.includes("@")){
           response = await api.get('/user/email/'+param);
        }else{
            response = await api.get('/user/name/'+param);
        }

        // response = await api.get('/user/name/'+param);
        const backState = await api.get('/user/alpha');
        if(response.data){
            
            Array.isArray(response.data)?this.setState({users: response.data}):this.setState({users: [response.data]})
        }else{

            this.setState({users: backState.data})
        }
        console.log(typeof response.data)
        console.log(param.includes("@"));
        console.log(response.data)
        console.log(param);
    }

    
    render(){
        return (
            <div className='users-list'> 
                <div className ="top">
                    <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} placeholder ="Insert search"/>
                    <button onClick= {()=>this.findOnBd(this.state.inputValue)}>Procurar</button> 
                    <button onClick= {()=>this.findOnBd('')}> Back</button>
                    <a className="plus" href="http://localhost:3000/cadastro" >+</a>
                </div>
                {this.state.users.map(user =>(
                    <article key={user._id}>
                        <div className='Upper'>
                        <img src = {user.UserImage? require(user.UserImage): null} alt="" height="42" width="42" />
                        <strong>{user.Name}</strong>
                        {console.log("IMAGE PATH ->"+user.UserImage)}
                        </div>
                        <p>{user.Email}</p>
                        <a href="">Notes</a>

                    </article>
                ))}
                {/* <div className="actions">
                    <button onClick={this.prevPage}>Anterior </button>
                    <button onClick={this.nextPage}>Proximo</button>
                </div> */}
            </div>
        )
    }
    updateInputValue(evt) {
        this.setState({
          inputValue: evt.target.value
        });
      }
}

