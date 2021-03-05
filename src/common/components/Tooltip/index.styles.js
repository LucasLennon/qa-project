import styled, { css } from 'styled-components'

const Container = styled('div')`
  position: relative;
`

const whenVisible = (props) => {
  return (
    props.isVisible &&
    css`
      opacity: 1;
      max-height: ${props.maxHeight}px;
      z-index: 30;
    `
  )
}

const Wrapper = styled('div')`
  background: rgba(0, 0, 0, 0.85);
  border-radius: 0.2rem;
  color: #fff;
  bottom: 0px;
  max-height: 0;
  right: -20px;
  padding: 0.3rem;
  position: absolute;
  transform: translate(0, 100%);
  transition: all 300ms;
  opacity: 0;
  z-index: -5;

  ${whenVisible}
`

export { Container, Wrapper }
