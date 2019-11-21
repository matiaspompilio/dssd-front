import React, { Component } from 'react'
import Form from 'src/components/Interview'
import * as interviewActions from 'src/actions/interview'
import { Menu, Segment, Grid } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'

class InterviewContainer extends Component {
  constructor(props) {
    super(props)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  componentDidMount() {
    const {
      actions: {
        getAllLocations,
      },

    } = this.props
    getAllLocations()
  }

  onSubmitHandler(values) {
    const {
      actions: {
        addInterview,
        getRecommendations
      },
      interview: {
        locationId,
        date,
        range,
      }
    } = this.props
    addInterview(values).then(() => getRecommendations({ locationId, date, range }))
  }

  render() {
    const {
      interview: {
        form: {
          confirm,
        },
        locations,
        recommendations
      }
    } = this.props

    return (
      <>
        <Menu pointing secondary>
          <Menu.Item
            color='teal'
            name='Entrevista'
            active
          />
        </Menu>
        <Grid columns='2' textAlign='center'>
          <Grid.Column width='50'>
            <Segment color='teal' attached='bottom' size='small'>
              <Form
                recommendations={recommendations}
                confirm={confirm}
                locations={locations}
                onSubmit={this.onSubmitHandler}
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
