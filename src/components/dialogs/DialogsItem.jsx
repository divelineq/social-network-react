import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  padding-top: 15px;
  a {
    text-decoration: none;
    font-size: 22px;
    color: black;
  }
`

export default function DialogsItem({ name, id }) {
  return (
    <Container>
      <Link to={`/dialogs/${id}`}>{name}</Link>
    </Container>
  )
}
