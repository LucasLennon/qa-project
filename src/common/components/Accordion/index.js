import { node, string } from 'prop-types'
import React, { useRef, useState } from 'react'

import { Flex } from '../../styles'
import {
  AccordionContainer,
  AccordionHeader,
  AccordionValue,
} from './index.style.js'

const Accordion = ({ header, value, children }) => {
  const AccordionValueRef = useRef(0)
  const [isVisible, setIsVisible] = useState(false)

  const handleClickOnHeader = () => setIsVisible(!isVisible)

  return (
    <AccordionContainer>
      <Flex justifyContent="space-between">
        <AccordionHeader onClick={handleClickOnHeader}>
          {header}
        </AccordionHeader>
        {children}
      </Flex>
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
  children: node,
  header: string.isRequired,
  value: string.isRequired,
}

export default Accordion
