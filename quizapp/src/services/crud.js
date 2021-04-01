import HttpRequest from "./http-common";
const getQuestion = async () =>{
    return await HttpRequest.get("http://192.168.1.17:5000/play");
}
export default {getQuestion};