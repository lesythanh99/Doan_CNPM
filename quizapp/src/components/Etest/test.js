import React,{Component,Fragment} from 'react';
import {Helmet} from 'react-helmet';
import CRUD from '../../services/crud';
import './test.scss';
import { Container, Row, Col, Button } from 'reactstrap';
function Test() {
    const [listItems, setListItems] = React.useState([]);
    const [activeNow, setActiveNow] = React.useState(0);
    const [yourChoose, setYourChoose] = React.useState({
        '0': '',
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': '',
        '7': '',
        '8': '',
        '9': '',
    });
    const notifyData = () => {
        CRUD.getQuestion().then((res) => {
            setListItems(res.data.data);
            console.log(listItems);
        });
    }
    const isActive = (index) => {
        if (index === activeNow) {
            return 'ques activee';
        }
        return 'ques';
    }
    const goPre = (index) => {
        if (index > 0) {
            setActiveNow(index - 1);
        }
        return;
    }
    const goNext = (index) => {
        if (index < listItems.length - 1) setActiveNow(index + 1);
        return;
    }
    const isChoose = (index, choose) => {
        var data = { ...yourChoose };
        data[index] = choose;
        setYourChoose(data);
    }
    // CHẤM ĐIỂM Ở ĐÂY , SỬ DỤNG PROPS NẾU MUỐN CHUYỂN ĐIỂM QUA TRANG KHÁC
    const submitTest = () => {
        console.log(yourChoose);
        var point = 0;
        listItems.map((item, index) => {
            if (item.ansCorrect === yourChoose[index]) point++;
        });
        alert("Point : " + point);
    }
    const isCAT = (index, ans) => {
        if (yourChoose[index] === ans) return 'option answer active';
        return 'option answer'
    }
    React.useEffect(() => {
        notifyData();
    }, []);
    return (
                <div>

                    {
                        listItems?.map((item, index) => (
                            <div>
                <Fragment>
                    <Helmet><title>Trắc nghiệm</title></Helmet>
                    <div className="questions" className={isActive(index)}>
                        <div className="timer-container">
                            <p>
                                <span className="left" style={{float:'left'}}><span className="mdi mdi-set-center mdi-24px lifeline-icon">{index + 1}/10</span></span>
                                <span className="right">2:15 <span className="mdi mdi-clock-outline mdi-24px"></span></span>
                            </p>
                        </div>
                        <h5>{"Question " + (index + 1) + " : " + item.ques}</h5>
                        <div className="options-container">
                            <p className = {isCAT(index,item.ansA)}  onClick={() => isChoose(index, item.ansA)}  >{"A. " + item.ansA} </p>
                            <p className = {isCAT(index,item.ansB)}  onClick={() => isChoose(index, item.ansB)}  >{"B. " + item.ansB} </p>
                        </div>
                        <div className="options-container">
                            <p className = {isCAT(index,item.ansC)}  onClick={() => isChoose(index, item.ansC)}  >{"C. " + item.ansC} </p>
                            <p className = {isCAT(index,item.ansD)}  onClick={() => isChoose(index, item.ansD)}  >{"D. " + item.ansD} </p>
                        </div>
                        <div className="button-container">
                            <button  id="previous-button" onClick={() => goPre(index)}>Previous</button>
                            <button  id="next-button" onClick={() => goNext(index)}>Next</button>
                        </div>
                        
                    </div>
                </Fragment>
            </div>
                        ))
                    }
                    <Button onClick={() => submitTest()}>Submit</Button>

                    </div>
    );
}
export default Test;