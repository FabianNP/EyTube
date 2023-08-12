import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB8EoB2QnqoFYVucIYwGtS1DG5pSBZNdhA",
  authDomain: "video-e2fce.firebaseapp.com",
  projectId: "video-e2fce",
  storageBucket: "video-e2fce.appspot.com",
  messagingSenderId: "618757240672",
  appId: "1:618757240672:web:8d3a35d2e3776fcd82d005"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth() 
export const provider = new GoogleAuthProvider()

export default app