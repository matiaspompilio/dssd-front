import React, { Component } from 'react'
import {
  Menu,
  Segment,
  Grid,
  Header,
  Icon
} from 'semantic-ui-react'
import Form from 'src/components/Appointment'
import { formValueSelector } from 'redux-form'
import { connect } from 'react-redux'

class AppointmentContainer extends Component {
  // componentDidMount() {
  //   const {
  //     actions: {
  //       getAppointmentState,
  //     }
  //   } = this.props
  //   getAppointmentState()
  // }
  render() {
    return (
      <>
        <Menu pointing secondary>
          <Menu.Item
            color='teal'
            name='Solicitud'
            disabled
          />
          <Menu.Item
            color='red'
            name='Entrevista'
            active
          />
        </Menu>
        <Grid>
          <Grid.Column width='100'>
            <Header as='h2' icon textAlign='center'>
              <Icon name='blogger' circular />
              <Header.Content>Entrevista</Header.Content>
            </Header>
            <Segment color='red' attached='bottom' size='small'>
              <Form />
            </Segment>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}

function mapStateToProps(state) {
  const selector = formValueSelector('appointment')

  return {
    appointment: {
      ...state.appointment,
      comment: selector(state, 'comment'),
    }
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators({
//       ...interviewActions
//     }, dispatch)
//   }
// }

export default connect(
  mapStateToProps,
  null
)(AppointmentContainer)
