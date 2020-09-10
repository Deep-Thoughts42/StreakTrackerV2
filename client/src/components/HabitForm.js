import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import { useForm } from "react-hook-form";
import Axios from "axios";
import { useHistory } from "react-router-dom";



const HabitForms = (props) => {

    const { register, handleSubmit, errors } = useForm();
    let history = useHistory()

    const onSubmit = data => {
        // console.log(data);
        Axios.post("http://localhost:5000/habit-form", data)
        history.push("/");
        
        
    };


  return (
    <Container fluid="lg">

        <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
            <Label for="habit-title">Habit Title</Label>
            <Input  type="text" name="habit-title" id="habit-title" placeholder="Exercise" innerRef={register}/>
        </FormGroup>
        <FormGroup>
            <Label for="motivation-text">What's your motivation?</Label>
            <Input type="text" name="motivation-text" id="motivation-text" placeholder="I want to get jacked." innerRef={register}/>
        </FormGroup>

        <FormGroup>
            <Label for="streak-period">Choose Streak Time Period</Label>
            <Input type="select" name="streak-period" id="streak-period" innerRef={register}>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
            </Input>
        </FormGroup>
        
        <FormGroup>
            <Label for="habit-desc">Habit Description</Label>
            <Input type="textarea" name="habit-desc" id="habit-desc" innerRef={register}/>
        </FormGroup>

        <Button type="submit" color="primary">Submit</Button>
        </Form>

    </Container>
    
  );
}

export default HabitForms;