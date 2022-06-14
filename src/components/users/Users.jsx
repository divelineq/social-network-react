import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, ContainerUsers } from './StyledUsers'

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    if (pages.length < 10) {
      pages.push(i);
    }
  }

  return (
    <Container>
      <div className='pages'>
        {pages.map((page) => {
          return <div>
            <button onClick={() => { props.onPageChange(page) }} className={props.currentPage === page && 'selectedPage'}>
              {page}
            </button>
          </div>
        })}
      </div>
      <ContainerUsers>
        {props.users.map((user) => (
          <div className='user' key={user.id}>
            <div className='left'>
              <NavLink to={`/profile/${user.id}`}>
                <img className='img' alt='img' src={user.photos.small != null ? user.photos.small : 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'} />
              </NavLink>
              <div>Name: {user.name}</div>
              {user.followed ?
                <button onClick={() => { props.unfollowThunk(user) }}>Unfollow</button>
                :
                <button onClick={() => { props.followThunk(user) }}>Follow</button>
              }
            </div>
            <div className='right'>
              <div>Country: {"user.location.country"}</div>
              <div>City: {"user.location.city"}</div>
              <div>Status: {user.status}</div>
            </div>
          </div>
        ))}
      </ContainerUsers>
    </Container>
  )
}

export default Users