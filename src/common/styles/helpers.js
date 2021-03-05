import { css } from 'styled-components'

const flexHelpers = (props) => {
  const { flexDirection, flexWrap, flexGrow, justifyContent } = props
  // return css({
  //   'flex-direction': flexDirection,
  //   'flex-wrap': flexWrap,
  //   'flex-grow': flexGrow,
  //   'justify-content': justifyContent,
  // })
  return css`
    flex-direction: ${({ flexDirection }) => flexDirection};
    flex-wrap: ${({ flexWrap }) => flexWrap};
    flex-grow: ${({ flexGrow }) => flexGrow};
    justify-content: ${({ justifyContent }) => justifyContent};
  `
}

const colorVariations = {
  primary: 'rgb(14, 121, 178)',
  success: 'rgb(56, 119, 128)',
  warning: 'rgb(229, 149, 0)',
  error: 'rgb(220, 24, 57)',
  grey: 'rgb(136, 136, 170)',
}

const colors = (props) => {
  const { bgColor, color } = props
  return css`
    ${bgColor && `background: ${colorVariations[bgColor]};`}
    ${color && `color: ${color};`}
  `
}

const responsive = (size, style) => {
  return `
    @media(max-width: ${size}) {
      ${style}
    }
  `
}

const spacing = (props) => {
  const { m, my, mx, ml, mr, p, py, px } = props
  return css`
    ${m && `margin: ${m};`}
    ${my && `margin: ${my} 0;`}
    ${mx && `margin: 0 ${mx};`}
    ${ml && `margin-left:${ml};`}
    ${mr && `margin-right:${mr};`}
  
    ${p && `padding: ${p};`}
    ${py && `padding: ${py} 0;`}
    ${px && `padding: 0 ${px};`}
  `
}

export { colors, colorVariations, flexHelpers, spacing, responsive }
