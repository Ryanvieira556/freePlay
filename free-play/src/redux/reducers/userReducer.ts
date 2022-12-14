import { createSlice } from "@reduxjs/toolkit";


export const slice = createSlice({
    name: 'filter' ,
    initialState: { 
        category: ''
    },
    reducers: {
        setCategory: ( state, action) => {
            state.category = action.payload
        }
    }
})

export const { setCategory } = slice.actions
export default slice.reducer;