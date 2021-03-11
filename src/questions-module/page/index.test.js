import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { createStore, combineReducers } from 'redux'
import configureMockStore from 'redux-mock-store'
import QuestionsPage from './'
import questions, { initialState } from '../store'
import userEvent from '@testing-library/user-event'
import thunk from 'redux-thunk'

import { configureStore } from '@reduxjs/toolkit'

import realStore from '../../common/store'

const mockStore = configureMockStore([thunk])

import { Provider } from 'react-redux'

describe('Q/A Page', () => {
  let store
  beforeEach(() => {
    store = configureStore({
      reducer: {
        questions,
      },
    })
  })
  it('should start with a first question already on screen', () => {
    render(
      <Provider store={realStore}>
        <QuestionsPage></QuestionsPage>
      </Provider>
    )

    expect(
      screen.getByRole('button', { name: 'How to add a question?' })
    ).toBeInTheDocument()
  })

  it('should remove question if clicked on remove button', () => {
    render(
      <Provider store={realStore}>
        <QuestionsPage></QuestionsPage>
      </Provider>
    )

    userEvent.click(screen.getByTestId('remove-question'))

    expect(
      screen.queryByRole('button', { name: 'How to add a question?' })
    ).not.toBeInTheDocument()
  })

  it('should add questions when there is question and answer filled', () => {
    render(
      <Provider store={realStore}>
        <QuestionsPage></QuestionsPage>
      </Provider>
    )

    userEvent.type(
      screen.queryAllByRole('textbox')[0],
      'Should I create a new question while testing?'
    )
    userEvent.type(screen.queryAllByRole('textbox')[1], 'Anything is possible')
    userEvent.click(screen.getByRole('button', { name: 'Create Question' }))

    expect(
      screen.getByRole('button', {
        name: 'Should I create a new question while testing?',
      })
    ).toBeInTheDocument()
    expect(screen.getByText('Anything is possible')).toBeInTheDocument()

    userEvent.type(screen.queryAllByRole('textbox')[0], 'Can I create more?')
    userEvent.type(screen.queryAllByRole('textbox')[1], 'Yes')
    userEvent.click(screen.getByRole('button', { name: 'Create Question' }))

    expect(
      screen.getByRole('button', {
        name: 'Can I create more?',
      })
    ).toBeInTheDocument()
    expect(screen.getByText('Yes')).toBeInTheDocument()
  })

  it('should sort alphabetically when requested', () => {
    const { container } = render(
      <Provider store={realStore}>
        <QuestionsPage></QuestionsPage>
      </Provider>
    )

    userEvent.click(screen.getByRole('button', { name: 'Sort Questions' }))

    const buttons = container.querySelectorAll(
      '[data-testid="accordion-button"]'
    )

    expect(buttons[0]).toHaveTextContent('Can I create more?')
    expect(buttons[1]).toHaveTextContent(
      'Should I create a new question while testing?'
    )
  })

  it('should edit question when there is being edited', () => {
    render(
      <Provider store={realStore}>
        <QuestionsPage></QuestionsPage>
      </Provider>
    )
    userEvent.click(screen.getAllByTestId('edit-question')[0])

    userEvent.type(
      screen.queryAllByRole('textbox')[0],
      '{selectall}{backspace}Can I edit here?'
    )
    userEvent.type(
      screen.queryAllByRole('textbox')[1],
      '{selectall}{backspace}Yes you can'
    )
    userEvent.click(screen.getByRole('button', { name: 'Edit Question' }))

    expect(
      screen.getByRole('button', {
        name: 'Can I edit here?',
      })
    ).toBeInTheDocument()
    expect(screen.getByText('Yes you can')).toBeInTheDocument()
  })

  it('should remove all question when requested', () => {
    render(
      <Provider store={realStore}>
        <QuestionsPage></QuestionsPage>
      </Provider>
    )

    userEvent.click(
      screen.getByRole('button', { name: 'Remove all questions' })
    )

    expect(
      screen.queryByRole('button', {
        name: 'Can I edit here?',
      })
    ).not.toBeInTheDocument()
    expect(screen.queryByText('Yes you can')).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', {
        name: 'Can I create more?',
      })
    ).not.toBeInTheDocument()
    expect(screen.queryByText('Yes')).not.toBeInTheDocument()
  })
})
