import React, {useContext, useEffect, useState} from "react";
import { useHistory} from 'react-router-dom'
import { Container, Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AuthContext} from "./AuthContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faEdit } from '@fortawesome/free-solid-svg-icons'
import Axios from "axios";


function HabitCard(props) {

    const authContextVal = useContext(AuthContext);
    const [modal, setModal] = useState(false);
    const [displayCard, setDisplayCard] = useState(true)
    const [timeDisplay, setTimeDisplay] = useState("Loading...");
    let history = useHistory()

    useEffect(() => {
        let interval = setInterval(() => {
            let start_date = new Date(props.data.timeSinceStart)
            start_date = Date.parse(start_date)
            let now = new Date()
            now = Date.parse(now)
            let difference = Math.abs(now-start_date)
            
            let day = 1000*60*60*24
            let hour = 1000*60*60
            let minute = 1000*60
            let second = 1000

            let remaining;
            
            let days_since = Math.floor(difference/day) 
            remaining = difference-(days_since*day)
            
            let hours_since = Math.floor(remaining/hour)
            remaining = remaining-(hours_since*hour)

            let minutes_since = Math.floor(remaining/minute)
            remaining = remaining-(minutes_since*minute)

            let seconds_since = Math.floor(remaining/second)
            remaining = remaining-(seconds_since*second)

            let date_string = `${days_since}d:${hours_since}h:${minutes_since}m:${seconds_since}s`

            setTimeDisplay(date_string)



        }, 1000);


    }, []);
    
    
    const toggle = () => setModal(!modal);

    const deleteHabit = () => {
        let button_data = [props.data._id, "delete"]
        Axios.post('/view-habits', button_data)
            .then(res => {
                

            })

    };

    const resetTime = () => {
        let button_data = [props.data._id, "reset"]


    };


    
    if (authContextVal.isAuthenticated === false) {
        return <p>The user is not authenticated</p>
    }
    else if (authContextVal.isAuthenticated === true) {
        return(
            
            <Container className="md">
                
            
                <Card className="mb-5">
                    <CardHeader className="d-flex flex-row justify-content-between">
                        <div>
                        {props.data.userID}
                        </div>
                        <div className="">
                            <Button color="primary" className="mr-2">
                                <FontAwesomeIcon  icon={faEdit}></FontAwesomeIcon>
                            </Button>
                            
                            <Button color="danger" className="mr-3" onClick={deleteHabit} href="/view-habits">
                                <FontAwesomeIcon  icon={faTimesCircle}></FontAwesomeIcon>
                            </Button>
                        </div>
                        
                    </CardHeader>     
                    <Row xs="2"> 
                        <Col>
                            <CardBody>
                            <CardTitle><h3>{props.data.habitTitle}</h3></CardTitle>
                            <CardText>{props.data.habitMotivation}</CardText>
                            <Button color="primary" onClick={toggle}>Read More</Button>
                            </CardBody>          
                        </Col>
                        <Col className="my-auto" >
                            <h1 className="text-center">{timeDisplay}</h1>
                        </Col>
    
                    </Row>
             
                </Card>
                
                
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Habit: {props.data.habitTitle}</ModalHeader>
                    <ModalBody>
                        <h4>Description:</h4>
                        <br></br>
                        {props.data.habitDescription}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggle}>Close Menu</Button>
                    </ModalFooter>


                </Modal>

            </Container>
        )

        
    }
    
}

export default HabitCard;