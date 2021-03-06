import React from 'react'
import { render, screen } from '@testing-library/react'

import userEvent from '@testing-library/user-event'

import UseDelayExample from './useDelayExample'

jest.useFakeTimers()

describe('useDelay', () => {
  test('should enter loading after click', async () => {
    render(<UseDelayExample />)
    userEvent.click(screen.getByRole('button'))
    expect(screen.getByText('Is loading: true')).toBeInTheDocument()
  })
  test('should exit loading after 5s', () => {
    render(<UseDelayExample />)
    userEvent.click(screen.getByRole('button'))
    expect(screen.getByText('Is loading: true')).toBeInTheDocument()
    jest.runAllTimers()
    expect(screen.getByText('Is loading: false')).toBeInTheDocument()
  })
})
