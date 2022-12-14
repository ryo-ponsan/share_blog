import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; //googleで認証するため
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0U_s9u7NvneTZvOIN0fSAdwxY-EU0oWs",
    authDomain: "blog-814c7.firebaseapp.com",
    projectId: "blog-814c7",
    storageBucket: "blog-814c7.appspot.com",
    messagingSenderId: "658694294353",
    appId: "1:658694294353:web:1e2854080a9be9e1582170"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 認証の初期化
const auth = getAuth(app);
// googleproviderのインスタンス化
const provider = new GoogleAuthProvider();
// databaseの初期化
const db = getFirestore(app);

export { auth, provider, db }