import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";
import { Redirect } from 'react-router-dom'

export default class Login extends Component{
    state ={
        Email: '',
        Senha: '',
        redirect: false,

    }
    setRedirect = (rote) => {
        this.setState({
          redirect: rote
        })
      }
      renderRedirect = () => {
        if (this.state.redirect=="main") {
          return <Redirect to='/main' />
        }else if(this.state.redirect=="senha"){
            return <Redirect to='/EsqSenha' />
        }
      }
    
    constructor(props) {
        super(props);
        this.setState({
            inputValue: 'Bolinho4'
        });
        };
    login = async (param)=>{
        const rota = "/admin/login/" + param.Email +'/'+param.Senha;
        const response = await api.get(rota);
        console.log(response.data);

        if(response.data.Status){
            console.log("LOGIN AUTENTICATED");
            return this.setRedirect("main");
        }
        // else{
        //     return <p>Senha ou e-mail errados</p>
        // }
    }    
    render(){
        return (

            <div className='login'> 

                    <form>
                        <div className='forms'>
                            <div className='info'>
                                <p>Email:</p>
                                <input value={this.state.Email} onChange={evt => this.updateInputValueEmail(evt)} type="text" name="Email"/>
                                <p>Senha:</p>
                                <input value={this.state.Senha} onChange={evt => this.updateInputValueSenha(evt)} type="text" name="Senha"/>
                            </div>  
                            <div className='buttom'>
                                {this.renderRedirect()}
                                <button onClick  ={()=>this.login(this.state)} type ="button">Login </button>
                                <button onClick ={() =>this.setRedirect("senha")} type ="button">Esqueci a senha</button>
                            </div>
                        </div>
                    </form>

            </div>
        )
    }
    updateInputValueEmail(evt) {
        this.setState({
          Email: evt.target.value
        });
      }
      updateInputValueSenha(evt) {
        this.setState({
          Senha: evt.target.value
        });
      }
}