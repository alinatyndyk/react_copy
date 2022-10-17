export default function Launch({launch}){
    const {mission_name, launch_year, mission_patch_small} = launch;
    return(
        <div>
            mission name: {mission_name}
            <br/>
            launch year:{launch_year}
            <br/>
            url:{mission_patch_small}

        </div>
    )
}