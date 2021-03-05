import styled from 'styled-components'
import { colorVariations } from '../styles/helpers'
import { Flex } from '../styles'

const Container = styled('div')`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`

const Holder = styled(Flex)`
  border: 2px solid ${colorVariations.grey};
  border-radius: 0.3rem;
  padding: 1rem;
  min-width: 80%;
  min-height: 700px;
`

export { Container, Holder }
