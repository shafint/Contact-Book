import {configureStore} from "@reduxjs/toolkit";
import contactSlice from "../slices/contactSlice";
import userDataSlice from "../slices/userSlice";
import Rightuser from "../slices/Rightuser";

const store=configureStore({
    reducer:{
        tableData:contactSlice,
        user:userDataSlice,
        rightUser:Rightuser,
    }
})
export default store;