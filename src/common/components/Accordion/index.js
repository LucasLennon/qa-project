import { node, string } from 'prop-types'
import React, { useRef, useState } from 'react'

import { Box, Typography } from '@material-ui/core'
import {
  AccordionContainer,
  AccordionHeader,
  AccordionWrapper,
} from './index.style.js'

const Accordion = ({ header, value, children }) => {
  const AccordionValueRef = useRef(0)
  const [isVisible, setIsVisible] = useState(false)

  const handleClickOnHeader = () => setIsVisible(!isVisible)

  return (
    <AccordionContainer>
      <Box display="flex" justifyContent="space-between">
        <AccordionHeader
          data-testid="accordion-button"
          onClick={handleClickOnHeader}
        >
          {header}
        </AccordionHeader>
        {children}
      </Box>
      <AccordionWrapper
        data-testid={
          isVisible ? 'accordion-value-visible' : 'accordion-value-hidden'
        }
        ref={AccordionValueRef}
        isVisible={isVisible}
        maxHeight={AccordionValueRef.current.scrollHeight}
      >
        <Typography>{value}</Typography>
      </AccordionWrapper>
    </AccordionContainer>
  )
}

Accordion.propTypes = {
  children: node,
  header: string.isRequired,
  value: string.isRequired,
}

export default Accordion
