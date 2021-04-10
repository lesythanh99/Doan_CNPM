import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar'
import CRUD from "../../services/crud";


let count = 1;

class App extends Component {
  state = {
    data: [],
    handleinsert: false,
    handleinsertquestion: false,
    form: {
      timeStart: '',
      timeFinish: '',
      status: '',
      nameTest: '',
      numOfQuestion: '',
      isEnable: 1,
      idOfUser: 0,
      passwdOfTest: '',
      limitOfNumUser: '',
      idOfTest: '',
      numQ: '',
      ques: '',
      ansA: '',
      ansB: '',
      ansC: '',
      ansD: '',
      ansCorrect: '',
      swapAns: '',
      cc: ''
    }
  }



  handleget = () => {
    axios.get(CRUD.getTests).then(response => {
      this.setState({ data: response.data.data });
      console.log(response);
    }).catch(error => {
      console.log(error.message);
    })
  }

  handlepost = async () => {
    await axios.post(CRUD.addTest, this.state.form).then(response => {
      this.handleinsert();
      this.state.form.idOfTest = response.data.data.idOfTest;
      // console.log("->" +this.state.form.idOfTest);
      // console.log(response);
      this.handleget();
      this.state.form.numQ = response.data.data.numOfQuestion;
    }).catch(error => {
      console.log(error.message);
    })

  }

  handlepostquestion = async () => {
    await axios.post(CRUD.addQuestion, this.state.form).then(response => {
      count += 1;
      console.log(count);
      //this.handleinsertquestion();
    }).catch(error => {
      console.log(error.message);
    })
  }

  handleinsert = () => {
    this.setState({ handleinsert: !this.state.handleinsert });
  }

  handleinsertquestion = () => {
    this.setState({ handleinsertquestion: !this.state.handleinsertquestion });
  }

  componentDidMount() {
    this.handleget();
  }


  handlenumquestion = () => {
    let num = this.state.form.numQ;
    console.log(num);
    if (count >= num) {
      this.handleinsertquestion();
      count = 0;
      alert('Tạo bài thi thành công!');
    } else {
      //this.handleinsertquestion();
      document.getElementById('content').value = '';
      document.getElementById('ansA').value = '';
      document.getElementById('ansB').value = '';
      document.getElementById('ansC').value = '';
      document.getElementById('ansD').value = '';
      document.getElementById('ansCorrect').value = '';
      document.getElementById('swapAns').value = '';
    }
  }
  handleChange = async e => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  render() {
    const { form } = this.state;
    return (

      <div className="App">
        <div style={{ 'marginBottom' : '30px'}}>
          <Navbar />
        </div>
        
        <button style={{ marginLeft: '600px', marginTop: '20px' }} className="btn btn-success" onClick={() => { this.setState({ form: null, cc: 'insert' }); this.handleinsert() }}>Thêm bài thi mới</button>
        <br /><br />
        <table className="table ">
          <thead>
            <tr>
              <th>Tên bài thi</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(item => {
              return (
                <tr>
                  <td>{item.nameTest}</td>
                  <td>
                    <button className="btn btn-primary" ><Link style={{color: 'white', textDecoration: 'none'}} to={`/`+`${item.idOfUser}/change-question/${item.idOfTest}`}>sửa</Link> </button>
                    
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        
        <Modal isOpen={this.state.handleinsert} style={{ maxHeight: '100%' }}>
          <ModalHeader style={{ display: 'block' }}>
            {this.state.cc === 'insert' ?
              <span>Nhập thông tin</span> :
              <span></span>
            }
            <span style={{ float: 'right' }} onClick={() => this.handleinsert()}>x</span>
          </ModalHeader>
          <ModalBody>
            <div>
              <AvForm >
                <AvField name="timeStart" label="Thời gian bắt đầu" type="datetime-local" onChange={this.handleChange} value={form ? form.timeStart : ''} required />
                <AvField name="timeFinish" label="Thời gian kết thúc" type="datetime-local" onChange={this.handleChange} value={form ? form.timeFinish : ''} required />
                <AvField name="nameTest" label="Tên bài thi" type="text" onChange={this.handleChange} value={form ? form.nameTest : ''} required />
                <AvField name="passwdOfTest" label="mật khẩu" type="text" onChange={this.handleChange} value={form ? form.passwdOfTest : ''} required />
                <AvField name="limitOfNumUser" label="giới hạn lượt làm bài" type="text" onChange={this.handleChange} value={form ? form.limitOfNumUser : ''} required />
                <AvField name="status" label="status" type="text" onChange={this.handleChange} value={form ? form.status : ''} required />
                <AvField name="idOfUser" type="hidden" onChange={this.handleChange} value={form ? form.idOfUser = 1 : ''} required />
                <AvField name="numOfQuestion" label="số câu hỏi" type="text" onChange={this.handleChange} value={form ? form.numOfQuestion : ''} required />
                <AvField name="isEnable" type="hidden" onChange={this.handleChange} value={form ? form.isEnable = '1' : ''} required />
              </AvForm>

            </div>

          </ModalBody>

          <ModalFooter>
            {this.state.cc === 'insert' ?
              <button className="btn btn-success" onClick={() => { this.handlepost(); this.handleinsertquestion() }}>
                Thêm
                  </button> : <button className="btn btn-primary">

              </button>
            }
            <button className="btn btn-danger" onClick={() => this.handleinsert()}>Hủy</button>
          </ModalFooter>
        </Modal>


        <Modal isOpen={this.state.handleinsertquestion}>
          <ModalHeader style={{ display: 'block' }}>
            {this.state.cc === 'insert' ?
              <span>Nhập thông tin</span> :
              <span></span>
            }
            <span style={{ float: 'right' }} onClick={() => this.handleinsertquestion()}>x</span>
          </ModalHeader>
          <ModalBody>

            <div>
              <AvForm >
                <AvField name="idOfTest" type="hidden" onChange={this.handleChange} value={form ? form.idOfTest = form.idOfTest : ''} required />
                <AvField name="content" id="content" label="Nội dung câu hỏi" type="text" onChange={this.handleChange} value={form ? form.ques : ''} required />
                <AvField name="ansA" id="ansA" label="Đáp án A" type="text" onChange={this.handleChange} value={form ? form.ansA : ''} required />
                <AvField name="ansB" id="ansB" label="Đáp án B" type="text" onChange={this.handleChange} value={form ? form.ansB : ''} required />
                <AvField name="ansC" id="ansC" label="Đáp án C" type="text" onChange={this.handleChange} value={form ? form.ansC : ''} required />
                <AvField name="ansD" id="ansD" label="Đáp án D" type="text" onChange={this.handleChange} value={form ? form.ansD : ''} required />
                <AvField name="ansCorrect" id="ansCorrect" label="Đáp án đúng" type="text" onChange={this.handleChange} value={form ? form.ansCorrect : ''} required />
                <AvField name="swapAns" id="swapAns" label="Xáo đáp án" type="text" onChange={this.handleChange} value={form ? form.swapAns : ''} required />
              </AvForm>
            </div>

          </ModalBody>

          <ModalFooter>
            {this.state.cc === 'insert' ?
              <button className="btn btn-success" onClick={() => { this.handlepostquestion(); this.handlenumquestion() }}>
                Next
                  </button> : <button className="btn btn-primary">
                Preview
                  </button>
            }
            <button className="btn btn-danger" onClick={() => this.handleinsertquestion()}>Hủy</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default App;