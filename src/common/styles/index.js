import styled, { keyframes } from 'styled-components'
import { Loop } from '@material-ui/icons'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const LoadingIcon = styled(Loop)`
  animation: ${rotate} 2s linear infinite;
`

export { LoadingIcon }
