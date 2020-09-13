import React, { useState, useEffect } from 'react';
import Axios from "axios";

function HabitCreate(){

    const [testDb, setTestDB] = useState(0);

    useEffect(() => {
        // Add in params to see if I can access those from app.get
        Axios.get("http://localhost:5000/habit-create")
        .then(res => {
            setTestDB(res.data.habitTitle);
        });
        }, [])

    return (

    <div>{testDb}</div>

    )
}

export default HabitCreate;