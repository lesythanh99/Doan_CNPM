import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';
import quizInstructions from './components/Quiz/intructions';
import Play from './components/Quiz/Play';
import QuizSummary from './components/Quiz/QuizSummary';


function App() {
  return (
    <Router>
        <Route path="/" exact component = {Home}/>
        <Route path="/play/huongdan" component = {quizInstructions}/>
        <Route path="/play/quiz" component = {Play}/>
        <Route path="/play/quizSummary" component = {QuizSummary}/>
    </Router>
  );
}

export default App;
