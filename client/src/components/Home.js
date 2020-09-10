import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import HabitCard from "./HabitCard"

function Home(props){
    return (
        <div>
            <Container fluid="lg">
            <Jumbotron>
                <h1 className="display-3">Welcome to StreakTracker</h1>
                <p className="lead">This is a simple web-app which allows you to maintain streaks and habits over longer periods of time.</p>
                <hr className="my-2" />
                <p>Feel free to explore this base web page!</p>
                <p className="lead"></p>
            </Jumbotron>
            <HabitCard/>


            </Container>




        </div>

    )
}

export default Home;
