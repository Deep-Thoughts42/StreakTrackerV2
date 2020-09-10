import React from "react";
import { Container, Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

function HabitCard() {


    return(
        <Container className="lg">
            <Card className="mb-5">
                <CardHeader>Header</CardHeader> 
                {/* I can put the specific user in question here */}
                <Row xs="2">
                
                    <Col>
                        
                        <CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                        </CardBody>
                        
                    </Col>
                    <Col className="my-auto" >
                        <h1 className="text-center">Streak Text</h1>
                    </Col>


                </Row>
                
                
                
            </Card>

            <Card>
                <CardHeader>Header</CardHeader>
                <CardBody>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
                </CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>





        </Container>
    )



}

export default HabitCard;