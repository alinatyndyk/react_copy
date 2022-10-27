import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

let initialState;
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {

    },

})

const {reducer: carReducer, actions: {}} = carSlice;

const carActions = {

}

export {
    carReducer,
    carActions
}