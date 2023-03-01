import React from "react";
import {useSelector, useDispatch} from 'react-redux';

import { increment, decrement, reset } from "./counterSlice";

const Counter = ()=>{

   const value = useSelector((state)=>state.counterReducer.value);
  
    const dispatch = useDispatch();

    const handleIncrement=()=>{
        dispatch(increment());

    }
    
     const handleDecrement=()=>{
         dispatch(decrement())
     }
    
    const handleReset=()=>{
        dispatch(reset())
    }
return(
<div>
    <h2>Counter: {value}</h2>
    <button onClick={handleIncrement} > +1</button>
    <button onClick={handleIncrement(5)} > +5</button>
    <button onClick={handleIncrement(10)} > +10</button>
    <button onClick={handleDecrement(1)} > -1</button>
    <button onClick={handleDecrement(5)} > -5</button>
    <button onClick={handleDecrement(10)} > -10</button> 
    <button onClick={handleReset}>Reset</button>
</div>)
}


export default Counter