import { configureStore } from '@reduxjs/toolkit'
import locationNavFpReducer from './features/locationNavFp'

export default configureStore({
  reducer: {
    locationNavFp: locationNavFpReducer
  }
})