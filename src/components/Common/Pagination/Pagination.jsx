import React, { useState } from "react";

import style from './Pagination.module.css';


const Pagination = ({totalUsersCount, pageSize, currentPage, onPostChanged, portionSize=14}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div>
        <nav className={style.pagination}>
            <ul className={style.pagination__list}>
                {portionNumber > 1
                ? <li className={style.paginationBtn} onClick={() => {
                    setPortionNumber(portionNumber - 1);
                }}> &larr; </li>
                : null}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(pageNumber => {
                    return <li  key={`ale-${pageNumber}`} className={currentPage === pageNumber ? style.active : '' }
                                onClick={(e) => {
                                    onPostChanged(pageNumber);
                                }}>{pageNumber} </li>
                })}
                {portionCount > portionNumber
                    ? <li  className={style.paginationBtn} onClick={() => {
                        setPortionNumber(portionNumber + 1);
                    }}> &rarr; </li>
                    : null
                }
            </ul>
        </nav>
    </div>
};


export default Pagination;