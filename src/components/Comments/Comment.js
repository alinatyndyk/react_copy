import {Link} from "react-router-dom";

export default function Comment({comment}){
    return(
        <div>
            <p><Link to={'posts'}>{comment.postId}</Link></p>
            <p>{comment.name}</p>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
            <hr/>

        </div>
    )
}