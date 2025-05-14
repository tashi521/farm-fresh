  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
  

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCtyymrRMfoyRJiZ5AxBc24U8Md7fEQmhk",
    authDomain: "farm-fresh-7b4a8.firebaseapp.com",
    projectId: "farm-fresh-7b4a8",
    storageBucket: "farm-fresh-7b4a8.firebasestorage.app",
    messagingSenderId: "922814809457",
    appId: "1:922814809457:web:102a02d5b59f14639e22d0",
    measurementId: "G-1QCYPFE0N0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
//inputs
const email =document.getElementById('email').value;
const pasword =document.getElementById('pasword').value;
//submit
const submit = document.getElementById('submit'); 
submit.addEventListener("click", function (event) { event.preventDefault()
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
})