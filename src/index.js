import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './questions-module/page'
import store from './common/store'
import GlobalStyle from './common/styles/GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
)
