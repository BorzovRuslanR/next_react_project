import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment(state) {
            return state + 1
        },
        dicriment(state) {
            return state - 1
        }
    }
})

export const {increment, dicriment} = counterSlice.actions
const counterReducer = counterSlice.reducer
export default counterReducer