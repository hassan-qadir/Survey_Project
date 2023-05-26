import { configureStore } from "@reduxjs/toolkit";
import ReadSlice from "./feature/ReadSlice";
import userSlice  from "./feature/UserSlice";
import AuthReducer from "./feature/AuthSlice";


export const store = configureStore({
    reducer:{
        app: userSlice,
        read: ReadSlice,
        user:AuthReducer,
    }
})