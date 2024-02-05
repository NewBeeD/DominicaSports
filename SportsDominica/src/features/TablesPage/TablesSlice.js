import { createSlice } from "@reduxjs/toolkit";



export const tableSlice = createSlice({

  name: 'tables',
  initialState: [],
  reducers: {

    populate: (state, action) => {
      state.push(action.payload)
    }

  }
})

export const { populate } = tableSlice.actions

export default tableSlice.reducer;