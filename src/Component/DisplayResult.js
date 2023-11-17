import React, {useEffect, useState} from "react";
import { Card, CardText, CardBody, ButtonGroup, Button } from 'reactstrap';

const DisplayResult = ({quesNo, quests, ansStatus}) => {
    const [ans, setAns] = useState(null);
    const choices = quests.choices;
    useEffect(()=> {
        setAns(quests.answer);
    }, [quests]);

    useEffect(()=> {
        setAns(ansStatus[quesNo]);
    }, [ansStatus]);

    return (
            <>
                <Card>
                    <CardBody className="button-group-text">
                        <CardText >Qno {quesNo}. {quests.ques}</CardText>

                        1. {choices["1"]}  <br/>
                        2. {choices["2"]} <br/>
                        3. {choices["3"]} <br/>
                        4. {choices["4"]} <br/>

                        {
                            ans == true ? 
                            (<>
                                Correct Answer {quests.answer} ✅
                            </>) : 
                            (<>
                                Wrong Answer ❌ <br />
                                correct answer is {quests.answer}
                            </>)
                        }

                    </CardBody>
                </Card>
            </>
    )
}

export default DisplayResult;