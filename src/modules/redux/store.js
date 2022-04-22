import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { converterSlice } from "./reducer";
import rootSaga from "../saga/saga";

export const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    converter: converterSlice.reducer,
  },
  middleware
});


sagaMiddleware.run(rootSaga);