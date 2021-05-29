import { createSlice } from "@reduxjs/toolkit";

const postNewItemSlice = createSlice({
    name: 'postForm',
    initialState: []
    // {
    //     formality: 1,
    //     name: '',
    //     phone: '',
    //     houseNumber: '1',
    //     prices: '',
    //     acreage: '',
    //     mezzanine: '',
    //     maxPeople: '',
    //     elec: '',
    //     water: '',
    //     sameRoom: '',
    //     details: '',
    //     checkedCarPark: false,
    //     checkedFan: false,
    //     checkedConditioner: false,
    //     checkedCamera: false,
    //     checkedGarbageBin: false,
    //     checkedKitchen: false,
    //     checkedKitchen: false,
    //     checkedToilet: false,
    //     checkedWifi: false,
    //     checkedCupboard: false,
    //     checkedDryingGround: false,
    //     checkedWaterHeater: false,
    //     img1: '',
    //     img2: '',
    //     img3: '',
    //     img4: '',
    //     img5: '',
    //     img6: '',
    //     check: false,
    // },
    ,
    reducers: {
        insertStep1Values:(state, action) =>{
            console.log("State ban dau la: " + state);
            state.push(action.payload);
        },
        insertStep2Values:(state, action) =>{
            console.log("payload : " + action.payload);
            state.push(action.payload);
        },
        insertStep3Values:(state, action) =>{
            state.push(action.payload);
        },
        insertStep4Values:(state, action) =>{
            state.push(action.payload);
        },
        // insertLastStepValues(state, action){

        // },

    }
});
const { actions, reducer } = postNewItemSlice;
export const { insertStep1Values, insertStep2Values, insertStep3Values, insertStep4Values } = actions;
export default reducer;