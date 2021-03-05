import React from 'react'
import { render, screen } from '@testing-library/react'
import ListQuestion from './ListQuestion'

import { initialState } from '../store'

import userEvent from '@testing-library/user-event'

describe('ListQuestion', () => {
  const mockQuestionEdit = jest.fn()
  const mockRemoveQuestion = jest.fn()
  const button = { name: initialState[0].question }

  beforeEach(() => {
    render(
      <ListQuestion
        questions={initialState}
        changeQuestion={mockQuestionEdit}
        removeQuestion={mockRemoveQuestion}
      />
    )
  })

  it('should render question', () => {
    expect(screen.getByRole('button', button)).toBeInTheDocument()
  })

  it('should render answer', () => {
    expect(screen.getByText(initialState[0].answer)).toBeInTheDocument()
    expect(screen.getByTestId('value-hidden')).toBeInTheDocument()
  })

  it('should trigger removeQuestion after click', () => {
    userEvent.click(screen.getByTestId('remove-question'))
    expect(mockRemoveQuestion).toHaveBeenCalled()
  })

  it('should trigger changeQuestion after click', () => {
    userEvent.click(screen.getByTestId('edit-question'))
    expect(mockRemoveQuestion).toHaveBeenCalled()
  })
})
