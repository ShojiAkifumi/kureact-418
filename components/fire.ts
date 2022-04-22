// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDdFlUNU7l-vIsn5MspGMqWuSKBfrpZGSk",
	authDomain: "kureact-418.firebaseapp.com",
	projectId: "kureact-418",
	storageBucket: "kureact-418.appspot.com",
	messagingSenderId: "681880999343",
	appId: "1:681880999343:web:25ed80709ad600d3d78b5a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
