import {Link} from "react-router-dom";

export default function User({user}){
    const {id,name,username} = user;
    return(
        <div>
            {id} -- {name}-- {username}
            <button onClick={()=> console.log(id)}><Link to={`${id}`}>details</Link></button>

        </div>
    )
}