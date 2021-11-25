import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAKHEQ8FCvO9_3XVlckCz5SsUNRvxCzaCA",
  authDomain: "nutri2u-6f64e.firebaseapp.com",
  projectId: "nutri2u-6f64e",
  storageBucket: "nutri2u-6f64e.appspot.com",
  messagingSenderId: "545822364473",
  appId: "1:545822364473:web:743e22a0604a448bb64ee8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);