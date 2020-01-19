import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
    
    return (
        <div >
            <h3>Users</h3>
            {
                props.users.map(user => <div key={user.id} className={s.media}>
                    <div className={s.img}>
                        <div className={s.fullname}>{user.name}</div>
                        <img src={user.photo} alt="photo"/>

                        { user.followed               // unfollow, follow - See: UserContainer.js -> mapDispatchToProps
                            ? <button onClick={ () => {props.unfollow(user.id)} }> Unfollow </button>
                            : <button onClick={ () => {props.follow(user.id)} }> Follow </button>
                        }

                    </div>
                    <div className={s.location}>
                        <span className={s.location__title}>Location: </span>
                        {user.location.country} / {user.location.city}
                    </div>
                    <div className={s.status}>
                       <span className={s.status__title}> Status:</span> {user.status}
                    </div>
                </div>)
            }
        </div>
    );
}

export default Users;