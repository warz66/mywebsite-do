import { createSlice } from '@reduxjs/toolkit'

export const modeSLice = createSlice({
  name: 'mode',
  initialState: {
    value: false,
    animBtn: false
  },
  reducers: {
    handleMode: (state) => {
        state.value = !state.value;
        state.animBtn = true;
    },
    stopAnimBtn: (state) => {
      state.animBtn = false;
    },
  }
})

export const { handleMode, stopAnimBtn } = modeSLice.actions

export default modeSLice.reducer