import HttpRequest from "./http-common";
const getQuestion = (data) => {
    return HttpRequest.post("http://localhost:5000/play-test", data);
}
const getScore = () => {
    return HttpRequest.post("http://localhost:5000/get-score");
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
export default { getQuestion, getScore, getTest, getTestById, getScoreOfMe, getScoreOfTest };