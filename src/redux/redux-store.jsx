import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer } from './authReducer'
import { messagesReducer } from './messagesReducer'
import { profileReducer } from './profileReducer'
import { usersReducer } from './usersReducer'
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer
})



const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store
