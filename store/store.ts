import { configureStore } from '@reduxjs/toolkit'
import { filterSlice } from './filter/filterSlice'
const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export default store
