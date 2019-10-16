import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCHQ0ldhxT8qB4fl_hRNcVGnab7NpoJF5Q",
    authDomain: "dev-e-commerce.firebaseapp.com",
    databaseURL: "https://dev-e-commerce.firebaseio.com",
    projectId: "dev-e-commerce",
    storageBucket: "dev-e-commerce.appspot.com",
    messagingSenderId: "867215096538",
    appId: "1:867215096538:web:9259ef06d2368350a9c3e3",
    measurementId: "G-E7LDPK9P5W"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${ userAuth.uid }`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;