import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase';
import "./Home.css"

const Home = () => {

    const [postList, setPostList] = useState([]);

    //ページがマウントされた１度だけデータを取得しブログ表示　一度だけ発火なので第二引数は空
    useEffect(() => {
        // useEffect内でasync関数使うには関数つくらないとだめ
        const getPosts = async () => {
            const data = await getDocs(collection(db, "posts"));
            // console.log(data);
            // console.log(data.docs);
            // console.log(data.docs.map((doc) => ({ doc })));
            // //documentに対しdata関数で中身取ってこれる firebaseの取出し方は慣れるしかない
            // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts();
    }, []);

    // 削除ボタン idを受け取って、そのドキュメントの削除可能
    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "posts", id));
        // 読込直して画面から消す
        window.location.href = "/";
    };

    return (
        <div className='homePage'>
            {postList.map((post) => {
                return (
                    <div className="postContents" key={post.id}>
                        <div className='postHeader'>
                            <h1>{post.title}</h1>
                        </div>

                        <div className='postTextContainer'>
                            {post.postsText}
                        </div>
                        <div className="nameAndDeleteButton">
                            <h3>@{post.author.username}</h3>
                            {post.author.id === auth.currentUser.uid && (
                                <button onClick={() => handleDelete(post.id)}>削除</button>
                            )}
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Home