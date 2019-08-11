import React from 'react';
import api from '../../services/api'
import './styles.css';
import {Link} from 'react-router-dom';

export default class Cadastro extends React.Component {
    state ={
        notes:{}
    };
    async componentDidMount(){
        const { id } = this.props.match.params;
        const response = await api.get(`/user/${id}`);
        this.setState({notes: response.data});
    }
  render() {
      const {notes} = this.state;
    return (
        <div className ="notes-info">
            <h1>{notes.Name}</h1>
            <p>{notes.Description}</p>
            <Link to={`/main`}>Back</Link>
        </div>

    );
  }
}