import { string } from 'prop-types'
import React, { useRef, useState } from 'react'

import {
  AccordionContainer,
  AccordionHeader,
  AccordionValue,
} from './index.style.js'

const Accordion = ({ header, value }) => {
  const AccordionValueRef = useRef(0)
  const [isVisible, setIsVisible] = useState(false)

  const handleClickOnHeader = () => setIsVisible(!isVisible)

  return (
    <AccordionContainer>
      <AccordionHeader onClick={handleClickOnHeader}>{header}</AccordionHeader>
      <AccordionValue
        data-testid={isVisible ? 'value-visible' : 'value-hidden'}
        ref={AccordionValueRef}
        isVisible={isVisible}
        maxHeight={AccordionValueRef.current.scrollHeight}
      >
        {value}
      </AccordionValue>
    </AccordionContainer>
  )
}

Accordion.propTypes = {
  header: string.isRequired,
  value: string.isRequired,
}

export default Accordion
