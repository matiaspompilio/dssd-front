import React, { Component } from 'react'
import {
  Menu,
  Segment,
  Grid,
  Header,
  Icon
} from 'semantic-ui-react'
import * as appointmentActions from 'src/actions/appointment'
import Form from 'src/components/Appointment'
import { formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class AppointmentContainer extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const {
      actions: {
        getAppointment,
      },
      match: {
        params: {
          id,
        }
      }
    } = this.props
    getAppointment(id)
  }

  handleSubmit(values) {
    const {
      actions: {
        setAppointmentState,
        getAppointment,
      },
      match: {
        params: {
          id,
        }
      }
    } = this.props
    setAppointmentState(id, values).then(() => getAppointment(id))
  }

  render() {
    const {
      appointment: {
        currentAppointment: {
          data
        }
      }
    } = this.props
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
              <Icon name='group' circular />
              <Header.Content>Entrevista</Header.Content>
            </Header>
            <Segment color='red' attached='bottom' size='small'>
              <Form
                onSubmit={this.handleSubmit}
                current={data}
              />
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...appointmentActions
    }, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentContainer)
