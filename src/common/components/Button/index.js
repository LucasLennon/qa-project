import { bool, func, string } from 'prop-types'
import { useState } from 'react'

import ButtonStyle from './index.style'

const Button = ({ children, loading, ...props }) => {
  return (
    <ButtonStyle {...props}>{loading ? 'Loading...' : children}</ButtonStyle>
  )
}

Button.defaultProps = {
  disable: false,
  loading: false,
  onClick: () => {},
}

Button.propTypes = {
  children: string.isRequired,
  disable: bool,
  loading: bool,
  onClick: func,
}

export default Button
