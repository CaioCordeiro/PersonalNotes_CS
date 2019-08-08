import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";

export default class Main extends Component{
    state ={
        users: [],
    }
    componentDidMount(){
        this.loadProducts();
    }
    loadProducts = async ()=>{
        const response = await api.get('/user');
        this.setState({users: response.data.docs.sort()})
        // console.log(response.data.docs);
    }

    render(){
        return (
            <div className='users-list'> 
                {this.state.users.map(user =>(
                    <article key={user._id}>
                        <strong>{user.Name}</strong>
                        <p>{user.Email}</p>
                        <a href="">Notes</a>
                    </article>
                    // <h2 key={user._id}>{user.Name}</h2>
                ))}
                <div className="actions">
                    <button onClick={this.prevPage}>Anterior </button>
                    <button onClick={this.nextPage}>Proximo</button>
                </div>
            </div>
        )
    }
}

