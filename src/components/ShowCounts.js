import React from 'react';
import {useSelector} from "react-redux";

const ShowCounts = () => {
    const {count1, users} = useSelector(state => state.count1Reducer);
    const {count2} = useSelector(state => state.count2Reducer);
    return (
        <div>
            <h1>Count 1: {count1}</h1>
            <h1>Count 2: {count2}</h1>
            <hr/>
            {JSON.stringify(users)}
        </div>
    );
};

export default ShowCounts;