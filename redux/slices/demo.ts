import { createSlice } from "@reduxjs/toolkit";

export const demoSlice = createSlice({
    name: "demo",
    initialState: {
        state: "hello world"
    },
    reducers: {
        demoReducer: (state, action)=>{
            return state
        }
    }
})

export const { demoReducer } = demoSlice.actions
export const demo = demoSlice.reducer