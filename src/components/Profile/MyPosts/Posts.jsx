import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = (props) => {
    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updatePost(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea rows="4"
                              ref={newPostElement}
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