import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRChTpRf7610COW2jsyRbELkStxCViNTw",
  authDomain: "library-39713.firebaseapp.com",
  projectId: "library-39713",
  storageBucket: "library-39713.appspot.com",
  messagingSenderId: "668609405090",
  appId: "1:668609405090:web:e43457e4262999317fb7fb"
};

// Initialize Firebase
initializeApp(firebaseConfig);

