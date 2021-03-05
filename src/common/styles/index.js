import styled, { css } from 'styled-components'

import { flexHelpers, spacing } from './helpers'

const Flex = styled('div')`
  display: flex;

  ${flexHelpers}
  ${spacing}
`

const Box = styled('div')`
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  ${flexHelpers}
  ${spacing}
`

export { Flex, Box }
