import { DataUsageOutlined } from "@material-ui/icons";
import HttpRequest from "./http-common";
const getQuestion = (data) => {
    return HttpRequest.post("http://localhost:5000/play-test", data);
}
const getScore = (data) => {
    return HttpRequest.post("http://localhost:5000/get-score",data);
}
const getTest = async () => {
    return HttpRequest.get("http://localhost:5000/get-test");
}
const getTestById = (data) => {
    return HttpRequest.post("http://localhost:5000/get-test-by-id", data);
}
const getScoreOfMe = (data) => {
    return HttpRequest.post("http://localhost:5000/score-of-me", data);
}
const getScoreOfTest = (data) => {
    return HttpRequest.post("http://localhost:5000/score-of-test", data);
}
const login = (data) => {
    return HttpRequest.post("http://localhost:5000/login",data);
}


const addTest = "http://localhost:5000/create-test";
const getTests = "http://localhost:5000/get-test";

const addTest = "http://localhost:5000/create-test";
const getTests = "http://localhost:5000/get-test";

const getQuestions="http://localhost:5000/play-test";
const deleteQuestion = "http://localhost:5000/delete-question";
const updateQuestion = "http://localhost:5000/update-question";
const addQuestion = "http://localhost:5000/create-question";

const getQuestions="http://localhost:5000/play-test";
const deleteQuestion = "http://localhost:5000/delete-question";
const updateQuestion = "http://localhost:5000/update-question";
const addQuestion = "http://localhost:5000/create-question";


export default {addQuestion, updateQuestion, deleteQuestion, getQuestions, getQuestion, getScore, getTest, getTestById, getScoreOfMe, getScoreOfTest, login , addTest, getTests};
