import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  img {
    width: 50px;
    padding-right: 8px;
  }
`

export default function Post({ post, likes }) {
  return (
    <Container>
      <div>
        <img src='https://vraki.net/sites/default/files/inline/images/1_6.png' alt='img' />
        {post}
        <div>like {likes}</div>
      </div>
    </Container>
  )
}
