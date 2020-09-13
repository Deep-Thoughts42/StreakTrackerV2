import React, { useState, useEffect, useContext } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import "../css/styles.css"
import { AuthContext} from "./AuthContext"




const HeaderNav = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  // const [loggedIn, setLoggedIn] = useState(localStorage.getItem("LoggedIn"))
  const authContextVal = useContext(AuthContext)

  // useEffect(() => {
  //   setLoggedIn(localStorage.getItem("LoggedIn"))
  // }, [])

  const toggleNavbar = () => setCollapsed(!collapsed);

  console.log(authContextVal)

  return (
      <div className="mb-3">
        <Navbar color="faded" light>
          <Container fluid='lg'>
          <NavbarBrand href="/" className="mr-auto">StreakTracker</NavbarBrand>
          { authContextVal.isAuthenticated === true && 
            <Button color="danger" href="/logout" className="mr-5">Logout</Button>
          }
          { authContextVal.isAuthenticated === false && 
            <Button color="primary" href="/login" className="mr-5">Login/Register</Button>
          }

          
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              
              { authContextVal.isAuthenticated === true && 
              <div>
                <NavItem>
                <NavLink href="/habit-form">Habit Form</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/view-habits">Habit View</NavLink>
                </NavItem>
              </div>
              }

              
              
            </Nav>
          </Collapse>




          </Container>
          
        </Navbar>
      </div>
    );

  }
  

export default HeaderNav;