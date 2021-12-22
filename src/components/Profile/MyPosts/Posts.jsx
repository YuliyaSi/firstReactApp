import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className={s.posts}>
            My Posts
            <div className={s.add}>
                <textarea cols="30" rows="5"></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message={'Hi, how are you?'} likesCount={10}/>
                <Post message={'It\'s my first post'} likesCount={15}/>
            </div>
        </div>
    )
}
export default Posts;