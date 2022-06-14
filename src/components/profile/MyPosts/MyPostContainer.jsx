import { connect } from 'react-redux'
import { addPostAction, updatePostAction } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'

const mapStateToProps = (state) => {
  return {
    post: state.profilePage.posts,
    textValue: state.profilePage.postTextValue,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostAction())
    },
    updateTextValue: (text) => {
      dispatch(updatePostAction(text))
    },
  }
}

export const MyPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts)
