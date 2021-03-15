import HttpRequest from "./http-common";
const getQuestion = async () =>{
    return await HttpRequest.get("http://192.168.1.7:5000/play");
}
export default {getQuestion};