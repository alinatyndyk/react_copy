import Comments from "../components/Comments/Comments";
import {Outlet} from "react-router-dom"

export default function CommentsPage(){
    return(
        <div>
            Comments
            <Comments/>
            <Outlet/>
            
        </div>
    )
}