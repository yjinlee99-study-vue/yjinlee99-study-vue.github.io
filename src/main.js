import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApz4zC3riEew-bEH1POuuRpeYAjEyDP1M",
  authDomain: "yjinlee99-study-vue.firebaseapp.com",
  projectId: "yjinlee99-study-vue",
  storageBucket: "yjinlee99-study-vue.appspot.com",
  messagingSenderId: "686341400299",
  appId: "1:686341400299:web:ffe16ac345cab89aa240ae",
  measurementId: "G-MV2B9RP08G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
