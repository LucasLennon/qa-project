import styled, { css } from 'styled-components'

const AccordionContainer = styled('div')``

const AccordionHeader = styled('button')`
  border: initial;
  background: initial;
  cursor: pointer;
`

const AccordionValueVisible = css`
  height: 100%;
  max-height: ${(props) => props.maxHeight}px;
`

const AccordionValue = styled('p')`
  height: 0%;
  max-height: 0;
  overflow: hidden;
  transition: all 300ms ease-in-out;
  ${(props) => props.isVisible && AccordionValueVisible}
`

export { AccordionContainer, AccordionHeader, AccordionValue }
