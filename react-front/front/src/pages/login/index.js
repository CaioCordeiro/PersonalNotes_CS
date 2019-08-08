import React, { Component } from "react";
import api from "../../services/api";
import { Button } from 'reactstrap';
import "./styles.css";
import { Container, Row, Col } from 'reactstrap';

export default class Login extends Component{
render(){
    return (

        <div className='login'> 

                <form>
                    <div className='forms'>
                        <div className='info'>
                            <p>Email:</p>
                            <input type="text" name="Email"/>
                            <p>Senha:</p>
                            <input type="text" name="Senha"/>
                        </div>  
                        <div className='buttom'>
                            <button id='b1' >Cadastrar </button>
                            <button id='b2' >Login </button>
                        </div>
                    </div>
                </form>

        </div>
    )
}
}