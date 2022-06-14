import React from 'react'
import styled from 'styled-components'
import DialogsItem from './DialogsItem'
import Message from './Message'

const Container = styled.div`
  background-color: #4682b4;
  display: grid;
  grid-area: c;
  grid-template-columns: 2fr 4fr;
  textarea {
    margin-top: 50px;
  }
  .names {
    border-right: 1px solid black;
  }
`

export default function Dialogs({
  dialogs,
  messages,
  textValue,
  sendMessages,
  updateMessage,
  isAuth
}) {
  const dialogsElement = dialogs.map((dialogs) => (
    <DialogsItem key={dialogs.id} name={dialogs.name} id={dialogs.id} />
  ))

  const messagesElements = messages.map((messages) => (
    <Message key={messages.id} message={messages.message} id={messages.id} />
  ))

  const onSendMessage = () => {
    sendMessages()
  }

  const onNewMessage = (e) => {
    let body = e.target.value
    updateMessage(body)
  }

  return (
    <Container>
      <div className='names'>{dialogsElement}</div>
      <div className='messages'>
        {messagesElements}
        <textarea onChange={onNewMessage} value={textValue}></textarea>
        <div>
          <button onClick={onSendMessage}>Add post</button>
        </div>
      </div>
    </Container>
  )
}
