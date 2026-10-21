import { configureStore } from '@reduxjs/toolkit'
import portfolioReducer from '../features/portfolio/portfolioSlice'
import uiReducer from '../features/ui/uiSlice'

export const store = configureStore({
  reducer: { portfolio: portfolioReducer, ui: uiReducer },
})
