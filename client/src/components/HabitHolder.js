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

        Axios.get("/view-habits", {params: {userID: localStorage.getItem("user")}})
        .then(res => { 
            console.log(localStorage.getItem("user"))
            // console.log(res.data)
            setDBEntries(res.data)      
        });

        

        }, [])

    // console.log(dbEntries)
    
        return (
            <div>
                
                {dbEntries.map(entry => {
                   
                        return <HabitCard key={entry._id} data={entry}/>
                  

                })}
            </div>
        )


    
    





}

export default HabitContainer;