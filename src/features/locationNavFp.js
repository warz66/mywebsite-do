import { createSlice } from '@reduxjs/toolkit'

export const locationNavFpSLice = createSlice({
  name: 'locationNavFp',
  initialState: {
    value: null
  },
  reducers: {
    handleSection: (state, goToSection) => {
        state.value = goToSection;
    }
  }
})

export const { handleSection } = locationNavFpSLice.actions

export default locationNavFpSLice.reducer