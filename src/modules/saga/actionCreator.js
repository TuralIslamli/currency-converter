import { types } from "./actionTypes";

export const setConverterDataSaga = () => ({
    type: types.SET_CONVERTER_DATA_SAGA
})

export const setConverterInputs = (payload) => ({
    type: types.SET_CONVERTER_INPUTS,
    payload
})