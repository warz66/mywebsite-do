import { createSlice } from '@reduxjs/toolkit'

export const locationNavFpSLice = createSlice({
  name: 'locationNavFp',
  initialState: {
    value: null
  },
  reducers: {
    resetSection: (state) => {
        state.value = null;
    },
    handleSection: (state, goToSection) => {
        state.value = goToSection;
    }
  }
})

export const { resetSection, handleSection } = locationNavFpSLice.actions

export default locationNavFpSLice.reducer