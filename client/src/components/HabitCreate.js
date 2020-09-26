import React, { useState, useEffect } from 'react';
import Axios from "axios";

function HabitCreate(){

    const [testDb, setTestDB] = useState(0);

    useEffect(() => {
        // Add in params to see if I can access those from app.get
        Axios.get("/habit-create")
        .then(res => {
            setTestDB(res.data.habitTitle);
        });
        }, [])

    return (

    <div>{testDb}</div>

    )
}

export default HabitCreate;