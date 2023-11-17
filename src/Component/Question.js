import React, { useEffect, useState } from "react";
import { Card, CardText, CardBody, ButtonGroup, Button } from 'reactstrap';


const Question = ({quesNo, quests, parCallBack}) => {

    const [rSelected, setRSelected] = useState(null);
    const [ansStatus, setAnsStatus] = useState(false);
    const [ans, setAns] = useState(null);
    const choices = quests.choices;
   
    const onRadioBtnClick = (rSelected) => {
        setRSelected(rSelected)
    }

    useEffect(()=> {
        setAns(quests.answer);
    }, [])

    useEffect(()=> {
       console.log(ans + " " + rSelected);
       if(ans !== null && rSelected !== null && ans == rSelected)
            setAnsStatus(true);
        else 
            setAnsStatus(false);
    }, [rSelected, ans])

    useEffect(()=> {
       console.log(ansStatus);
       parCallBack(quesNo+1, ansStatus);
     }, [ansStatus])

    return (
        <>
           <Card>
                <CardBody className="button-group-text">
                    <CardText >Qno {quesNo+1}. {quests.ques}</CardText>

                        <Button color={rSelected === 1 ? 'success' : 'primary'} onClick={() => onRadioBtnClick(1)} ></Button>{choices["1"]}  <br/>
                        <Button color={rSelected === 2 ? 'success' : 'primary'} onClick={() => onRadioBtnClick(2)} ></Button>{choices["2"]} <br/>
                        <Button color={rSelected === 3 ? 'success' : 'primary'} onClick={() => onRadioBtnClick(3)} ></Button>{choices["3"]} <br/>
                        <Button color={rSelected === 4 ? 'success' : 'primary'} onClick={() => onRadioBtnClick(4)} ></Button>{choices["4"]} <br/>
                   
                </CardBody>
           </Card>
        </>
    )
}

export default Question