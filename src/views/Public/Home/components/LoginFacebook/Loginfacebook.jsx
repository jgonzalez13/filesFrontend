import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../../../../firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = { facebookProvider: new firebase.auth.FacebookAuthProvider() };

const LoginFacebook = ({ user, signInWithFacebook, signOut }) => (
  <div>
    {user ? (
      <>
        <button className="buttonG" onClick={signOut}>Sign out</button>
      </>
    ) : (
      <>
        <button  className="buttonG" onClick={signInWithFacebook}>Sign in with Google</button>
      </>
    )}
  </div>
);

export default withFirebaseAuth({ providers, firebaseAppAuth })(LoginFacebook);
