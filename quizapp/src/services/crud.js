import HttpRequest from "./http-common";
const getQuestion = async () =>{
    return await HttpRequest.get("http://localhost:5000/play");
}
const getScore = (listAns) => {
    return HttpRequest.post("http://localhost:5000/getscore", listAns);
}
export default {getQuestion, getScore};