import styled, { css } from 'styled-components'

const AccordionContainer = styled('div')`
  border: 1px solid lightgrey;
`

const AccordionHeader = styled('button')`
  border: initial;
  background: initial;
  cursor: pointer;
  outline: initial;
  padding: 0.5rem;
`

const AccordionValueVisible = css`
  height: 100%;
  max-height: ${(props) => props.maxHeight + 10}px;
  padding: 0.5rem;
`

const AccordionWrapper = styled('div')`
  height: 0%;
  margin: 0;
  max-height: 0;
  padding: 0 0.5rem;
  overflow: hidden;
  transition: all 300ms ease-in-out;
  ${(props) => props.isVisible && AccordionValueVisible}
`

export { AccordionContainer, AccordionHeader, AccordionWrapper }
