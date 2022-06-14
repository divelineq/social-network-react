import { messagesReducer } from './messagesReducer'
import { profileReducer } from './profileReducer'

let store = {
  state: {
    profilePage: {
      posts: [
        { id: 1, post: 'Клево', likesCount: 6 },
        { id: 2, post: 'Hi how are you?', likesCount: 2 },
        { id: 3, post: 'Лайк', likesCount: 5 },
      ],
      postTextValue: 'text area',
    },
    messagesPage: {
      messages: [
        { id: 1, message: 'Привет' },
        { id: 2, message: 'Что делаешь?' },
        { id: 3, message: 'Как дела?' },
      ],
      dialogs: [
        { id: 1, name: 'Дима' },
        { id: 2, name: 'Настя' },
        { id: 3, name: 'Коля' },
        { id: 4, name: 'Леша' },
      ],
      newMessagesText: '',
    },
  },
  callSubscriber() {
    console.log('State changed!!!')
  },
  subscribe(observer) {
    this.callSubscriber = observer
  },

  dispatch(action) {
    profileReducer(this.state.profilePage, action)
    messagesReducer(this.state.messagesPage, action)

    this.callSubscriber(this.state)
  },
}
