import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
// img intructions
// import answer from '../../assets/img/answer.png';
// import fiftyfifty from '../../assets/img/fiftyfifty.png';
// import hints from '../../assets/img/hints.png';
// import options from '../../assets/img/options.png';
import quiz from '../../assets/img/quiz.png'
const Intructions = () => (
    <Fragment>
        <Helmet><title>Hướng dẫn</title></Helmet>
        <div className="intructions container">
            <h1>Làm thế nào để chơi game ?</h1>
            <p>Ensure you read this guide from start tho finish.</p>
            <ul className="browser-default" id="main-list">
                <li>The game has a duration of 15 minutes and ends as soon as your time elapses.</li>
                <li>Each game consists of 15 questions.</li>
                <li>
                    Every question contains 4 options.
                    <img src={quiz} alt="Quiz app options example" height="400px" width="900px"></img>
                </li>
                <li>
                    Select the option which best answers the question by clicking (or selecting) it.
                    <img src={quiz} alt="Quiz app options example" height="400px" width="900px" ></img>
                </li>
                <li>
                    Each game has 2 lifelines namely:
                    <ul id="sublist">
                        <li>2 50 50 chances</li>
                        <li>5 hints</li>
                    </ul>
                </li>
                <li>
                    Selecting a 50-50 lifeline by clicking the icon
                    <span className="mdi mdi-set-center mdi-24px liftline-icon"></span>
                    will remove 2 wrong answers, leaving the correct answer and one  wrong answer
                    <img src={quiz} alt="Quiz app options example" height="400px" width="900px"></img>
                </li>
                <li>
                    Using a hint by clicking the icon
                    <span className="mdi mdi-lightbulb-on mdi-24px liftline-icon"></span>
                    will remove one wrong answers leaving two wrong  answers and one correct answer. You can use as many hints as possible on a single question.
                    <img src={quiz} alt="Quiz app options example" height="400px" width="900px"></img>
                </li>
                <li>Feel free to quit(or retire from) the game at any time. in that case your score will be revealed afterwards.</li>
                <li>The timer starts as soon as the game loads</li>
                <li>Let's do this if you think you've got what it takes?</li>
            </ul>
            <div>
                <span className="left"><Link to="/">No take me back</Link></span>
                <span className="right"><Link to="/play/quiz">Okey, Let's do this</Link></span>
            </div>
        </div>
    </Fragment>
);
export default Intructions;
