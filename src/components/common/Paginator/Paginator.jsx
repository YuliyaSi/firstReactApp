import React, {useEffect, useState} from "react";
import s from "./Paginator.module.css";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);

    const [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    useEffect(() => {
        setPortionNumber(Math.ceil(currentPage / portionSize))
    }, [currentPage, portionSize])


    return (
            <div className={s.pagination}>
                {portionNumber > 1 &&
                    <div>
                        <button onClick={() => setPortionNumber(1)}>First</button>
                        <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>
                    </div>
                }
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => <span key={p} onClick={ () => onPageChanged(p) }
                                     className={currentPage === p ? s.selectedPage : s.page}>
                    {p}

                </span>)}
                {portionCount > portionNumber &&
                    <div>
                        <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
                        <button onClick={() => setPortionNumber(portionCount)}>Last</button>
                    </div>
                    }
            </div>
    )
}

export default Paginator;