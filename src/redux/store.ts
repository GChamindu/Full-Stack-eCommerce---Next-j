import CardReader from "./features/cartSlince";
import LoadReducer from "./features/loadSlice";
import ProductReducer from "./features/productSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        CardReader,
        ProductReducer,
        LoadReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;