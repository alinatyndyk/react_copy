import {useEffect, useState} from "react";
import User from "./User";


export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })

    }, [])



    return (
        <div>
            Users
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    )
}