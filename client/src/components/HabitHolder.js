import React, { useState, useEffect, useContext } from 'react';
import Axios from "axios";
import IndHabit from "./IndividualHabit"
import { AuthContext} from "./AuthContext"
import HabitCard from "./HabitCard"

function HabitContainer() {

    const [dbEntries, setDBEntries] = useState([{}]);
   
    const authContextVal = useContext(AuthContext)
    const [user, setUser] = useState("No User")


    

    
    useEffect(() => {

        Axios.get("http://localhost:5000/view-habits", {params: {userID: localStorage.getItem("user")}})
        .then(res => { 
            console.log(localStorage.getItem("user"))
            // console.log(res.data)
            setDBEntries(res.data)      
        });

        

        }, [])

    // console.log(dbEntries)
    
        return (
            <div>
                {console.log(localStorage.getItem("user"))}
                {console.log(dbEntries)}
                {dbEntries.map(entry => {
                   
                        return <HabitCard key={entry._id} data={entry}/>
                  

                })}
            </div>
        )


    
    





}

export default HabitContainer;