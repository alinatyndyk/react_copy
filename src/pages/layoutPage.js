import {Link, Outlet} from "react-router-dom";

export default function layoutPage(){
    return(
        <div>
            layout page
            <h3>sub menu</h3>
            <ol>
                <li><Link to={'users'}>users</Link></li>
                <li><Link to={'posts'}>posts</Link></li>
                <li><Link to={'comments'}>comments</Link></li>
            </ol>
            <Outlet/>
        </div>
    )
}