import React, { useContext } from 'react'
import { UserContext } from '../contexts/usersContext';
import Loading from './Loading';
import User from './User';

const UserList = () => {
    const { loading, users } = useContext(UserContext)
    if(loading) {
        return <Loading/>;
    }
    return (
        <div className="container mt-3">
            { users.map(user => (
                <User user={user} key={user.id} /> 
            ))}
        </div>
    )
}

export default UserList