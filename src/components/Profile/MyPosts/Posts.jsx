import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className={s.posts}>
            My Posts
            <div>
                <button>Add post</button>
            </div>
            <div>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}
export default Posts;