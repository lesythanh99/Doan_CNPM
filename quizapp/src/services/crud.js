import { DataUsageOutlined } from "@material-ui/icons";
import HttpRequest from "./http-common";
const getQuestion = (data) => {
    return HttpRequest.post("http://localhost:5000/play-test", data);
}
const getScore = (data) => {
    return HttpRequest.post("http://localhost:5000/get-score", data);
}
const getTest = async () => {
    return  await  HttpRequest.get("http://localhost:5000/get-test");
}
const getTestById = (data) => {
    return HttpRequest.post("http://localhost:5000/get-test-by-id", data);
}
const getTestByIdTest = async (data) => {
    return  await HttpRequest.post("http://localhost:5000/get-test-by-id-test", data);
}
const getScoreOfMe = (data) => {
    return HttpRequest.post("http://localhost:5000/score-of-me", data);
}
const getScoreOfTest = (data) => {
    return HttpRequest.post("http://localhost:5000/score-of-test", data);
}
const login = (data) => {
    return HttpRequest.post("http://localhost:5000/login", data);
}


const register = (data) => {
    return HttpRequest.post("http://localhost:5000/register", data);
}
const searchTest = (data) => {
    return HttpRequest.post("http://localhost:5000/get-test-by-name", data);
}
const getInfoAccountById = (data) => {
    return HttpRequest.post("http://localhost:5000/get-account-by-id", data);
}



const addTest = "http://localhost:5000/create-test";
const getTests = "http://localhost:5000/get-test";
const getTestId = "http://localhost:5000/get-test-by-id";


const getQuestions = "http://localhost:5000/play-test";
const deleteQuestion = "http://localhost:5000/delete-question";
const updateQuestion = "http://localhost:5000/update-question";
const addQuestion = "http://localhost:5000/create-question";

const getUser = "http://localhost:5000/get-account-by-id";
const updateUser = "http://localhost:5000/update-info";


export default {getTestId, getTestByIdTest, getUser, updateUser, register, getInfoAccountById, searchTest , addQuestion, updateQuestion, deleteQuestion, getQuestions, getQuestion, getScore, getTest, getTestById, getScoreOfMe, getScoreOfTest, login, addTest, getTests };
