import { createSlice } from "@reduxjs/toolkit";

export const bodySlice = createSlice({
    name: "body",
    initialState: {
        bodySize: "40%",
        bodyShape: "normal",
        skinColor: "#fca",
    },
    reducers: {
        toggleBodySize: (state, action)=>{
            return {...state, bodySize: action.payload}
        },
        toggleBodyShape: (state, action)=>{
            return {...state, bodyShape: action.payload}
        },
        toggleSkinColor: (state, action)=>{
            return { ...state, skinColor: action.payload }
        }
    }
})

export const bodyReducer = bodySlice.reducer
export const {toggleBodySize, toggleBodyShape, toggleSkinColor} = bodySlice.actions