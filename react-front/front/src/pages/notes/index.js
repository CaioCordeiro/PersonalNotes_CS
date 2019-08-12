import React from 'react';
import api from '../../services/api'
import './styles.css';
import {Link} from 'react-router-dom';

export default class Cadastro extends React.Component {
    state ={
        user:{},
        notes:[],
        value: "a"

    };
    async componentDidMount(){
        const { id } = this.props.match.params;
        const response = await api.get(`/user/${id}`);
        this.setState({user: response.data});
        // console.log(response.data.Notes)
        this.setState({notes:response.data.Notes})
    }
    async addNote(str){
        const response = api.put("/user/"+ this.state.user._id,{Notes:[str]})
        return response;
    }
  render() {
      const {user} = this.state;
    return (
        <div className = "all">

            <div className ="user-info">
                <div className ="upper">
                    <img src = {user.UserImage? require("../main/uploads/"+user.Name+'.jpg'): null} alt={user.Name}/>
                    <textarea value={this.state.Email} onChange={evt => this.updateInputValue(evt)}></textarea>
                    {console.log(this.state.value)}
                </div>
                <h1>{user.Name}</h1>
                <button onClick  ={()=>this.addNote(this.state.value)} type="submit"  >Add Note</button>
                <h2>{user.Description}</h2>
                
                <Link className="Link" to={`/main`}>Back</Link>
            </div>
            <div>
            {this.state.notes?this.state.notes.map(str=>(
                <p>{str}</p>
            )):<p>No Notes</p>}
            </div>
        </div>
        

    );
  }
  updateInputValue(evt) {
    this.setState({
      value: evt.target.value
    });
  }
}