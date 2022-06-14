import React from 'react'
import Nav from './components/navigation/Nav'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import { DialogsContainer } from './components/dialogs/DialogsContainer'
import UsersContainer from './components/users/UsersContainer'
import ProfileContainer from './components/profile/ProfileContainer'
import HeaderContainer from './components/header/HeaderContainer'
import Login from './components/login/Login'
import MyProfile from './components/profile/MyProfile'
const Container = styled.div`
  box-sizing: border-box;
  max-width: 1568px;
  margin: 0 auto;
  text-align: center;
  display: grid;

  grid-template-areas:
    'h h h'
    'n c c';

  grid-template-columns: 2fr 10fr;
  grid-gap: 10px;
`

function App() {
  return (
    <Container>
      <HeaderContainer />
      <Nav />
      <Routes>

        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/profile/:userId' element={<ProfileContainer />} />
        <Route path='/message' element={<DialogsContainer />} />
        <Route path='/users' element={<UsersContainer />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Container>
  )
}


export default App
