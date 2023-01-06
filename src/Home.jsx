import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
function Home() {
    const dispatch = useDispatch();

    const {c} = useSelector(state => state.custom);
    const addBtn = ()=>{
        dispatch({
            type: "increment",
        })
    }

    const subBtn = ()=>{
        dispatch({
            type: "decrement"
        })
    }

    const inByBtn = ()=>{
        dispatch({
            type: "incrementByValue",
            payload: 50
        })
    }

  return (
    <div>
        <h2>Home.js C = {c}</h2>

        <button onClick={addBtn}>Increment</button>
        <button onClick={subBtn}>Decreament</button>
        <button onClick={inByBtn}>Increase By 50</button>
    </div>
  )
}

export default Home