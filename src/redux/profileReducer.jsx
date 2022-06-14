import { usersAPI } from "../components/api/api"

const ADD_POST = 'ADD-POST',
  UPDATE_POST = 'UPDATE-POST',
  SET_USER_PROFILE = 'SET-USER-PROFILE',
  SET_STATUS = 'SET-STATUS'

const initialState = {
  posts: [
    { id: 1, post: 'Клево', likesCount: 6 },
    { id: 2, post: 'Hi how are you?', likesCount: 2 },
    { id: 3, post: 'Лайк', likesCount: 5 },
  ],
  postTextValue: '',
  profile: null,
  status: ''
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPosts = {
        id: 5,
        post: state.postTextValue,
        likesCount: 10,
      }
      return {
        ...state,
        posts: [...state.posts, newPosts],
        postTextValue: '',
      }
    case UPDATE_POST:
      return {
        ...state,
        postTextValue: action.text,
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }
    default:
      return state
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
  }
}

export const addPostAction = () => ({ type: ADD_POST })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const updatePostAction = (text) => ({ type: UPDATE_POST, text: text })

export const setStatus = (status) => ({ type: SET_STATUS, status: status })

export const profileThunk = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data))
  })
}

export const getStatus = (userId) => (dispatch) => {
  usersAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data))
  })
}

export const updateStatus = (status) => (dispatch) => {
  usersAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  })
}

