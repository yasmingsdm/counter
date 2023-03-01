import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name:'counter',
    initialState: 0,
    reducers:{
        increment: (state, action)=>{
            state.counter = state.counter + action.payload
        },
        decrement: (state, action)=>{
            state.counter = state.counter - action.payload
        },
        reset: state =>{
            state.counter = 0
        }
    }
})

export const {increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer