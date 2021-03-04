import styled from 'styled-components'

const Container = styled('div')`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`

const Holder = styled('div')`
  border: 2px solid lightgrey;
  border-radius: 0.3rem;
  padding: 1rem;
  min-width: 80%;
`

export { Container, Holder }
