// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIa_PnpQt8ZiMhQLMnc4fiBfBYQ__vB_w",
  authDomain: "fir-auth-93872.firebaseapp.com",
  projectId: "fir-auth-93872",
  storageBucket: "fir-auth-93872.appspot.com",
  messagingSenderId: "166357714544",
  appId: "1:166357714544:web:17cdf35be3a7d76508d6b5",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
