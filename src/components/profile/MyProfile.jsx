import React from 'react'
import styled from 'styled-components'
import ProfileStatus from './ProfileStatus'

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

  .img {
    grid-area: img;
  }
  .avatar {
    grid-area: avatar;
    img {
      width: 180px;
    }
  }
  .info {
    grid-area: info;
    margin: 0 auto;
    padding-left: 20px;
  }

`

export default function MyProfile() {
  return (
    <Container>
      <div className='img'>
        <img src='https://millennialmoderator.com/images/single-12-01.jpg' alt='img' />
      </div>
      <div className='avatar'>
        <img
          src='https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'
          alt='img'
        />
      </div>
      <div className='info'>
        <ProfileStatus status={'My status'} />
        <p>Name: Dmitry</p>
        <p>Looking job: yeah</p>
      </div>
    </Container>
  )
}