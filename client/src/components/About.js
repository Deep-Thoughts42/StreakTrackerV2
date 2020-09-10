import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem, Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import LoginForm from './Login';
import Moment from 'react-moment';
import RegisterForm from "./Signup";

function About(props){


    const [time, setTime] = useState("0:0:0")
    const [date, setDate] = useState(Date())
    useEffect(() => {
        setInterval(() => {
            let d = new Date()
            


            let hours = d.getHours()
            let minutes = d.getMinutes()
            let seconds = d.getSeconds()

            let dateStr = String(hours+":"+minutes+":"+seconds);
            
            setTime(dateStr)



        }, 2000)
    }, [])





    return (
        <div>
            <Container fluid="md">

            <ListGroup>
                <ListGroupItem>This is the about page of the application</ListGroupItem>
                <ListGroupItem>This is also a test of React Router and Reactrap.</ListGroupItem>
                <ListGroupItem>This will disappear in a little bit.</ListGroupItem>
                <ListGroupItem>Notice how the first item in the group doesn't have a period.</ListGroupItem>
                <ListGroupItem></ListGroupItem>
                
            </ListGroup>
            {/* <LoginForm/>
            <RegisterForm></RegisterForm> */}

            {/* <p>{time}</p>
            <Moment withTitle fromNow>{400000000}</Moment> */}



            </Container>

           
        </div>

    );
}

export default About;
