import * as React from "react";
import CRUD from '../services/crud';
import {
    TextField,
    Button
  } from "@material-ui/core";
function Search (props){
    const {setData} = props;
    const [postData, setPostData] = React.useState([]);

    var temp = {...postData};

    const onChangeData = (e) =>{
        e.preventDefault();
        
        temp['nameTest'] = e.target.value;
        setPostData(temp);
        console.log(temp);

    }
    const handleSearch = (e) => {
        if(e.key == 'Enter'){
            if(temp['nameTest'] == ""){
                CRUD.getTest().then(res => {
                    setData(res.data.data);
                });
            }else{
                CRUD.searchTest(postData).then (res => {
                if(res.data.data.length > 0){
                    console.log(res.data.data);
                    setData(res.data.data);
                }else alert("Không tìm thấy kết quả");
            });
            }

            
        }
    } 
    return (
        <>
            <TextField id="outlined-search" label="Search field" type="search" onChange = {onChangeData} variant="outlined" fullWidth onKeyPress = {handleSearch} />
        </>
    );
}
export default Search;