import { configureStore } from "@reduxjs/toolkit";
import ToolKitSlice from "./ToolKitSlice";
import ToolKitSliceFile from "./ToolKitSliceFile";

export const mystore = configureStore({

    reducer: {
counter:ToolKitSlice,
countertwo:ToolKitSliceFile,
    }

});