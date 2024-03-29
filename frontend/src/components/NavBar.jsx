import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Wrapper>
      <div className="nav_logo">
        <img src="" alt="" />
      </div>
      <ul>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/courses" className="link">
            Courses
          </Link>
        </li>
        <li>
          <Link to="/career" className="link">
            Career
          </Link>
        </li>
        <li>
          <Link to="/pap" className="link">
            PAP
          </Link>
        </li>
        <li>
          <Link to="/login" className="link">
            <button>Login</button>
          </Link>
        </li>
        <li>
          <Link to="/signup" className="link">
            <button>Login</button>
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
 margin-left: -0.5rem;
display: flex;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 6px 10px rgba(140, 135, 135, 0.7);
  padding:1rem;

  .title {
    font-size: 1rem;
    cursor: pointer;
    color: rgb(71, 67, 67);
  }
  ul {
    display: flex;
    gap:2.5rem;
  }

 
  ul li  {
    list-style: none;
    padding: 2px 5px;
    color: black;
    font-size: 1rem;
    letter-spacing: 2px;
  }
   .link{
    text-decoration: none;
    color:black;
  }
  li button{
    border:none;
    font-size: 1.2rem;
    background-color: black;
    padding:0.3rem 1rem;
    
  }
  ul li:hover {
    color: rgb(106, 105, 105);
  }
`;

export default NavBar