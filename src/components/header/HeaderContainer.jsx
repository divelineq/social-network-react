import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { authThunk, setUserData } from '../../redux/authReducer';
import Header from './Header';

function HeaderContainer(props) {
    useEffect(() => {
        props.authThunk()
    })
    return <Header {...props} />
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const mapDispatchToProps = { setUserData, authThunk }


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)