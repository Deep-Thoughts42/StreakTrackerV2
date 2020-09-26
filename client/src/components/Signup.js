import React, { useState, useEffect, useContext } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Col, Row } from 'reactstrap';
import { useForm } from "react-hook-form";
import { useHistory, Redirect, Link } from "react-router-dom";
import Axios from "axios";
import { AuthContext} from "./AuthContext"



function RegisterForm() {

    const { register, handleSubmit, errors } = useForm();
    const [approved, setApproved] = useState(null);
    const [email, setEmail] = useState(null);
    let history = useHistory()


    const authContextVal = useContext(AuthContext)
    


    const onSubmit = data => {
        console.log(data);
        Axios.post("/register", data)
        .then(res => { 
            // Insert the stuff here that I want to change on response, potentially a state that controls history.push
            let logged_info = res.data
            let temp_email = logged_info[1]
            setApproved(logged_info[0])
            // setEmail(temp_email)

            if (logged_info[0] === true) {
                // localStorage.setItem("LoggedIn", true)
                // localStorage.setItem("UserId", email)
                console.log(logged_info[1])
                authContextVal.login(logged_info[1])
                localStorage.setItem("user", logged_info[1])
                history.push('./')
                
        
            }
            // else if (logged_info[0] === false) {
            //     // history.push('./login')
            // }

            
         })
        .catch(err => {
            console.log(err)
        })
        
        
        
        
        
    };




    return (

        <div>
            <Container fluid="lg" className="mb-5">
                <Form className="border border-primary p-5 rounded mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="mb-3">Sign Up for Streak Tracker</h2>
                    
                    <FormGroup>
                                <Label for="userEmail">Email</Label>
                                <Input type="email" name="email" id="userEmail" placeholder="streaktracker@gmail.com" innerRef={register({required: true})}/>
                                {approved === false &&
                                    <FormText color="danger">Your e-mail is already being used, try logging in.</FormText>
                                    
                                
                                }    
                    </FormGroup>
                    
                    <Row form>
                        <Col>
                            <FormGroup>
                                <Label for="userFirstName">First Name</Label>
                                <Input type="text" name="f_name" id="userFirstName" placeholder="Jeff" innerRef={register({required: true, minLength: 3})}/>
                                {errors.f_name && <FormText color="danger">First name is too short</FormText>}
                            </FormGroup>
                        
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="userLastName">Last Name</Label>
                                <Input type="text" name="l_name" id="userLastName" placeholder="Bezos" innerRef={register}/> 
                            </FormGroup>
                        
                        </Col>
                        
                    </Row>

                    <FormGroup>
                                <Label for="userPassword">Choose a Password</Label>
                                <Input type="password" name="password" id="userPassword" placeholder="super_secret_password" innerRef={register({required: true, minLength: 6})}/>  
                                <FormText>Auth0 and other security measures have not yet been implemented, please use something unique for safety.</FormText>  
                                {errors.password && <FormText color="danger">Please have a password at least 6 characters long.</FormText>}
                    </FormGroup>

                    <Button type="submit" color='primary'>Sign Up</Button>

                </Form>
            </Container>
        </div>

    )


}

export default RegisterForm;