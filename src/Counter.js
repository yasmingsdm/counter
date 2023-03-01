import React from "react";
import {useSelector, useDispatch} from 'react-redux';

import { increment, decrement, reset } from "./counterSlice";

const Counter = ()=>{

   const value = useSelector((state)=>state.counterReducer.value);
  
    const dispatch = useDispatch();

    const handleIncrement=()=>{
        dispatch(increment(1));
    }
    
    const handleIncrement5=()=>{
        dispatch(increment(5));
    }

     const handleDecrement=()=>{
         dispatch(decrement(1))
     }

     const handleDecrement5=()=>{
        dispatch(decrement(5));
    }

    const handleReset=()=>{
        dispatch(reset())
    }
return(
<div>
    <h2>Counter: {value}</h2>
    <button onClick={handleIncrement} > +1</button>
    <button onClick={handleIncrement5} > +5</button>
    <button onClick={handleDecrement} > -1</button>
    <button onClick={handleDecrement5} > +5</button>
    <button onClick={handleReset}>Reset</button>
</div>)
}


export default Counter