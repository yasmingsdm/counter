import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name:'counter',
    initialState: {value:0},
    reducers:{
        increment: (state)=>{
            state.value = state.value + 1
        },
        decrement: (state, action)=>{
            state.value = state.value - action.payload
        },
        reset: state =>{
            state.value = 0
        }
    }
})

export const {increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer