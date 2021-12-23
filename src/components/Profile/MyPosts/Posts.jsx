import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = () => {

    let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It\'s my first post', likesCount: 15},
        {id: 2, message: 'Bla-bla-bla', likesCount: 10},
        {id: 2, message: 'It\'s my second post', likesCount: 13}
    ]
    let postsElements = postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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