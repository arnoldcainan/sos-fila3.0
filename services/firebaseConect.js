import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDBIhF1CztmAW4J1bFZewb_hHnaMUPyKqQ",
    authDomain: "sos-fila-bb8df.firebaseapp.com",
    projectId: "sos-fila-bb8df",
    storageBucket: "sos-fila-bb8df.appspot.com",
    messagingSenderId: "159898206686",
    appId: "1:159898206686:web:9831fbf964de741c625d4f",
    measurementId: "G-KCGNFPFNWM"
  };

  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);