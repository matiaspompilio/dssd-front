import React from 'react'
import { Switch } from 'react-router-dom'

import AppContainer from 'src/containers/App'
// import HomePage from 'src/containers/Home'
import Interview from 'src/containers/Interview'
import { PropsRoute } from 'src/components/PropsRoute'

const AppRoutes = (props) => (
  <AppContainer {...props}>
    <Switch>
      <PropsRoute path='/interview' component={Interview} {...props} />
      {/* <PropsRoute path='/' component={HomePage} {...props} /> */}
    </Switch>
  </AppContainer>
)

export default AppRoutes
