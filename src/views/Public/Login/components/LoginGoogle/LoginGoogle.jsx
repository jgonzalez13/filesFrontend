import React, {Component, useReducer} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../../../../firebase'

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
    render(){
        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;
        return (
            <div>
                {
                 user 
                    ? <div> <p>Hello, {user.displayName}</p> <p>{user.email}</p> <img src={user.photoURL} alt="FotoUsuario"/></div>
                    : <p>Please, sign in.</p>
                }
                {
                 user 
                    ? <button onClick={signOut}>Sign out</button> 
                    : <button onClick={signInWithGoogle}>Sign in with Google</button>
                }
            </div>
        );
    }
}  

const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider : new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);