import React from 'react'
import { render, screen } from '@testing-library/react'
import Accordion from './index'

import userEvent from '@testing-library/user-event'

describe('Accordion', () => {
  const button = { name: 'Test Question?' }

  beforeEach(() => {
    render(
      <Accordion header={button.name} value="Yes this is the test question." />
    )
  })

  it('should render the value as hidden', () => {
    expect(screen.getByTestId('value-hidden')).toBeInTheDocument()
  })

  it('should render the value as visible after clicking the header', () => {
    userEvent.click(screen.getByRole('button', button))
    expect(screen.getByTestId('value-visible')).toBeInTheDocument()
  })

  it('should render the value as hidden after two clicks on the header', () => {
    userEvent.click(screen.getByRole('button', button))
    expect(screen.getByTestId('value-visible')).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', button))
    expect(screen.getByTestId('value-hidden')).toBeInTheDocument()
  })
})
