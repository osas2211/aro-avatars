import { configureStore } from "@reduxjs/toolkit";
import { demo } from "./slices/demo";
import { headReducer } from "./slices/headSlice";
import { bodyReducer } from "./slices/bodySlice";
import { clothesReducer } from "./slices/clothesSlice";

export const store  = configureStore({
    reducer: {
        demo: demo,
        head: headReducer,
        body: bodyReducer,
        clothes: clothesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>