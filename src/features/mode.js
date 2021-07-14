import { createSlice } from '@reduxjs/toolkit'

export const modeSLice = createSlice({
  name: 'mode',
  initialState: {
    value: false
  },
  reducers: {
    handleMode: (state) => {
        state.value = !state.value;
    },
  }
})

export const { handleMode } = modeSLice.actions

export default modeSLice.reducer