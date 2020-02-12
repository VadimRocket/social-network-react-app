import React from 'react';
import style from './Users.module.css';
import userPhoto from './../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom';

let Users = (props) => {

        // get count buttons - total number of users / page size.(number of users per page)
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);   
        let pages = [];
           for (let i = 1; i <= pagesCount; i++) {
            pages.push(i); 
           }

    return <div>
        <h3>Users</h3>
        {/* when we click on the button we must change currentPage see user_reducer */}

        <nav className={style.pagination}>
          <ul className={style.pagination__list}>
            { pages.map(pageNumber =>  {
               return <li key={pageNumber} className={props.currentPage === pageNumber ? style.active : '' } 
               // cb onPostChanged
               onClick={(e) => { props.onPostChanged(pageNumber) }}>{pageNumber}</li> 
            })}
          </ul>
        </nav>

        {
            props.users.map(user => <div key={user.id} className={style.media}>

                <div className={style.img}>
                    <div className={style.name}>{user.name}</div>
                       <NavLink  to={ '/profile/' + user.id }>
                         <img src={ user.photos.small !=null ? user.photos.small : userPhoto } alt='user' />
                       </NavLink>
                </div>

                <div>
                    { user.followed  // unfollow, follow - See: UsersContainer.js
                        ? <button disabled={props.followInProgress.some( id => id === user.id )} onClick={ () => {
                              props.unfollow(user.id); // Thunk creator
                        }}> Unfollow </button>

                        : <button disabled={ props.followInProgress.some( id => id === user.id )} onClick={ () => {
                              props.follow(user.id);  // Thunk creator
                        }}> Follow </button>
                    }
                </div>

                <div className={style.location}>
                    <span className={style.location__title}>Location: </span>
                </div>
                <div className={style.status}>
                   <span className={style.status__title}> Status:</span> {user.status}
                </div>
            </div>)
             
        }
    </div>
}
export default Users;