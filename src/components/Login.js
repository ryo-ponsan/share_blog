import { signInWithPopup } from "firebase/auth";
import React from 'react'
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
    const navigate = useNavigate();
    const loginInWithGoogle = () => {
        //googleでログイン
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true); //ローカルストレージに保存 applicationで確認可/ 値を取ってくるにはgetItem使用
            setIsAuth(true);
            navigate("/"); // 認証したら自動でホームにリダイレクト
        });
    }

    return (
        <div>
            <p>ログインして始める</p>
            <button onClick={loginInWithGoogle}>Googleでログイン</button>
        </div>
    )
}

export default Login