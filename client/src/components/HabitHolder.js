import React, { useState, useEffect } from 'react';
import Axios from "axios";
import IndHabit from "./IndividualHabit"


function HabitContainer() {

    const [dbEntries, setDBEntries] = useState([{}]);

    useEffect(() => {
        Axios.get("http://localhost:5000/view-habits")
        .then(res => { 
            setDBEntries(res.data)      
        });

        

        }, [])

    console.log(dbEntries)
    
    return (
        <div>
            {dbEntries.map(entry => {
                return <IndHabit key={entry._id} data={entry}/>
  
            })}
        </div>
    )




    // // ...
    // // Getting data and saving it in entryData variable
    // // ...
    //   return(
    //     // ...
    //     {entryData.map(data => <Child data={data} />)}
    //     // ...
    //   )
    // }



}

export default HabitContainer;