import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Navbar from '../Navbar';
import CRUD from "../../services/crud";
import FormLabel from '@material-ui/core/FormLabel';

class App extends Component {
    state = {
        data: [],
        handleinsert: false,
        handledelete: false,
        id: {
            idOfUser: ''
        },
        form: {
            idOfUser: '',
            email: '',
            password: '',
            nameUser: '',
            dateOfBirth: '',
            adress: '',
            company: '',
            cc: ''
        }
    }


    handleget = () => {
        // var a = parseInt(idOfTest);
        //console.log(window.location.pathname.substr(12));
        this.state.id.idOfUser = window.location.pathname.substr(12);
        console.log(this.state.id);
        axios.post(CRUD.getUser, this.state.id).then(response => {
            this.setState({ data: [response.data.data] });
            console.log(response.data.data);
        }).catch(error => {
        console.log(error.message);
        })
    }

    
      handleput = () => {
        // this.state.id2.idOfQuestion = this.state.form.idOfQuestion;
        // console.log(this.state.id2);
        axios.put(CRUD.updateUser, this.state.form).then(response => {
          this.handleinsert();
          this.handleget();
        })
      }
    
      handleinsert = () => {
        this.setState({ handleinsert: !this.state.handleinsert });
      }
    
      selectedItem = (item) => {
        this.setState({
          cc: 'update',
          form: {
            idOfUser: item.idOfUser,
            email: item.email,
            password: item.password,
            nameUser: item.nameUser,
            dateOfBirth: item.dateOfBirth,
            adress: item.adress,
            company: item.company
    
          }
        })
      }
    
      handleChange = async e => {
        e.persist();
        await this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value
          }
        });
        console.log(this.state.form);
        //console.log(e.target.value);
      }
    
    
      componentDidMount() {
        this.handleget();
      }
    
    
      render() {
        const { form } = this.state;
        return (
          <div className="App">
            <Navbar />
            
                {this.state.data.map(item => {
                  return (
                      <div>
                      <FormLabel>Email: </FormLabel>
                      <FormLabel>{item.email}</FormLabel> <br />
                      <FormLabel>Mật khẩu: </FormLabel>
                      <FormLabel>{item.password}</FormLabel> <br />
                      <FormLabel>Tên: </FormLabel>
                      <FormLabel>{item.nameUser}</FormLabel> <br />
                      <FormLabel>Ngày sinh: </FormLabel>
                      <FormLabel>{item.dateOfBirth}</FormLabel> <br />
                      <FormLabel>Địa chỉ: </FormLabel>
                      <FormLabel>{item.adress}</FormLabel> <br />
                      <FormLabel>Công ty: </FormLabel>
                      <FormLabel>{item.company}</FormLabel> <br />
                    
                        <button className="btn btn-primary" onClick={() => { this.selectedItem(item); this.handleinsert() }}><FontAwesomeIcon icon={faEdit} /></button>
           
                    </div>
                  )
                })}
    
            <Modal isOpen={this.state.handleinsert}>
          <ModalHeader style={{ display: 'block' }}>
            {this.state.cc === 'insert' ?
              <span>Nhập thông tin</span> :
              <span>Sửa thông tin</span>
            }
            <span style={{ float: 'right' }} onClick={() => this.handleinsert()}>x</span>
          </ModalHeader>
          <ModalBody>
            <div>
              <AvForm >
                <AvField name="email" label="email" type="text" onChange={this.handleChange} value={form ? form.email : ''} required />
                <AvField name="password" label="password" type="text" onChange={this.handleChange} value={form ? form.password : ''} required />
                <AvField name="nameUser" label="nameUser" type="text" onChange={this.handleChange} value={form ? form.nameUser : ''} required />
                <AvField name="dateOfBirth" label="dateOfBirth" type="date" onChange={this.handleChange} value={form ? form.dateOfBirth : ''} required />
                <AvField name="adress" label="adress" type="text" onChange={this.handleChange} value={form ? form.adress : ''} required />
                <AvField name="company" label="company" type="text" onChange={this.handleChange} value={form ? form.company : ''} required />
                </AvForm>
            </div>

          </ModalBody>

          <ModalFooter>
            {this.state.cc === 'insert' ?
              <button className="btn btn-success" onClick={() => this.handlepost()}>
                Thêm
                  </button> : <button className="btn btn-primary" onClick={() => this.handleput()}>
                Sửa
                  </button>
            }
            <button className="btn btn-danger" onClick={() => this.handleinsert()}>Hủy</button>
          </ModalFooter>
        </Modal>

          </div>
        );
      }
    }
    export default App;
