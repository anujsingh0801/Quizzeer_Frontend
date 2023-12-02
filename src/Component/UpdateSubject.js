import React, { useEffect, useState } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardBody } from 'reactstrap';
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";
import {base_url} from "./Url"

const UpdateSubject = () => {

    const [addQues, setAddQues] = useState(false);

    const [allSubs, setAllSubs] = useState([]);

    const [cSelected, setcSelected] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const getSubApi = base_url + "/getAllSubject";
            try {
                const response = await axios.get(getSubApi);
                setAllSubs(response.data.subjects);
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchData(); // Call the async function immediately
    
    }, []);

    const [formData, setFormData] = useState({
        subject: 'Java',
        ques: '',
        "1": '',
        "2": '',
        "3": '',
        "4": '',
        correctAns: ''
    });

    const handleAddQues = () => {
    setAddQues(true);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleForm = async () => {
        // console.log("Form Data:", formData);

        if(formData.ques === '')
            return;

        const body = {
            name: formData.subject,
            question: [
                {
                    ques: formData.ques,
                    choices: {
                        "1": formData["1"],
                        "2": formData["2"],
                        "3": formData["3"], 
                        "4": formData["4"],
                    },
                    answer: formData.correctAns
                }
            ]
        }
        const postUrl = base_url + "/addQuestion";
        try {
            console.log(body);
            const response = await axios.post( postUrl ,body )
            toast.success("Question Added Successfully!!")
            setFormData({
                subject: 'Java',
                ques: '',
                "1": '',
                "2": '',
                "3": '',
                "4": '',
                correctAns: ''
            });
        } catch (error) {
            toast.error("Something went wrong!");
        }

    }

    const onCheckboxBtnClick = () => {
        
        if (cSelected) {
            setcSelected(false);
        } else {
            setcSelected(true);
        }
      }

    return (
        <Form className="button-group-text">
            <ToastContainer/>
            <FormGroup>
                <input type="checkbox" onClick={onCheckboxBtnClick} />
                <Label for="subjectSelect">Add New Subject</Label>
                {
                    cSelected 
                    ?
                        <Input type="textarea" name="subject" id="subjectSelect" value={formData.subject} onChange={handleChange} />
                    : 
                        <Input type="select" name="subject" id="subjectSelect" value={formData.subject} onChange={handleChange}>
                        {
                            allSubs && allSubs.map((sub, index) => (
                                <option>{sub.name}</option>
                            ))
                        }
                        </Input>
                }
            </FormGroup>

            <FormGroup>
                <Button color="primary" onClick={handleAddQues}> + Add Question</Button>
            </FormGroup>

            {
                addQues == true ? 
                <Card>
                    <CardBody>
                    <FormGroup>
                    <Label for="newQues" sm={2}>Ques : </Label>
                    <Col sm={10}>
                        <Input type="textarea" name="ques" id="newQues" value={formData.ques} onChange={handleChange} />
                    </Col>
                    <Label for="Ans1" sm={2}>Option 1 : </Label>
                    <Col sm={6}>
                        <Input type="textarea" name="1" id="Ans1" value={formData["1"]} onChange={handleChange} />
                    </Col>
                    <Label for="Ans2" sm={2}>Option 2 : </Label>
                    <Col sm={6}>
                        <Input type="textarea" name="2" id="Ans2" value={formData["2"]} onChange={handleChange} />
                    </Col>
                    <Label for="Ans3" sm={2}>Option 3 : </Label>
                    <Col sm={6}>
                        <Input type="textarea" name="3" id="Ans3" value={formData["3"]} onChange={handleChange} />
                    </Col>
                    <Label for="Ans4" sm={2}>Option 4 : </Label>
                    <Col sm={6}>
                        <Input type="textarea" name="4" id="Ans4"  value={formData["4"]} onChange={handleChange} />
                    </Col>
                    <Label for="correctAns" sm={2}>Correct Ans : </Label>
                    <Col sm={6}>
                        <Input type="textarea" name="correctAns" id="correctAns"  value={formData.correctAns} onChange={handleChange} />
                    </Col>
                    </FormGroup>

                    </CardBody>
                </Card>
                : null
            }
            <Button color="success" onClick={handleForm}>Submit</Button>
        </Form>
    )
}

export default UpdateSubject;