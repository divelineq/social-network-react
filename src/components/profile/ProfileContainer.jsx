import React, { useEffect } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getStatus, profileThunk, setUserProfile, updateStatus, setStatus } from '../../redux/profileReducer'
import { useParams } from 'react-router-dom'
import { AuthRedirect } from '../HOC/AuthRedirect'
import { compose } from 'redux'

const ProfileContainer = (props) => {
  const { userId } = useParams()
  useEffect(() => {
    props.profileThunk(userId)
    props.getStatus(userId)
  }, [])

  return (
    <Profile {...props} profile={props.profile} status={props.status}
      updateStatus={props.updateStatus} />
  )
}

const mapStateToPtops = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth
})

const mapDispatchToProps = { setUserProfile, profileThunk, getStatus, updateStatus }

export default compose(
  connect(mapStateToPtops, mapDispatchToProps),
  AuthRedirect
)(ProfileContainer)

