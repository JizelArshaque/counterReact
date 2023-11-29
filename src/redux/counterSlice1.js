import { createSlice } from '@reduxjs/toolkit'


/* 
const initialState = {
  value: 0,
} */

export const counterSlice1 = createSlice({
  //createSlice is the method to create slice name initialState and reducers are predifined keys
  name: 'counterApp',//name of the slice
  initialState:{
    value:0
  },
  reducers: {
    //action is given inside the reducers key as object
    increment: (state) => {
     //state argument is predefine to to access the state
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state)=>{
      state.value = 0
    },
    incrementByAmount: (state, action) => {
      //if its a argumnt function then it can only be accessed by action and value in payload
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
//actions are required for components  so it need to export
export const { increment, decrement, reset, incrementByAmount } = counterSlice1.actions

//reducer is required to store so by default it is exported
export default counterSlice1.reducer