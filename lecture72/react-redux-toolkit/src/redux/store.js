import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    // this is where we will add our reducers or register our reducers to the store
    counter: counterReducer
  },
})

// steps
// 1. create a store
// 2. wrap app component under provider and pass the store as a prop
// 3. create a slice and also create reducers and actions in the slice
// 4. register the slice reducer to the store
