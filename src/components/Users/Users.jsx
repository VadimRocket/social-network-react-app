import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
    // debugger;
    // ==
    // Side effect
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, status: 'active', followed: false, location: {city: 'Tokyo', country:'Japan'}, message: 'Hi how are you?', fullName:'Oliver', photo: 'http://avotarov.net/picture/avatar-100/kartinki/903.jpg' },
            { id: 2, status: 'active', followed: false, location: {city: 'Berlin', country:'Germany'}, message: 'It is my first post',  fullName:'Jack', photo: 'http://avotarov.net/picture/avatar-100/kartinki/905.jpg' },
            { id: 3, status: 'active', followed: true,  location: {city: 'Paris', country:'France'}, message: 'This is my third post', fullName:'Harry', photo: 'http://avotarov.net/picture/avatar-100/kartinki/902.jpg' },
        ])
    }

    return (
        <div >
            <h3>Users</h3>
            {
                props.users.map(user => <div key={user.id} className={s.media}>
                    <div className={s.img}>
                        <div className={s.fullname}>{user.fullName}</div>
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