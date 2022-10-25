import React from 'react';
import {useDispatch} from "react-redux";
import {count2Actions} from "../redux/slices/counter2.slice";

function Count2Tools(props) {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(count2Actions.inc(2))}>inc</button>
            <button onClick={()=>dispatch(count2Actions.dec(2))}>dec</button>
            <button onClick={()=>dispatch(count2Actions.reset(6))}>reset</button>

        </div>
    );
}

export default Count2Tools;