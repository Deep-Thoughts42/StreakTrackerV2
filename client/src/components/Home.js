import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import HabitCard from "./HabitCard"

function Home(props){
    return (
        <div>
            <Container fluid="lg">
            <div>
                <Row>
                    <Col>
                        <h2 className='text-center'>Habits are important bruv</h2>
                    </Col>
                    <Col>
                    <iframe className="p-4" width="560" height="315" src="https://www.youtube.com/embed/U_nzqnXWvSo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                </Row>
            

            </div>
            
            <Jumbotron>
                <h1 className="display-3">Welcome to StreakTracker</h1>
                <p className="lead">This is a simple web-app which allows you to maintain streaks and habits over longer periods of time.</p>
                <hr className="my-2" />
                <p>Feel free to explore this base web page!</p>
                <p className="lead"></p>
            </Jumbotron>
            


            </Container>




        </div>

    )
}

export default Home;
