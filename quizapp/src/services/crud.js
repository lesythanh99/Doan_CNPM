import { DataUsageOutlined } from "@material-ui/icons";
import HttpRequest from "./http-common";
const getQuestion = (data) => {
    return HttpRequest.post("http://192.168.1.4:5000/play-test", data);
}
const getScore = (data) => {
    return HttpRequest.post("http://192.168.1.4:5000/get-score",data);
}
const getTest = async () => {
    return HttpRequest.get("http://192.168.1.4:5000/get-test");
}
const getTestById = (data) => {
    return HttpRequest.post("http://192.168.1.4:5000/get-test-by-id", data);
}
const getScoreOfMe = (data) => {
    return HttpRequest.post("http://192.168.1.4:5000/score-of-me", data);
}
const getScoreOfTest = (data) => {
    return HttpRequest.post("http://192.168.1.4:5000/score-of-test", data);
}
const login = (data) => {
    return HttpRequest.post("hthttp://192.168.1.4:5000/login",data);
}
const deleteQuestion = (data) => {
    return HttpRequest.post("http://192.168.1.4:5000/delete-question", data);
}
const updateQuestion = (data) => {
    return HttpRequest.post("http://192.168.1.4:5000/update-question", data);
}
const addQuestion = (data) => {
    return HttpRequest.post("hthttp://192.168.1.4:5000/create-question",data);
}

const urladd = "http://192.168.1.4:5000/create-test";
const urladdques = "http://192.168.1.4:5000/create-question";
const urlgettest = "http://192.168.1.4:5000/get-test";

export default { deleteQuestion, updateQuestion, addQuestion, getQuestion, getScore, getTest, getTestById, getScoreOfMe, getScoreOfTest, login , urladd, urladdques, urlgettest};