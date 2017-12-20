
import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startAuthentication = () => {
    console.log('trying')
    return (dispatch) => {
        firebase.auth().signInWithRedirect(googleAuthProvider);
    }
}