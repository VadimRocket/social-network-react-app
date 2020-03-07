import React from 'react';
import style from './Pagination.module.css';


const Pagination = ({totalUsersCount, pageSize, currentPage, onPostChanged}) => {

        // get count buttons - total number of users / page size.(number of users per page)
        let pagesCount = Math.ceil(totalUsersCount / pageSize);   
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i); 
        }

    return <div>
        <nav className={style.pagination}>
            <ul className={style.pagination__list}>
                { pages.map(pageNumber =>  {
                    return <li key={pageNumber} className={currentPage === pageNumber ? style.active : '' } 
                    // cb onPostChanged
                    onClick={(e) => { onPostChanged(pageNumber) }}>{pageNumber}</li> 
                })}
            </ul>
        </nav>
    </div>
}

export default Pagination;