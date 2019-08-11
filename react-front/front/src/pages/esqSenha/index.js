
import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";
import { Redirect } from 'react-router-dom'



export default class Login extends Component {

    state ={
        Email: 'Fail',
    };
    constructor(props) {
        super(props);
        this.setState({
            inputValue: ' '
        });
        };
    sendEmail = async (param)=>{
        if(param!=''|| param !=" "){
        const response1 = await api.get("/admin/email/"+param);
        if(response1.length){
        const pass =response1.data[0].Senha;
        const response2 = await api.get("/admin/esqsenha/"+param+'/'+pass);
        }
        }
    }
    render() {
        return (
            <div className = "esqsenha">
                <div className ='forms'>

                    <div className= 'insert'>
                        <p>Insira seu e-mail:</p>
                    </div>
                    <div className = 'input'>
                        <input value={this.state.Email} onChange={evt => this.updateInputValueEmail(evt)} type="text" name="Email" placeholder="Email"/>
                    </div>
                        <button onClick  ={()=>this.sendEmail(this.state.Email)} type ="button">Send</button>
                </div>
            </div>

        )
    }
    updateInputValueEmail(evt) {
        this.setState({
          Email: evt.target.value
        });
      }
}