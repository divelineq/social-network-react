import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import {
  follow,
  unfollow,
  setCurrentPage,
  getUsers,
  followThunk,
  unfollowThunk,
} from '../../redux/usersReducer'
import Loader from '../Loader'
import { compose } from 'redux'
import { AuthRedirect } from '../HOC/AuthRedirect'

class UsersContainer extends React.Component {
  componentDidMount() { this.props.getUsers(this.props.currentPage, this.props.pageSize) }

  onPageChange = (pageNumber) => { this.props.getUsers(pageNumber, this.props.pageSize) }

  render() {
    return (
      <div>
        {this.props.isFetching ? <Loader /> :
          <Users totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            onPageChange={this.onPageChange}
            pageSize={this.props.pageSize}
            unfollow={this.props.unfollow}
            users={this.props.users}
            followThunk={this.props.followThunk}
            unfollowThunk={this.props.unfollowThunk}
          />}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}

const mapDispatchToProps = {
  follow,
  unfollow,
  setCurrentPage,
  getUsers,
  followThunk,
  unfollowThunk
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer)


