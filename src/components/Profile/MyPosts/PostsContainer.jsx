import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import StoreContext from "../../../storeContext";

const PostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                let onAddPost = () => {
                    store.dispatch( addPostActionCreator() )
                }

                let onPostChange = (text) => {
                    store.dispatch( updatePostActionCreator(text) )
                }
                let state = store.getState().profilePage;
                return (<Posts updatePost={onPostChange}
                               addPost={onAddPost}
                               postsData={state.postsData}
                               newPostText={state.newPostText}/>)
            }
        }
        </StoreContext.Consumer>
    )
}
export default PostsContainer;