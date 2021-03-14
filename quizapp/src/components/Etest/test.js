import React from 'react';
import CRUD from '../../services/crud';
import './test.css';
import { Container, Row, Col, Button } from 'reactstrap';
function Test() {
    const [listItems, setListItems] = React.useState([]);
    const [activeNow, setActiveNow] = React.useState(0);
    const notifyData = () => {
        CRUD.getQuestion().then((res) => {
            setListItems(res.data.data);
            console.log(listItems);
        });
    }
    const isActive = (index) => {
        if (index === activeNow) {
            return 'ques active';
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
                                    <div>
                                        <Button size='lg' block>{"A. " + item.ansA}</Button>
                                    </div>
                                    <div>
                                        <Button size='lg' block>{"B. " + item.ansB}</Button>
                                    </div>
                                    <div>
                                        <Button size='lg' block>{"C. " + item.ansC}</Button>
                                    </div>
                                    <div>
                                        <Button size='lg' block>{"D. " + item.ansD}</Button>
                                    </div>

                                </div>
                                <div>
                                    <Button onClick={() => goPre(index)}>Pre</Button>
                                    <span>{index + 1}</span>
                                    <Button onClick={() => goNext(index)} >Next</Button>
                                </div>
                            </div>
                        ))
                    }
                </Col>
            </Row>
        </Container>
    );
}
export default Test;