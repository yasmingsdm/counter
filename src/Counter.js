import React from "react";
import {useSelector, useDispatch} from 'react-redux';

import { increment, decrement, reset } from "./counterSlice";

const Counter = ()=>{

    const {counterSlice} = useSelector(state=>state.counterSlice)
    const dispatch = useDispatch();

    const handleIncrement=(value)=>{
        dispatch(increment(value));

    }
    
    const handleDecrement=(value)=>{
        dispatch(decrement(value))
    }
    
    const handleReset=()=>{
        dispatch(reset())
    }
return(
<div>
    <h2>Counter: {counterSlice}</h2>
    <button onClick={handleIncrement(1)} > +1</button>
    <button onClick={handleIncrement(5)} > +5</button>
    <button onClick={handleIncrement(10)} > +10</button>
    <button onClick={handleDecrement(1)} > -1</button>
    <button onClick={handleDecrement(5)} > -5</button>
    <button onClick={handleDecrement(10)} > -10</button>
    <button onClick={handleReset}>Reset</button>
</div>)
}


export default Counter