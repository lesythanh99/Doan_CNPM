import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';
import quizInstructions from './components/Quiz/intructions';
import Play from './components/Quiz/Play';
import QuizSummary from './components/Quiz/QuizSummary';
import Login from './components/pages/Login.js';
import Test from './components/Etest/test';
function App() {
  return (
    <Router>
        <Route path="/" exact component = {Home}/>
        <Route path="/test" eact component = {Test}/>
        <Route path="/play/huongdan" component = {quizInstructions}/>
        <Route path="/play/quiz" component = {Play}/>
        <Route path="/play/quizSummary" component = {QuizSummary}/>
        <Route path = '/login' component = {Login} />
    </Router>
  );
}

export default App;
