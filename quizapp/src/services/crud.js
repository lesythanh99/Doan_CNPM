import HttpRequest from "./http-common";
const getQuestion = async () =>{
    return await HttpRequest.get("http://localhost:5000/play");
}
export default {getQuestion};