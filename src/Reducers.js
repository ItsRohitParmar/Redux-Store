import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    c:0,
}


export const customReducer = createReducer(initialState,(builder)=>{
    builder.addCase("increment",(state, action)=>{
        state.c += 1;
    })

    .addCase("decrement",(state, action)=>{
        state.c -= 1;
    })

    .addCase("incrementByValue",(state, action)=>{
        state.c += action.payload;
    })
})