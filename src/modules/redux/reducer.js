import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    USD: null,
    EUR: null,
};

export const converterSlice = createSlice({
    name: 'converter',
    initialState,
    reducers: {
      setConvert: (state, action) => ({
          ...state,
          USD: action.payload.USD.toFixed(2),
          EUR: action.payload.EUR.toFixed(2),
      }),
      setConvertRate: (state, action) => ({
        ...state,
        rate:  action.payload.toFixed(2),
    })
    }
  });

export default converterSlice.reducer;