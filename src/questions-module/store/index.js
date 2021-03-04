import { createSlice } from '@reduxjs/toolkit'

export const initialState = [
  {
    id: 1,
    question: 'How to add a question?',
    answer: 'Just use the form below!',
    createdAt: new Date(),
    updatedAt: null,
  },
]

const questionStore = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      const { payload } = action
      if (!payload.question && !payload.answer) {
        return state
      }

      const newQuestion = {
        ...payload,
        id: state.length + 1,
        createdAt: new Date(),
        updatedAt: null,
      }
      return [...state, newQuestion]
    },
    removeQuestion: (state, action) => {
      const filteredState = state.filter(
        (question) => question.id !== action.payload.id
      )

      return filteredState
    },
    removeAllQuestions: () => {
      return []
    },
    editQuestion: (state, action) => {
      let question = state.find((item) => item.id === action.payload.id)
      if (question) {
        question = Object.assign(question, {
          ...action.payload,
          updatedAt: new Date(),
        })
      }
      return state
    },
  },
})

export const {
  addQuestion,
  removeQuestion,
  removeAllQuestions,
  editQuestion,
} = questionStore.actions

export default questionStore.reducer
