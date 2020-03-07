import React from 'react';
import Pagination from '../Common/Pagination/Pagination';
import User from './User';

const Users = React.memo(({totalUsersCount, pageSize, currentPage, onPostChanged, users, ...props}) => {

   
    return <div>
        <h3>Users</h3>
        {/* when we click on the button we must change currentPage see user_reducer */}
        <Pagination currentPage={currentPage} onPostChanged={onPostChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
        
        {
            users.map(user => <User user={user} key={user.id} 
                followInProgress={props.followInProgress}  follow={props.follow} unfollow={props.unfollow}/>
            )   
        }
    </div>
})

export default Users;