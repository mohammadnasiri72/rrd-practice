import { configureStore } from '@reduxjs/toolkit'
import textColorRducer from './slice/textColor'

export const store = configureStore({
  reducer: {
    textColor : textColorRducer,
  },
})