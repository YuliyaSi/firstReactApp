import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
    let state = props.store.getState().profilePage;
    let onAddPost = () => {
        props.store.dispatch( addPostActionCreator() )
    }

    let onPostChange = (text) => {
        props.store.dispatch( updatePostActionCreator(text) )
    }

    return (
        <Posts updatePost={onPostChange}
               addPost={onAddPost}
               postsData={state.postsData}
               newPostText={state.newPostText}/>
    )
}
export default PostsContainer;