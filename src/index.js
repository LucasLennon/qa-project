import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './questions-module/page'
import store from './common/store'

import { ThemeProvider } from 'styled-components'

import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
