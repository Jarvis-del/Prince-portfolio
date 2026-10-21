import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: { activeSection: 'top' },
  reducers: {
    setActiveSection(state, action) {
      state.activeSection = action.payload
    },
  },
})

export const { setActiveSection } = uiSlice.actions
export default uiSlice.reducer

export const selectActiveSection = (s) => s.ui.activeSection
