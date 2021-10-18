import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from "./global-styles";

import { FirebaseContext } from "./context/firebase";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBvxxIGRy0NtVQ1gEq_ah1f6-5xhYqEsa0",
  authDomain: "netflix-clone-7c192.firebaseapp.com",
  projectId: "netflix-clone-7c192",
  storageBucket: "netflix-clone-7c192.appspot.com",
  messagingSenderId: "803918221693",
  appId: "1:803918221693:web:39227e13d63dd4b37d3c14"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase: app }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
