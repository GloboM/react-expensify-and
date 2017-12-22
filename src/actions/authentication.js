
import { firebase, googleAuthProvider } from '../firebase/firebase';


export const login = (uid) => ({
    type:'LOGIN',
    uid
})

export const logout = () => ({
    type: 'LOGOUT'
})

export const startAuthentication = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const startSignOut = () => {
    return (dispatch) => {
        return firebase.auth().signOut();
    }
}