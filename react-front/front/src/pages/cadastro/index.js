import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import api from "../../services/api";
import "./styles.css";
import axios from 'axios';
import {Link} from 'react-router-dom';
import { fdatasync } from 'fs';
export default class Cadastro extends React.Component {
  state ={
  Name: '',
  Email: '',
  Description:'',
  selectedFile:  null,
  UserImage: '',
  Notes: [],
  }
  fileSelectHandler = event =>{
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0]
    })
  }
  create = async (state) =>{
    console.log(state);
    const fd = new FormData();
    fd.append('file', this.state.selectedFile);
    fd.append('Name',state.Name)
    console.log(state.name)
    const response = await axios.post('http://localhost:3001/api/upload',fd);
    console.log(response)

      console.log(state)
      state.UserImage='/home/caio/Desktop/Projeto_SC/PersonalNotes_CS/react-front/front/src/pages/main/uploads/'+state.Name;
      console.log(state)
      const response1 = await api.post("/user",state);
      console.log(response1);
  }
  fileUploadHandler = () =>{

  }
  render() {
    return (
      <div className = "form">

        <Form >
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>Email</Label>
            <Col sm={10}>
              <Input value={this.state.Email} onChange={evt => this.updateInputValueEmail(evt)}type="email" name="email" id="exampleEmail" placeholder="Email" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleSelect" sm={2}>Name</Label>
            <Col sm={10}>
              <Input value={this.state.Name} onChange={evt => this.updateInputValueName(evt)}type="text" name="Name" placeholder="Name" id="exampleSelect" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label className="descrição" for="exampleText" sm={2}>Descrição</Label>
            <Col sm={10}>
              <Input value={this.state.Description} onChange={evt => this.updateInputValueDescription(evt)} type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>Foto</Label>
            <Col sm={10}>
              <Input value={this.state.UserImage} onChange = {this.fileSelectHandler} type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                Coloque uma foto sua!
              </FormText>
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button onClick={()=>this.create(this.state)}>Submit</Button>
              <Link to={`/main`}>Back</Link>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
  updateInputValueName(evt) {
    this.setState({
      Name: evt.target.value
    });
  }
  updateInputValueEmail(evt) {
    this.setState({
      Email: evt.target.value
    });
  }
  updateInputValueDescription(evt) {
    this.setState({
      Description: evt.target.value
    });
  }
  // updateInputValueUserImage(evt) {
  //   this.setState({
  //     UserImage: this.state.UserImage + evt.target.value
  //   });
  // }
}