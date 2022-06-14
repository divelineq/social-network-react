import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Container = styled.div`
  background-color: #4682b4;
  grid-area: n;
  a {
    text-decoration: none;
    color: black;
  }
  .active {
    color: #bebebe;
  }
`

function Nav() {
  return (
    <Container>
      <NavLink to='/myprofile'>
        <h2>Profile</h2>
      </NavLink>
      <NavLink to='/message'>
        <h2>Message</h2>
      </NavLink>
      <NavLink to='/users'>
        <h2>Users</h2>
      </NavLink>
      <NavLink to='/news'>
        <h2>News</h2>
      </NavLink>
      <NavLink to='/music'>
        <h2>Music</h2>
      </NavLink>
      <NavLink to='/settings' style={{ paddingTop: 50 }}>
        <h2>Settings</h2>
      </NavLink>
    </Container>
  )
}

export default Nav
