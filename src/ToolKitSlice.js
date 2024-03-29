import { createSlice } from "@reduxjs/toolkit";
// name of action
// initialstate
// reducer

const initialState = {
    count: 0,
    count2: 100,
}

export const ToolKitSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increments: (state) => {
            state.count += 1;
        },
        
        decrements: (state) => {
            state.count -= 1;
        },

        increments2: (state) => {
            state.count2 += 100;
        },
        
        decrements2: (state) => {
            state.count2 -= 100;
        },
        
        resetTool: (state) => {
            state.count2 = 0*0;
        }
    }

});

export const { increments, decrements,increments2,decrements2,resetTool } = ToolKitSlice.actions;
export default ToolKitSlice.reducer;