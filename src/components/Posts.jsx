import React from "react";
import s from "../modules/Profile.module.css";

const Posts = () => {
    return (
        <div className={s.posts}>
            My Posts
            <div>
                New Post
            </div>
            <div>
                <div className={s.item}>
                    post1
                </div>
                <div className={s.item}>
                    post2
                </div>
            </div>
        </div>
    )
}
export default Posts;