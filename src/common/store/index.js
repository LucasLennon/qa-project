import { configureStore } from '@reduxjs/toolkit'

import questions from '../../questions-module/store'

export default configureStore({
  reducer: {
    questions,
  },
})
