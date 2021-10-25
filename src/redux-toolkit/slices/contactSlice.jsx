import { createSlice } from "@reduxjs/toolkit";


export const dataSlice = createSlice({
    name: "data",
    initialState: {
        data: []
    },
    reducers: {
        add: (state, action) => {
            state.data = [...state.data, action.payload];
        },
        remove: (state, action) => {
            state.data = state.data.filter((val, ind) => ind !== action.payload)
        },
        update: (state, action) => {
            state.data[action.payload.id]=action.payload.data
        },
        selectDelete:(state,action)=>{
            state.data=[]
        }
    }
})
export const { add, remove, update,selectDelete } = dataSlice.actions;
export default dataSlice.reducer;