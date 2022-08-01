// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
  } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfpwcgRMUh20zpMr2pa_SXArl_pJA2204",
  authDomain: "final-project-react-rea2b.firebaseapp.com",
  projectId: "final-project-react-rea2b",
  storageBucket: "final-project-react-rea2b.appspot.com",
  messagingSenderId: "558416684163",
  appId: "1:558416684163:web:58ddb086c809fc967167b6",
  measurementId: "G-E51V3LFLQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider(); // Create a Google auth provider
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const userLogin = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    return err;
  }
};

const userRegister = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: name });
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    return err;
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    alert(err.message);
    return err;
  }
};

const userLogout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  userLogin,
  userRegister,
  sendPasswordReset,
  userLogout,
};