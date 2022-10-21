import {Link} from "react-router-dom";

export default function User({user}){
        const {id} = user;
    return(
        <div>
            user: {user.name}--{user.age}--{user.email}
            <Link to={`${id}/posts`}>details</Link>
            
        </div>
    )
}