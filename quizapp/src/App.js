import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';
import quizInstructions from './components/Quiz/intructions';
import Play from './components/Quiz/Play';
import QuizSummary from './components/Quiz/QuizSummary';
import Login from './components/pages/Login.js';
import Test from './components/Etest/test';
import ChooseTest from './components/Etest/choosetest';
import PlayTest from './components/Etest/playtest';

function App() {
  return (
    <div>
      
    <Router>
        
        <Route path="/" exact component = {Home}/>
        <Route path="/:idofuser" exact component = {Home}/>
        <Route path="/:idofuser/choose-test" eact component = {ChooseTest}/>
        <Route path="/:idofuser/play-test/:idoftest" component = {PlayTest}/>
        <Route path = '/login' component = {Login} />
    </Router>
    </div>
  );
}

export default App;
