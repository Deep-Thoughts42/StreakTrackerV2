import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import { useForm } from "react-hook-form";

function LoginForm() {

    

   
    return(

        <div>
            <Container fluid='lg'>
                <Form className="border border-primary p-5 rounded mt-5">
                    <h2 className="mb-3">Log-in to Streak Tracker!</h2>
                    <FormGroup>
                        <Label for="userEmail">Email</Label>
                        <Input type="email" name="email" id="userEmail" placeholder="streaktracker@gmail.com"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="userPassword">Password</Label>
                        <Input type="password" name="password" id="userPasssword" placeholder="Keep it Unique"/>
                        <FormText>Auth0 and other security measures have not yet been implemented, please use something unique for safety.</FormText>
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


