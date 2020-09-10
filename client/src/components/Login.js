import React, { useState, useEffect, useContext } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import { useForm } from "react-hook-form";
import { useHistory, Redirect, Link } from "react-router-dom";
import Axios from "axios";
import { AuthContext} from "./AuthContext"

function LoginForm() {

    let history = useHistory()
    const { register, handleSubmit, errors } = useForm();

    const authContextVal = useContext(AuthContext)

    const [error_bool, setErrorBool] = useState(null)
    const [error_text, setErrorText] = useState("")


    const onSubmit = data => {
        console.log(data)
        Axios.post("http://localhost:5000/login", data)
            .then((res) => {
                let logged_info = res.data

                if (logged_info[0] === true) {
                    authContextVal.login(logged_info[1])
                    localStorage.setItem("user", logged_info[1])
                    history.push("./")

                }
                else {
                    setErrorBool(logged_info[0])
                    setErrorText(logged_info[1])
                }


            })
            .catch((err) => {
                console.log(err)

            })


          
        
    };


   
    return(

        <div>
            <Container fluid='lg'>
                <Form className="border border-primary p-5 rounded mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="mb-3">Log-in to Streak Tracker!</h2>
                    <FormGroup>
                        <Label for="userEmail">Email</Label>
                        <Input type="email" name="email" id="userEmail" placeholder="streaktracker@gmail.com" innerRef={register({required: true})}/>
                        {error_bool === false &&
                                    <FormText color="danger">{error_text}</FormText>
                        }
                    </FormGroup>
                    <FormGroup>
                        <Label for="userPassword">Password</Label>
                        <Input type="password" name="password" id="userPasssword" placeholder="Keep it Unique" innerRef={register({required: true})}/>
                        <FormText>Auth0 and other security measures have not yet been implemented, please use something unique for safety.</FormText>
                        {error_bool === false &&
                                    <FormText color="danger">{error_text}</FormText>
       
                        }  
                    </FormGroup>
                    <Button className="mb-2" type="submit" color="primary">Log In</Button>
                    <p>Don't have an account? If so, register.</p> 
                    <Button className="mb-2" type="submit" color="info" href="/register">Register</Button>


                </Form>



            </Container>



        </div>

    )



}


export default LoginForm;


