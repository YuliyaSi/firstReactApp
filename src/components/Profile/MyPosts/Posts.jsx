import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const Posts = (props) => {
    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const newPost = (values) => {
        if (values.newPostText) props.addPost(values.newPostText);
        values.newPostText = '';
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <AddPostFormRedux onSubmit={newPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} placeholder={'Add new post..'} name={'newPostText'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const AddPostFormRedux = reduxForm({form: 'postsAddPostForm'})(AddPostForm)

export default Posts;