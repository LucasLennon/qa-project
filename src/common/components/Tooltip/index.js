import { Typography } from '@material-ui/core'
import { node, string } from 'prop-types'
import React, { useState, useRef } from 'react'

import { Container, Wrapper } from './index.styles'

function Tooltip({ children, content }) {
  const [isVisible, setIsVisible] = useState(false)
  const WrapperContent = useRef(0)
  return (
    <Container
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <Wrapper
        data-testid={
          isVisible ? 'tooltip-value-visible' : 'tooltip-value-hidden'
        }
        ref={WrapperContent}
        isVisible={isVisible}
        maxHeight={WrapperContent.current.scrollHeight}
      >
        <Typography fontWeight="bold">{content}</Typography>
      </Wrapper>
      {children}
    </Container>
  )
}

Tooltip.propTypes = {
  children: node.isRequired,
  content: string.isRequired,
}

export default Tooltip
