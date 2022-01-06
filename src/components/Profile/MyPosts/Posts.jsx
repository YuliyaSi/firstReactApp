import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/state";

const Posts = (props) => {
    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = () => {
        props.dispatch( addPostActionCreator() )
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch( updatePostActionCreator(text) )
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea rows="4"
                              placeholder={'Add new post'}
                              value={props.newPostText}
                              onChange={ onPostChange }/>
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default Posts;