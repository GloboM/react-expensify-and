
import React from 'react';
import { connect } from 'react-redux';
import { startAuthentication } from '../actions/authentication';

export const LoginPage = (props) => {
    const onLogin = () => {
        props.startAuthentication();
        //props.history.push("/dashboard");
    }
    return (
        <div>
            <button onClick={onLogin}>Login</button>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    startAuthentication : () => dispatch(startAuthentication())
})
export default connect(null, mapDispatchToProps)(LoginPage);