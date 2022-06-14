const UPDATE_MESSAGE = 'UPDATE_MESSAGE',
  SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
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
}

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE:
      return {
        ...state,
        newMessagesText: action.body,
      }

    case SEND_MESSAGE:
      let body = state.newMessagesText
      return {
        ...state,
        newMessagesText: '',
        messages: [...state.messages, { id: 6, message: body }],
      }
    default:
      return state
  }
}

export const sendMessages = () => ({ type: SEND_MESSAGE })

export const updateMessage = (body) => ({
  type: UPDATE_MESSAGE,
  body: body,
})
