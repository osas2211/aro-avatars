import { createSlice } from "@reduxjs/toolkit";

export const clothesSlice = createSlice({
    name: "clothes",
    initialState: {
        shirtColor: "#e9c629",
        shirtSleeve: "short",
        trouserLength: "35%",
        trouserColor: "rgba(32, 30, 31, 1)",
        trouserFoldsColor: "rgb(95, 95, 95)",
        hatColor: "#000",
        hat: ""
    },
    reducers: {
        toggleShirtColor: (state, actions)=>{
            return { ...state, shirtColor: actions.payload}
        },
        toggleShirtSleeve: (state, actions)=>{
            return { ...state, shirtSleeve: actions.payload}
        },
        toggleTrouserLength: (state, actions)=>{
            return { ...state, trouserLength: actions.payload}
        },
        toggleTrouserColor: (state, actions)=>{
            return { ...state, trouserColor: actions.payload}
        },
        toggleHatColor: (state, actions)=>{
            return { ...state, hatColor: actions.payload}
        },
        toggleHat: (state, actions)=> {
            return { ...state, hat: actions.payload }
        }
    }
})

export const clothesReducer = clothesSlice.reducer
export const {toggleHat, toggleHatColor, toggleShirtColor, toggleShirtSleeve, toggleTrouserColor, toggleTrouserLength} = clothesSlice.actions