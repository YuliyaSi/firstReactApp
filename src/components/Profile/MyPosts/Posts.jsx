import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";
import {Field, Form} from "react-final-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";

const Posts = (props) => {
    let postsElements = props.postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const newPost = (values) => {
        if(values.newPostText) props.addPost(values.newPostText);
        values.newPostText = '';
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <AddPostForm onSubmit={newPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const maxLength300 = maxLengthCreator(300);
const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

const AddPostForm = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
            {({handleSubmit, submitting}) => (
                <form onSubmit={handleSubmit}>
                    <Field component={TextArea} placeholder={'Add new post..'} name={'newPostText'}
                           validate={composeValidators(required, maxLength300)}/>
                    <div>
                        <button disabled={submitting}>Add post</button>
                    </div>
                </form>
            )}
        </Form>
    )
};

export default Posts;