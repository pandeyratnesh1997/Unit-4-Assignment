import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

const Nav = styled.div`
  height:40px;
  width:100%;
  display:flex;
  background-color:pink;
  justify-content: space-around;
  color:blue;
`

export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav>
        <Nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/books">Books</NavLink>
        

        </Nav>
        {/* keep all the NavLinks here */}
        
      </nav>
    </>
  );
};
