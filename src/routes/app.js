import React from 'react'
import { Switch } from 'react-router-dom'

import AppContainer from 'src/containers/App'
import Interview from 'src/containers/Interview'
import Appointment from 'src/containers/Appointment'
import { PropsRoute } from 'src/components/PropsRoute'

const AppRoutes = (props) => (
  <AppContainer {...props}>
    <Switch>
      <PropsRoute path='/interview' component={Interview} {...props} />
      <PropsRoute path='/appointment' component={Appointment} {...props} />
    </Switch>
  </AppContainer>
)

export default AppRoutes
