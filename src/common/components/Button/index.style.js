import styled from 'styled-components'

import { colors, colorVariations, spacing } from '../../styles/helpers'

const ButtonStyle = styled('button').attrs((props) => ({
  bgColor: props.bgColor || 'primary',
  color: props.color || '#fff',
  p: props.p || '0.4rem',
}))`
  border: 2px solid ${({ bgColor }) => colorVariations[bgColor]};
  background: initial;
  cursor: pointer;
  transition: all 300ms;

  &:active {
    border: 2px solid ${colorVariations.primary};
    background: initial;
    color: #000;
  }

  ${colors}
  ${spacing}
`

export default ButtonStyle
