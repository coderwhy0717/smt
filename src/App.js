import React, { memo } from 'react'
import { Provider } from 'react-redux'
import store from './store'

import WYHome from './pages/home'

export default memo(function App() {
  return (
    <Provider store={store}>
      <WYHome />
    </Provider>
  )
})

