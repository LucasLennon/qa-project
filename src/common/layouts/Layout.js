import { node } from 'prop-types'

import { Container, Holder } from './index.style'

const Layout = ({ children }) => {
  return (
    <Container>
      <Holder>{children}</Holder>
    </Container>
  )
}

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout
