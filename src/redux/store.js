import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {count1Reducer} from "./slices/counter1.slice";
import {count2Reducer} from "./slices/counter2.slice";

const rootReducer = combineReducers({
    count1Reducer: count1Reducer,
    count2Reducer
});

const setupStore = configureStore({
    reducer: rootReducer
});

export {
    setupStore
}