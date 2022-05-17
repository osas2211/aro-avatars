import { configureStore } from "@reduxjs/toolkit";
import { demo } from "./slices/demo";

export const store  = configureStore({
    reducer: {
        demo: demo
    }
})

export type RootState = ReturnType<typeof store.getState>