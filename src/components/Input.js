import React, { useState } from 'react';

import { useDispatch } from "react-redux";
import saveTodo from "../features/todoSlice";

const Input = () => {
    const[input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodo = () => {
       dispatch(saveTodo({
        item: input,
        done: false,
        id: new Date().getTime().toString(),
       }))
    }

    return (
        <div className="input">
           <input 
              type="text" 
              value={input}
              onChange={(e)=> setInput(e.target.value)}
            />

           <button onClick={addTodo} type="submit">
               Add!
           </button>
        </div>
    )
}

export default Input;
