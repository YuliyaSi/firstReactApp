import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (
            <div className={s.item}>
                <div className={s.block}>
                    <img src="https://letsenhance.io/static/b8eda2f8914d307d52f725199fb0c5e6/62e7b/MainBefore.jpg" alt='123'/>
                    <div className={s.message}>{props.message}</div>
                </div>
                <div>
                    <button className={s.button}>Like</button>
                    <span>likes: {props.likesCount} </span>
                </div>
            </div>
    )
}
export default Post;