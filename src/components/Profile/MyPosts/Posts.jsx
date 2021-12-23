import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea rows="2">...</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={'Hi, how are you?'} likesCount={10}/>
                <Post message={'It\'s my first post'} likesCount={15}/>
            </div>
        </div>
    )
}
export default Posts;