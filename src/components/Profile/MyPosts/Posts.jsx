import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = (props) => {
    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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
                {postsElements}
            </div>
        </div>
    )
}
export default Posts;