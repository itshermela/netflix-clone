import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './global-styles'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
import { FirebaseContext } from './context/firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// import { seedDatabase } from './seed'

const config = {
  apiKey: "AIzaSyC9fhbSo-z3aHJZBl2SA6J6-dMTfAF1kAQ",
  authDomain: "netflix-clone-e4dfe.firebaseapp.com",
  projectId: "netflix-clone-e4dfe",
  storageBucket: "netflix-clone-e4dfe.appspot.com",
  messagingSenderId: "1030194605717",
  appId: "1:1030194605717:web:38cc41c5fa440265ed759c",
  measurementId: "G-Y0JH43CM7L"
}

// Initialize Firebase
firebase.initializeApp(config)
// seedDatabase(firebase)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase: firebase }}>
    <GlobalStyles />
    <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
 
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();