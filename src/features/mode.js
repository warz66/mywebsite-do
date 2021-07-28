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
    handleStyleFpNav: (state) => {
      if (document.getElementById("fp-nav")) {
        if (state.value) {
          document.getElementById("fp-nav").classList.remove('fp-nav-dark'); 
          document.getElementById("fp-nav").classList.add('fp-nav-light'); 
        } else {
          document.getElementById("fp-nav").classList.remove('fp-nav-light'); 
          document.getElementById("fp-nav").classList.add('fp-nav-dark');
        }
      }
    }
  }
})

export const { handleMode, stopAnimBtn, handleStyleFpNav } = modeSLice.actions

export default modeSLice.reducer