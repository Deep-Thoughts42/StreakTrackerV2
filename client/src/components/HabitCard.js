import React, {useContext, useEffect} from "react";
import { Container, Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
import { AuthContext} from "./AuthContext"

function HabitCard(props) {

    const authContextVal = useContext(AuthContext)
    
    
    if (authContextVal.isAuthenticated === false) {
        return <p>The user is not authenticated</p>
    }
    else if (authContextVal.isAuthenticated === true) {
        return(
            <Container className="lg">
                <Card className="mb-5">
                    <CardHeader>{props.data.userID}</CardHeader>     
                    <Row xs="2"> 
                        <Col>
                            <CardBody>
                            <CardTitle>{props.data.habitTitle}</CardTitle>
                            <CardText>{props.data.habitMotivation}</CardText>
                            <Button color="primary">Read More</Button>
                            </CardBody>          
                        </Col>
                        <Col className="my-auto" >
                            <h1 className="text-center">Streak Text</h1>
                        </Col>
    
                    </Row>
             
                </Card>

            </Container>
        )
    
       
        
    }
    
    

    



}

export default HabitCard;