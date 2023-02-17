import { createSlice } from "@reduxjs/toolkit";

const initializeValue = {hobby:0,freelancer:0,startup:0,enterprise:0,year: ""}
export const priceValueSlice = createSlice({
  name:"priceValue",
  initialState: {value: initializeValue},
  reducers: {
    monthly: (state,action) => {
      state.value = action.payload
    },
    yearly: (state,action) => {
      state.value = action.payload;
    }
  }
})

export const {monthly,yearly} = priceValueSlice.actions;

export default priceValueSlice.reducer