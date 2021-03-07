import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Intructions from './components/Quiz/intructions';
import Play from './components/Quiz/Play';


function App() {
  return (
    <Router>
        <Route path="/" exact component = {Home}/>
        <Route path="/play/huongdan" component = {Intructions}/>
        <Route path="/play/quiz" component = {Play}/>
    </Router>
  );
}

export default App;
