import { createSlice } from "@reduxjs/toolkit";

const MainPageSlice = createSlice({
    name: 'mainPage',
    initialState: [],
    reducers: {
        pushValueIntoStore:(state, action) =>{
            console.log("State ban dau la: ");
            console.log(state);
            state.push(action.payload);
        },
    }
});
const { actions, reducer } = MainPageSlice;
export const { pushValueIntoStore } = actions;
export default reducer;