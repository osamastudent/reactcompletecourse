import { createSlice } from "@reduxjs/toolkit";
// name of action
// initialstate
// reducer

const initialState = {
    count: 0,
}

export const ToolKitSliceFile = createSlice({
    name: "countertwo",
    initialState,
    reducers: {
        incrementsfile: (state) => {
            state.count += 1;
        },
        
        decrementsfile: (state) => {
            state.count -= 1;
        }
    }
     

});

export const { incrementsfile, decrementsfile} = ToolKitSliceFile.actions;
export default ToolKitSliceFile.reducer;