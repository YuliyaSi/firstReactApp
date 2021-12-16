import React from "react";
import s from "./Post.module.css";

const Post = () => {
    return (
            <div className={s.item}>
                <img src="https://letsenhance.io/static/b8eda2f8914d307d52f725199fb0c5e6/62e7b/MainBefore.jpg" alt='123'/>
                post
                <div>
                    <span>Like</span>
                </div>
            </div>
    )
}
export default Post;