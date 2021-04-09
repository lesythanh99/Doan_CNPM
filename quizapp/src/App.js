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
import makeTest from './components/pages/createTest';
import ScoreBoard from './components/pages/ScoreBoard';
import changeQ from './components/pages/changeQuestion';

function App() {
  return (
    <div>
      
    <Router>
        
        <Route path="/" exact component = {Home}/>
        {/* <Route path="/:idofuser" exact component = {Home}/> */}
        <Route path="/:idofuser/choose-test" exact component = {ChooseTest}/>
        <Route path="/:idofuser/play-test/:idoftest" component = {PlayTest}/>
        <Route path = '/login' component = {Login} />
        <Route path = '/:idofuser/createTest' component = {makeTest} />
        <Route path= '/:idofuser/scoreboard' component = {ScoreBoard}/>
        <Route path="/:idofuser/change-question/:idoftest" component={changeQ} />
    </Router>
    </div>
  );
}

export default App;
