import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from 'react-router-dom';
import Question from "./Question";
import DisplayResult from "./DisplayResult"

const Result = ()=> {
    const location = useLocation();
    const dataFromPreviousComponent = location.state.data;
    const [subject, setSubject] = useState({});
    const [status, setStatus] = useState({});
    const [correctAns, setCorrectAns] = useState(0);
    const [totalQues, setTotalQues] = useState(0);
    useEffect(()=>{
        setStatus(dataFromPreviousComponent.status);
        setSubject(dataFromPreviousComponent.subject);
        setCorrectAns(dataFromPreviousComponent.correctAns);
        setTotalQues(dataFromPreviousComponent.totalQues);
    }, [dataFromPreviousComponent])

    return (
        <div>
            <h3 className="score-display"> SCORE : {correctAns}/{totalQues}</h3>
        {
            subject.question &&
            subject.question.map((question, index) => (
                <DisplayResult key={index} quesNo={index+1} quests={question} ansStatus={status} />
            ))
        }
        </div>
    )
}

export default Result;