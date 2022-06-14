import { usersAPI } from "../components/api/api"

const SET_USER_DATA = 'SET-USER-DATA'

const initialState = {
  userId: null,
  login: null,
  email: null,
  isFetching: true,
  isAuth: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state, ...action.data, isAuth: true
      }
    default:
      return state
  }
}

export const setUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })

export const authThunk = () => (dispatch) => {
  usersAPI.getAuth().then(response => {
    const { login, id, email } = response.data.data
    if (response.data.resultCode === 0) {
      dispatch(setUserData(id, email, login))
    }
  })
}




