import { DataUsageOutlined } from "@material-ui/icons";
import HttpRequest from "./http-common";
const getQuestion = (data) => {
<<<<<<< HEAD
    return HttpRequest.post("http://192.168.1.17:5000/play-test", data);
}
const getScore = (data) => {
    return HttpRequest.post("http://192.168.1.17:5000/get-score", data);
}
const getTest = async () => {
    return HttpRequest.get("http://192.168.1.17:5000/get-test");
}
const getTestById = (data) => {
    return HttpRequest.post("http://192.168.1.17:5000/get-test-by-id", data);
}
const getScoreOfMe = (data) => {
    return HttpRequest.post("http://192.168.1.17:5000/score-of-me", data);
}
const getScoreOfTest = (data) => {
    return HttpRequest.post("http://192.168.1.17:5000/score-of-test", data);
}
const login = (data) => {
    return HttpRequest.post("http://192.168.1.17:5000/login", data);
}


=======
    return HttpRequest.post("http://192.168.1.4:5000/play-test", data);
}
const getScore = (data) => {
    return HttpRequest.post("http://192.168.1.4:5000/get-score", data);
}
const getTest = async () => {
    return HttpRequest.get("http://192.168.1.4:5000/get-test");
}
const getTestById = (data) => {
    return HttpRequest.post("http://192.168.1.4:5000/get-test-by-id", data);
}
const getTestByIdTest = (data) => {
    return HttpRequest.post("http://192.168.1.4:5000/get-test-by-id-test", data);
}
const getScoreOfMe = (data) => {
    return HttpRequest.post("http://192.168.1.4:5000/score-of-me", data);
}
const getScoreOfTest = (data) => {
    return HttpRequest.post("http://192.168.1.4:5000/score-of-test", data);
}
const login = (data) => {
    return HttpRequest.post("http://192.168.1.4:5000/login", data);
}
>>>>>>> 86e97ea4b4bafc3d2ba9ff59bb4f0de59f84da23
const register = (data) => {
    return HttpRequest.post("http://192.168.1.4:5000/register", data);
}
const searchTest = (data) => {
<<<<<<< HEAD
    return HttpRequest.post("http://192.168.1.17:5000/get-test-by-name", data);
}
const getInfoAccountById = (data) => {
    return HttpRequest.post("http://192.168.1.17:5000/get-account-by-id", data);
=======
    return HttpRequest.post("http://192.168.1.4:5000/get-test-by-name", data);
}
const getInfoAccountById = (data) => {
    return HttpRequest.post("http://192.168.1.4:5000/get-account-by-id", data);
>>>>>>> 86e97ea4b4bafc3d2ba9ff59bb4f0de59f84da23
}



<<<<<<< HEAD
const addTest = "http://192.168.1.17:5000/create-test";
const getTests = "http://192.168.1.17:5000/get-test";


const getQuestions = "http://192.168.1.17:5000/play-test";
const deleteQuestion = "http://192.168.1.17:5000/delete-question";
const updateQuestion = "http://192.168.1.17:5000/update-question";
const addQuestion = "http://192.168.1.17:5000/create-question";

const getUser = "http://192.168.1.17:5000/get-account-by-id";
const updateUser = "http://192.168.1.17:5000/update-info";
=======
const addTest = "http://192.168.1.4:5000/create-test";
const getTests = "http://192.168.1.4:5000/get-test";


const getQuestions = "http://192.168.1.4:5000/play-test";
const deleteQuestion = "http://192.168.1.4:5000/delete-question";
const updateQuestion = "http://192.168.1.4:5000/update-question";
const addQuestion = "http://192.168.1.4:5000/create-question";

const getUser = "http://192.168.1.4:5000/get-account-by-id";
const updateUser = "http://192.168.1.4:5000/update-info";
>>>>>>> 86e97ea4b4bafc3d2ba9ff59bb4f0de59f84da23


export default {getTestByIdTest, getUser, updateUser, register, getInfoAccountById, searchTest , addQuestion, updateQuestion, deleteQuestion, getQuestions, getQuestion, getScore, getTest, getTestById, getScoreOfMe, getScoreOfTest, login, addTest, getTests };
