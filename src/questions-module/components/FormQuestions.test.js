import React from 'react'
import { render, screen } from '@testing-library/react'
import FormQuestions from './FormQuestions'

import { initialState } from '../store'

import userEvent from '@testing-library/user-event'

describe('FormQuestions', () => {
  const mockHandleSubmit = jest.fn()
  const mockQuestionEdit = jest.fn()
  const mockRemoveAllQuestions = jest.fn()
  const button = { name: initialState[0].question }

  it('should trigger removeAllQuestions after click', () => {
    render(
      <FormQuestions
        questionToEdit={initialState[0]}
        handleSubmit={mockHandleSubmit}
        changeQuestion={mockQuestionEdit}
        removeAllQuestions={mockRemoveAllQuestions}
      />
    )
    userEvent.click(
      screen.getByRole('button', { name: 'Remove all questions' })
    )
    expect(mockRemoveAllQuestions).toHaveBeenCalled()
  })

  it('should trigger handleSubmit to create after click', () => {
    render(
      <FormQuestions
        handleSubmit={mockHandleSubmit}
        changeQuestion={mockQuestionEdit}
        removeAllQuestions={mockRemoveAllQuestions}
      />
    )
    userEvent.click(screen.getByRole('button', { name: 'Create Question' }))
    expect(mockHandleSubmit).toHaveBeenCalled()
  })

  it('should trigger handleSubmit to edit after click', () => {
    render(
      <FormQuestions
        questionToEdit={initialState[0]}
        handleSubmit={mockHandleSubmit}
        changeQuestion={mockQuestionEdit}
        removeAllQuestions={mockRemoveAllQuestions}
      />
    )
    userEvent.click(screen.getByRole('button', { name: 'Edit Question' }))
    expect(mockHandleSubmit).toHaveBeenCalled()
  })
})
