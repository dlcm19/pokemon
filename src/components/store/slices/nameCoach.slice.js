import { createSlice } from "@reduxjs/toolkit";

export const nameCoach = createSlice({
    name: 'nameCoach',
    initialState: '',
    reducers: {
        setNameCoach: (state, action) => action.payload

    }
})
export const {setNameCoach} = nameCoach.actions
export default nameCoach.reducer