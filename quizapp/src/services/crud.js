import { DataUsageOutlined } from "@material-ui/icons";
import HttpRequest from "./http-common";
const getQuestion = (data) =>{
    return  HttpRequest.post("http://192.168.1.17:5000/play-test",data);
}
const getScore = (data) => {
    return HttpRequest.post("http://192.168.1.17:5000/get-score",data);
}
const getTest = async () =>{
    return HttpRequest.get("http://192.168.1.17:5000/get-test");
}
export default {getQuestion, getScore,getTest};