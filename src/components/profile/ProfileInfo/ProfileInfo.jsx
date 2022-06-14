import React from 'react'
import styled from 'styled-components'
import Loader from '../../Loader'
import ProfileStatus from '../ProfileStatus'

const Container = styled.div`
display: grid;
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

  grid-template-areas:
    'img img'
    'avatar info';

  grid-template-columns: 1fr 1fr;
`

export default function ProfileInfo(props) {
  if (!props.profile) { return <Loader /> }
  return (
    <Container>
      <div className='img'>
        <img src='https://millennialmoderator.com/images/single-12-01.jpg' alt='img' />
      </div>
      <div className='avatar'>
        <img
          src={props.profile.photos.small != null ? props.profile.photos.small : 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'}
          alt=''
        />
      </div>
      <div className='info'>
        <p>Name: {props.profile.fullName}</p>
        <ProfileStatus status={props.status} />
        <p>Looking job: {props.profile.lookingForAJobDescription}</p>

      </div>
    </Container>
  )
}
