const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    number: 0,
}

// creating reducer using redux Toolkit 

const buttonSlice = createSlice({
    name: 'screen',
    initialState: initialState,
    reducers: {
        result: (state, action) => {
            state.number = action.payload
        }
    }
});
export const buttonReducer = buttonSlice.reducer;
export const buttonAction = buttonSlice.actions;
export const buttonSelector = (state) => state.buttonReducer;