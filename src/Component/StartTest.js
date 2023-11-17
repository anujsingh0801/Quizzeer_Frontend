import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { base_url } from "./Url";
import Question from "./Question";
import { Button } from "reactstrap";
import { useNavigate  } from "react-router-dom";

const StartTest = () => {

    const navigate = useNavigate ();
    const location = useLocation();
    const dataFromPreviousComponent = location.state.data;
    const [subject, setSubject] = useState({});
    const [count, setCount] = useState(0);
    
    const [status, setStatus] = useState({});

    useEffect(()=>{
        axios
        .get(base_url + "/getSubject", {
            params : {
                subName:dataFromPreviousComponent,
                count:10,
          }
        })  
        .then((response)=>{
            setSubject(response.data)
            console.log(subject)
         })
        .catch(error => {
            console.log(error)
        });
    }, [dataFromPreviousComponent])

    useEffect(() => {
        subject.question && subject.question.map((question, index) => (
            setStatus(prevStatus => ({ ...prevStatus, [index+1]: false }))
        ));
    }, [subject]);

    const submitTest = () => {
        let correct = 0;
        let total = 0;
        for(const i in status) {
            total += 1;
            if(status[i] == true)
                correct += 1;
        }

        const dataToSend = {
            status : status,
            subject : subject,
            correctAns : correct,
            totalQues : total
        };

        // alert("Exam Completed - Score : " + correct + "/" + total);
        navigate("/result", {replace : true,  state: { data: dataToSend } });
    }

    const handleCallback = (ind, childData) => {
        const childstatus = {...status};
        childstatus[ind] = childData;
        setStatus(childstatus);
    }

    // useEffect(()=> {
    //     console.log(status);
    // }, [status])

    return (
        <>
            Starting Test for {dataFromPreviousComponent}
            <br />
            {subject.question &&
                subject.question.map((question, index) => (
                    <Question key={index} quesNo={index} quests={question} parCallBack={handleCallback} />
                ))}

            <Button color="success" className="button-group-spacing" onClick={submitTest}>End Test</Button>
        </>
    )
}

export default StartTest;