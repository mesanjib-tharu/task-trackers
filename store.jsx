import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./src/components/features/taskSlice";
import authSlice from "./src/components/login/authSlice"

export const store = configureStore({
    reducer:{
        tasks: taskSlice,
        auth: authSlice,
    }
})