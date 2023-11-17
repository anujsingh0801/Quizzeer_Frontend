import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Subject from "./Subject";
import axios from "axios";
import { base_url } from "./Url";

const Courses = () => {

    const [subs, setSubs] = useState([]);

    useEffect(()=>{
        document.title = "Courses || Quizzeer";
        getAllSub();
    }, []);

    const getAllSub = () =>  {
        axios
        .get(base_url + "/getAllSubject")
        .then(response => {
            const allSub = [];
            response.data.subjects.map((sub)=>{
                allSub.push(sub.name)
            });
            setSubs(allSub);
            // toast.success("Subjects loaded successfully");
        })
        .catch(error => {
            console.log(error)
            // toast.error("Something Went Wrong!!!");
        });
    };


    return (
            <div> 
                {
                    subs.map((sub) => (
                    <Subject key={sub} subName={sub}/> 
                    ))
                }
                {/* <ToastContainer /> */}
            </div>
        
    )
}

export default Courses;