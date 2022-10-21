import {Link} from "react-router-dom";

export default function Post({post}){
    return(
        <div>
            {post.title}
            <Link to={`${post.id}`}>post details</Link>
            
        </div>
    )
}