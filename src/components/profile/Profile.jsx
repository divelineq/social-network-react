import React from 'react'
import styled from 'styled-components'
import { MyPostContainer } from './MyPosts/MyPostContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Container = styled.div`
  padding: 8px;
  background-color: #4682b4;
  display: grid;
  grid-area: c;
  text-align: start;
  grid-template-areas:
    'img img'
    'avatar info'
    'posts posts';
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;


  .account {
    grid-area: account;
  }
  .posts {
    grid-area: posts;
  }
`

function Profile(props) {
  return (
    <Container>
      <ProfileInfo profile={props.profile} status={props.status}
        updateStatus={props.updateStatus} />
      <div className='posts'>
        <MyPostContainer />
      </div>
    </Container>
  )
}

export default Profile
