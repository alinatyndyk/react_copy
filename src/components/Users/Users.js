import {useEffect, useState} from "react";
import User from "./User";


export default function Users() {

    let [users, setUsers] =  useState([]);
    let [user, setUser] =  useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })

    }, [])

    const chooseUser = (user) => {
        setUser(user);
    };

    return (
        <div>
            Users
            {users.map(user => <User key={user.id} user={user} choose={chooseUser}/>)}

            {user.id && <div>{user.username}-{user.email}</div>}
        </div>
    )
}