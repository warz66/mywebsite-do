import { configureStore } from '@reduxjs/toolkit'
import locationNavFpReducer from './features/locationNavFp'
import modeReducer from './features/mode'

export default configureStore({
  reducer: {
    locationNavFp: locationNavFpReducer,
    mode: modeReducer 
  }
})