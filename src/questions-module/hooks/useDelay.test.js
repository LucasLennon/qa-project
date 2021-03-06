import React from 'react'
import { render, screen, waitFor, act } from '@testing-library/react'

import userEvent from '@testing-library/user-event'

import UseDelayExample from './useDelayExample'

describe('useDelay', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  test('should enter loading after click', async () => {
    render(<UseDelayExample />)
    userEvent.click(screen.getByRole('button'))
    expect(await screen.findByText('Is loading: true')).toBeInTheDocument()
  })

  test('should exit loading after 5s', async () => {
    render(<UseDelayExample />)
    userEvent.click(screen.getByRole('button'))
    act(() => {
      jest.advanceTimersByTime(5000)
    })
    expect(await screen.findByText('Is loading: false')).toBeInTheDocument()
    // expect(await screen.findByText('Is loading: false')).toBeInTheDocument()
    // expect(await screen.findByText('Is loading: true')).toBeInTheDocument()
  })
})
