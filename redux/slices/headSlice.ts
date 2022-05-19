import { createSlice } from "@reduxjs/toolkit";

interface HeadPayload{
    payload: string 
    type: string
}

export const headSlice = createSlice({
    name: "head",

    // All values are css values.
    // headShape, eyeShape, smile uses Border Radius value Adjustments
    initialState: {
        headShape: "100% / 50% 50% 120% 120%",
        headSize: {height: "18%", width: "30%"},
        eyeColor: "#00916E",
        eyeShape: "100% / 80% 80% 120% 120%",
        smile: "100% / 40% 40% 130% 130%",
    },

    reducers: {
        toggleHeadShape: (state, action: HeadPayload)=> {
            return {
                ...state, headShape: action.payload
            }
        },

        toggleHeadSize: (state, action)=> {
            return {
                ...state, headSize: action.payload
            }
        },

        toggleEyeColor: (state, action: HeadPayload)=> {
            return {
                ...state, eyeColor: action.payload
            }
        },

        toggleEyeShape: (state, action: HeadPayload)=> {
            return {
                ...state, eyeShape: action.payload
            }
        },

        toggleSmile: (state, action: HeadPayload)=> {
            return {
                ...state, smile: action.payload
            }
        },

    }
})

export const headReducer = headSlice.reducer
export const {toggleEyeColor, toggleEyeShape, toggleHeadShape, toggleHeadSize, toggleSmile} = headSlice.actions