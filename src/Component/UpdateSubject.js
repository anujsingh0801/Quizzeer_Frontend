import React, { useState } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardBody } from 'reactstrap';
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";
import {base_url} from "./Url"

const UpdateSubject = () => {

    const [addQues, setAddQues] = useState(false);

    const [formData, setFormData] = useState({
        subject: '',
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

    return (
        <Form className="button-group-text">
            <ToastContainer/>
            <FormGroup>
                <Label for="subjectSelect">Select Subject</Label>
                <Input type="select" name="subject" id="subjectSelect" value={formData.subject} onChange={handleChange}>
                    <option>Java</option>
                    <option>C++</option>
                    <option>Python</option>
                    <option>Machine Learning</option>
                    <option>AI</option>
                </Input>
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