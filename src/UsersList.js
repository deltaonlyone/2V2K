import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        ID: {user.id}, Username: {user.username}, Permissions: {user.permissions}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
