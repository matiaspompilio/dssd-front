import React, { Component } from 'react'
import Form from 'src/components/Interview'
import * as interviewActions from 'src/actions/interview'
import {
  Menu,
  Segment,
  Grid,
  Header,
  Icon
} from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import moment from 'moment-timezone'
import queryString from 'query-string'

class InterviewContainer extends Component {
  constructor(props) {
    super(props)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  componentDidMount() {
    const {
      actions: {
        getAllLocations,
        getAllUsers
      },
    } = this.props
    getAllLocations()
    getAllUsers()
  }

  onSubmitHandler(values) {
    const {
      actions: {
        addInterview,
        getRecommendations
      },
      interview: {
        locationId,
        date: dateForm,
        range: rangeForm,
        recoSelected,
        participants: participantsForm,
      },
      location: {
        search
      }
    } = this.props

    const taskId = search ? queryString.parse(search).id : null
    const participants = participantsForm ? participantsForm.join(',') : null
    const parsedReco = recoSelected ? JSON.parse(recoSelected) : null
    const location = parsedReco ? parsedReco.locationId : locationId
    const date = parsedReco ? moment(parsedReco.date, 'DD-MM-YYYY').toDate() : dateForm
    const range = parsedReco ? parsedReco.range : rangeForm
    addInterview({
      ...values,
      taskId,
      participants,
      locationId: location,
      date,
      range
    }).then(() => getRecommendations({ locationId: location, date, range }))
  }

  render() {
    const {
      interview: {
        form: {
          confirm,
        },
        locations,
        recommendations,
        users,
        recoSelected
      }
    } = this.props

    return (
      <>
        <Menu pointing secondary>
          <Menu.Item
            color='teal'
            name='Solicitud'
            active
          />
          <Menu.Item
            color='red'
            name='Entrevista'
            disabled
          />
        </Menu>
        <Grid>
          <Grid.Column width='100'>
            <Header as='h2' icon textAlign='center'>
              <Icon name='handshake outline' circular />
              <Header.Content>Solicitud de entrevista</Header.Content>
            </Header>
            <Segment color='teal' attached='bottom' size='small'>
              <Form
                recommendations={recommendations}
                confirm={confirm}
                locations={locations}
                users={users}
                onSubmit={this.onSubmitHandler}
                recoSelected={recoSelected}
              />
            </Segment>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}

function mapStateToProps(state) {
  const selector = formValueSelector('interview')

  return {
    interview: {
      ...state.interview,
      locationId: selector(state, 'locationId'),
      range: selector(state, 'range'),
      date: selector(state, 'date'),
      applicant: selector(state, 'applicant'),
      participants: selector(state, 'participants'),
      recoSelected: selector(state, 'recoSelected'),
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...interviewActions
    }, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InterviewContainer)
