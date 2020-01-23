import React from 'react';
import style from './Users.module.css';
import userPhoto from './../../assets/images/user.jpg'

let Users = (props) => {

        // get count buttons - общее кол-во пользователей / размер стр.(число пользователей на странице)
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);   
        let pages = [];
           for (let i = 1; i <= pagesCount; i++) {
            pages.push(i); 
           }

    return <div>
        <h3>Users</h3>
        {/* when we click on the button we should change currentPage: see the users_reducer*/}
        <nav className={style.pagination}>
          <ul className={style.pagination__list}>
            { pages.map(pageNumber =>  {
               return <li  className={props.currentPage === pageNumber ? style.active : '' } 
               // cb onPostChanged
               onClick={(e) => { props.onPostChanged(pageNumber) }}>{pageNumber}</li> 
            })}
          </ul>
        </nav>
        {
            props.users.map(user => <div key={user.id} className={style.media}>

                <div className={style.img}>

                    <div className={style.name}>{user.name}</div>
                        {/* <img src={userPhoto} alt="userPhoto" /> */}
                        <img src={ user.photos.small !=null ? user.photos.small : userPhoto } alt={userPhoto} />
                </div>

                <div>
                    { user.followed  // unfollow, follow - See: UsersContainer.js
                        ? <button onClick={ () => {props.unfollow(user.id)} }> Unfollow </button>
                        : <button onClick={ () => {props.follow(user.id)} }> Follow </button>
                    }

                </div>
                <div className={style.location}>
                    <span className={style.location__title}>Location: </span>
                    {/* {user.location.country} / {user.location.city} */}
                </div>
                <div className={style.status}>
                   <span className={style.status__title}> Status:</span> {user.status}
                </div>
            </div>)
             
        }
    </div>
}
export default Users;