import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCm-sprGWc_qYBkE8uxB0LWBdd32q9R_DQ",
  authDomain: "agrobuddy-clf7e.firebaseapp.com",
  projectId: "agrobuddy-clf7e",
  storageBucket: "agrobuddy-clf7e.appspot.com",
  messagingSenderId: "508256073454",
  appId: "1:508256073454:web:fbbe9d3968940be6a65ff",
  measurementId: "G-KT9C2H7XVX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
