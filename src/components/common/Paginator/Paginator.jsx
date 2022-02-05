import React from "react";
import s from "./Paginator.module.css";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for(let i = 1; pagesCount === 40 ? i <= pagesCount : i <= 40 ; i++) {
        pages.push(i)
    }

    return (
            <div className={s.pagination}>
                {pages.map(p => <div key={p} onClick={ () => onPageChanged(p) }
                                     className={currentPage === p ? s.selectedPage : s.page}>
                    {p}

                </div>)}
            </div>
    )
}

export default Paginator;