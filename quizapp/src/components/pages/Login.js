import React, { useState } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import CRUD from "../../services/crud";


function Login(props) {
  const [postData, setPostData] = React.useState({
    email: "",
    password: "",

  });

  let history = useHistory();

  function handleChangeEmail(e) {
    e.preventDefault();
    setPostData({ ...postData, email: e.target.value }); //Only change customer name in postData
  }
  function handleChangePass(e) {
    e.preventDefault();
    setPostData({ ...postData, password: e.target.value }); //Only change contact name in postData
  }

  function handleOnClickSubmit(e) {
    e.preventDefault();
    CRUD.login(postData)
      .then((response) => {
        if(response.data.data == 'Fail'){
          alert('Đăng nhập thất bại');
        }else{
          history.push("/");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
    console.log("CustomerName : " + JSON.stringify(postData));

  }


  const [form, setForm] = useState(0);

  return (
    <div className="App">
      <h1>Trang đăng nhập</h1>
      <div className="col-sm-6 offset-sm-3">
        <AvForm >
          <AvField name="email" label="email" type="text" onChange={handleChangeEmail} value={postData.email} required />
          <AvField name="password" label="password" type="password" onChange={handleChangePass} value={postData.password} required />
        </AvForm>
        <button className="btn btn-success" onClick={handleOnClickSubmit}>Đăng nhập
            </button>
      </div>
    </div>
  );

}
export default Login;

// function Login() {
//   const state = {
//       data: [],
//       form: {
//         email: '',
//         password: '',
//         }
//     }
    // const handlepost = async () => {
    //     await axios.post(url, this.state.form).then(response => {
    //       //console.log(response.data.data);
    //         if(response.data.data == 'Fail'){
    //             alert('Đăng nhập thất bại');
    //         }else{
    //           alert('trang chủ');
    //         }
    //     }).catch(error => {
    //       console.log(error.message);
    //     })

    //   }

    // const [email, setEmail]= useState("");
    // const [pass, setPass]= useState("");
    // const history = useHistory();
    // useEffect(() => {
    //     if(localStorage.getItem('user-info')){
    //         history.push("/add");
    //     }
    // }, [])
    // function Login(){
    //     console.warn(email,pass);
    //     let item={email,pass};
    //     let rs = await fetch("http://192.168.1.4:5000/get-account",{
    //         method: "POST",
    //         headers:{
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body:JSON.stringify(item)
    //     });
    //     rs = await rs.json();
    //     localStorage.setItem("user-info",JSON.stringify(rs));
    //     history.push("add")
    // }


