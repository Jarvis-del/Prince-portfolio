import { createSlice } from '@reduxjs/toolkit'
import * as data from '../../data/portfolio'

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: { ...data },
  reducers: {
    // Swap in fresh LeetCode / GitHub numbers (e.g. from an API thunk).
    activityUpdated(state, action) {
      state.activity = { ...state.activity, ...action.payload }
    },
  },
})

export const { activityUpdated } = portfolioSlice.actions
export default portfolioSlice.reducer

export const selectProfile = (s) => s.portfolio.profile
export const selectAbout = (s) => s.portfolio.about
export const selectSkills = (s) => s.portfolio.skills
export const selectProjects = (s) => s.portfolio.projects
export const selectActivity = (s) => s.portfolio.activity
export const selectEducation = (s) => s.portfolio.education
