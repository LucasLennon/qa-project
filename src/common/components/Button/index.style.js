import styled from 'styled-components'

import { Button } from '@material-ui/core'

const ButtonStyle = styled(Button).attrs((props) => ({
  ...props,
  variant: props.variant || 'contained',
  color: props.color || 'primary',
}))``

export default ButtonStyle
