import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAC2_dZlujE5GRYk7XCJbVfZjRzf4iTVZc",
  authDomain: "educate-a83cf.firebaseapp.com",
  projectId: "educate-a83cf",
  storageBucket: "educate-a83cf.firebasestorage.app",
  messagingSenderId: "931578752133",
  appId: "1:931578752133:web:b16088e2f4b437a7554dec",
  measurementId: "G-HSZYY25G7K"


}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const db = getFirestore(app)