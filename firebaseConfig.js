import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBHa016Qtt_Kl0Znm6re_vGycVAXSO5p60",
  authDomain: "showcase-1e514.firebaseapp.com",
  projectId: "showcase-1e514",
  storageBucket: "showcase-1e514.appspot.com",
  messagingSenderId: "382639593817",
  appId: "1:382639593817:web:78c9ac1664eeadb8075448",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
