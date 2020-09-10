import React, { useState, useEffect} from 'react';
// import logo from "./logo.svg";
import Axios from "axios";
import  HeaderNav  from "./components/header-nav";
import Home from "./components/Home";
import About from "./components/About";
import HabitCreate from "./components/HabitCreate";
import HabitForms from "./components/HabitForm";
import HabitContainer from "./components/HabitHolder";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Signup";
import Logout from "./components/Logout";
import { AuthContextProvider } from "./components/AuthContext"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.css";
import "./css/styles.css"



function App() {

 

  

  // localStorage.setItem("LoggedIn", false)
  // localStorage.setItem("UserId", 2132)

  console.log(localStorage.getItem("UserId"))



  return (
    <div>
        <AuthContextProvider>
        <Router>
          <HeaderNav/>
          
          <Switch>
            <Route exact path='/'>
              <Home></Home>

            </Route>
            <Route exact path='/about'>
              <About></About>
              
            </Route>

            <Route exact path='/habit-create'>
              <HabitCreate></HabitCreate>

            </Route>

            <Route exact path='/habit-form'>
              <HabitForms></HabitForms>
               
            </Route>

            <Route exact path='/view-habits'>
              <HabitContainer/>  
            </Route>
            
            <Route exact path='/login'>
              <LoginForm></LoginForm>
            </Route>

            <Route exact path='/register'>
              <RegisterForm></RegisterForm>
            </Route>

            <Route exact path='/logout'>
              <Logout></Logout>
            </Route>

          </Switch>

        </Router>

        </AuthContextProvider>
        
      
      
      
    </div>
  );
}

export default App;

