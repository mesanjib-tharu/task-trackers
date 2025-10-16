import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./src/components/features/taskSlice";


export const store = configureStore({
    reducer:{
        tasks: taskSlice
    }
})