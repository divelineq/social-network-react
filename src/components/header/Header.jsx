import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
  background-color: #4682B4;
  grid-area: h;
  max-height: 100px;
  display: grid;
  h1{
      grid-area: h1;
  }
  div{
      grid-area: div;
      font-size: 18px;
  }
  a{
      text-decoration: none;
      color: black
  }
  grid-template-areas: 'h1 div';
`

function Header({ isAuth, login }) {
    return (
        <Container>
            <h1>Header IMG</h1>
            <div>
                {isAuth ? login : <NavLink to={`/login`}>Login</NavLink>}
            </div>
        </Container>
    );
}

export default Header;