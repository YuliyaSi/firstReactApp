import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";

const Posts = (props) => {
    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const newPost = (values) => {
        if(values.newPostText) props.addPost(values.newPostText);
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

const maxLength300 = maxLengthCreator(300)

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={TextArea} placeholder={'Add new post..'} name={'newPostText'}
                   validate={[required, maxLength300]}/>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const AddPostFormRedux = reduxForm({form: 'postsAddPostForm'})(AddPostForm)

export default Posts;