import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../../../../firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = { googleProvider: new firebase.auth.GoogleAuthProvider() };

const Login = ({ user, signInWithGoogle, signOut }) => (
  <div>
    {user ? (
      <>
        <div>
          <p>Hello, {user.displayName}</p> <p>{user.email}</p> <img src={user.photoURL} alt="FotoUsuario" />
        </div>
        <button onClick={signOut}>Sign out</button>
      </>
    ) : (
      <>
        <p>Please, sign in.</p>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </>
    )}
  </div>
);

export default withFirebaseAuth({ providers, firebaseAppAuth })(Login);
