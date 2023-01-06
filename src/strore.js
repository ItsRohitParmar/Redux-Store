import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { customReducer } from "./Reducers";


const store = configureStore({

    reducer: {
        custom: customReducer,
    },
});

export default store;