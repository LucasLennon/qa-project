import configureMockStore from 'redux-mock-store'
import reducer, { initialState, addQuestion } from './'
import {
  ADD_QUESTION,
  REMOVE_ALL_QUESTIONS,
  REMOVE_QUESTION,
  EDIT_QUESTION,
} from './constants'

const middlewares = []
const mockStore = configureMockStore(middlewares)

describe('Questions Store', () => {
  const store = mockStore({ questions: initialState })

  beforeEach(() => {
    store.clearActions()
  })

  test('should have initial state', () => {
    expect(store.getState()).toEqual({ questions: initialState })
  })

  test('should on action to addQuestion add the new question with createdAt and updatedAt', () => {
    const action = {
      type: ADD_QUESTION,
      payload: {
        question: 'New questions have been added?',
        answer: `Yes, here's one as you can see!`,
      },
    }

    store.dispatch(action)
    expect(store.getActions()).toEqual([action])
    expect(reducer(initialState, action)).toHaveLength(2)
  })

  test('should prevent adding payloads without question or answer', () => {
    const action = {
      type: ADD_QUESTION,
      payload: {
        question: 'New questions have been added?',
      },
    }
    store.dispatch(action)
    expect(store.getActions()).toEqual([action])
    expect(reducer(initialState, action)).toHaveLength(1)
  })

  test('should on action to removeQuestion filter the current question from the state', () => {
    const action = {
      type: REMOVE_QUESTION,
      payload: {
        id: 1,
      },
    }

    store.dispatch(action)
    expect(store.getActions()).toEqual([action])
    expect(reducer(initialState, action)).toHaveLength(0)
  })

  test('should on action to removeAllQuestions clear the state', () => {
    const localInitialStore = [
      ...initialState,
      {
        id: 2,
        question: `I'll be deleted?`,
        answer: 'Yes.',
      },
    ]

    const localStore = mockStore({
      questions: localInitialStore,
    })

    const action = {
      type: REMOVE_ALL_QUESTIONS,
    }

    localStore.dispatch(action)
    expect(localStore.getActions()).toEqual([action])
    expect(reducer(localInitialStore, action)).toHaveLength(0)
  })

  test('should on action to editQuestion change the question based on the id', () => {
    const action = {
      type: EDIT_QUESTION,
      payload: {
        ...initialState[0],
        question: 'I can edit questions?',
        answer: 'You can even edit questions, and answers!',
      },
    }

    store.dispatch(action)
    expect(store.getActions()).toEqual([action])
    expect(reducer(initialState, action)).toHaveLength(1)
    expect(reducer(initialState, action)[0].question).toBe(
      action.payload.question
    )
    expect(reducer(initialState, action)[0].answer).toBe(action.payload.answer)
  })
})
