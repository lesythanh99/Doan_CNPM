import React from 'react';
import CRUD from '../../services/crud';
import './test.css';
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
    const submitTest = () => {
        console.log(yourChoose);
        var point = 0;
        listItems.map((item, index) => {
            if (item.ansCorrect === yourChoose[index]) point++;
        });
        console.log(point);
    }
    const isCAT = (index, ans) => {
        if (yourChoose[index] === ans) return 'success';
        return 'primary'
    }
    React.useEffect(() => {
        notifyData();
    }, []);
    return (
        <Container>
            <Row>
                <Col>
                    {
                        listItems?.map((item, index) => (
                            <div className={isActive(index)}>
                                <div>
                                    <h2>{"Question " + (index + 1) + " : " + item.ques}</h2>
                                    <Button color = {isCAT(index,item.ansA)} onClick={() => isChoose(index, item.ansA)} size='lg' block>{"A. " + item.ansA}</Button>{" "}
                                    <Button color = {isCAT(index,item.ansB)} onClick={() => isChoose(index, item.ansB)} size='lg' block>{"B. " + item.ansB}</Button>{" "}
                                    <Button color = {isCAT(index,item.ansC)} onClick={() => isChoose(index, item.ansC)} size='lg' block>{"C. " + item.ansC}</Button>{" "}
                                    <Button color = {isCAT(index,item.ansD)} onClick={() => isChoose(index, item.ansD)} size='lg' block>{"D. " + item.ansD}</Button>{" "}
                                </div>
                                <div>
                                    <br />
                                    <Button onClick={() => goPre(index)}>Pre</Button>{" "}
                                    <span>{index + 1}</span>{" "}
                                    <Button onClick={() => goNext(index)} >Next</Button>
                                </div>
                            </div>
                        ))
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => submitTest()}>Submit</Button>
                </Col>
            </Row>
        </Container>
    );
}
export default Test;