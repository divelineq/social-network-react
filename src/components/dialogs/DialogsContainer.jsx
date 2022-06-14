import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  sendMessages,
  updateMessage,
} from '../../redux/messagesReducer'
import { AuthRedirect } from '../HOC/AuthRedirect'
import Dialogs from './Dialogs'


const mapStateToProps = (state) => {
  return {
    textValue: state.messagesPage.newMessagesText,
    dialogs: state.messagesPage.dialogs,
    messages: state.messagesPage.messages,
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = { sendMessages, updateMessage }

export const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  AuthRedirect
)(Dialogs)


