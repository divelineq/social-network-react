import { usersAPI } from "../components/api/api"

const FOLLOW = 'FOLLOW',
  UNFOLLOW = 'UNFOLLOW',
  SET_USERS = 'SET-USERS',
  SET_CURRENT_PAGE = ' SET-CURRENT-PAGE',
  SET_TOTAL_COUNT = 'SET-TOTAL-COUNT',
  TOGGLE_ISFETCHING = 'TOGGLE-ISFETCHING'

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user
        }),
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user
        }),
      }
    case SET_USERS:
      return { ...state, users: action.users }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case SET_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.count }
    case TOGGLE_ISFETCHING:
      return { ...state, isFetching: action.isFetching }
    default:
      return state
  }
}

export const follow = (userId) => ({ type: FOLLOW, userId })

export const unfollow = (userId) => ({ type: UNFOLLOW, userId })

export const setUsers = (users) => ({ type: SET_USERS, users })

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count })

export const setIsFetching = (isFetching) => ({ type: TOGGLE_ISFETCHING, isFetching })

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(setIsFetching(true))
  usersAPI.getUsers(currentPage, pageSize).then(response => {
    dispatch(setIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalCount(response.totalCount))
  })
}

export const followThunk = (user) => (dispatch) => {
  usersAPI.getFollow(user).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(follow(user.id))
    }
  })
}

export const unfollowThunk = (user) => (dispatch) => {
  usersAPI.getUnfollow(user).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(unfollow(user.id))
    }
  })
}








