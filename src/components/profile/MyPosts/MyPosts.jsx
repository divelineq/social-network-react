import React from 'react'
import Post from './Post/Post'
import styled from 'styled-components'

const Container = styled.div`
  grid-area: posts;
  .newComment {
    padding-bottom: 10px;
  }
`

export default function MyPosts({ post, textValue, updateTextValue, addPost }) {
  const postElement = post.map((post) => (
    <Post key={post.id} post={post.post} likes={post.likesCount} />
  ))

  const onAddPost = () => {
    addPost()
  }

  const onPostChange = (e) => {
    const text = e.target.value
    updateTextValue(text)
  }

  return (
    <Container>
      <div className='newComment'>
        <h4>Введите новый комметарий:</h4>
        <textarea onChange={onPostChange} value={textValue} />
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div>{postElement}</div>
    </Container>
  )
}
