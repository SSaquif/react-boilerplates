import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

//Initialize firebase
firebase.initializeApp(firebaseConfig);

//Get Authentication
export const auth = firebase.auth();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export default firebase;
