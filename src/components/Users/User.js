export default function User({user, choose}){
    const {id,name,username} = user;
    return(
        <div>
            {id} -- {name}-- {username}
            <button onClick={()=>{
                choose(user);
            }}>details</button>

        </div>
    )
}