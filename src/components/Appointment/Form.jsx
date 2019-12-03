import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  Input,
  Form,
  Button,
  Grid,
  Card,
  List,
  Label
  // Image,
  // Icon,
} from 'semantic-ui-react'
// import DatePicker from 'src/components/DatePicker'
import Dropdown from 'src/components/Dropdown'
// import TextInput from 'src/components/TextInput'
import { required } from 'src/lib/validations/form'
// import { moment } from 'moment-timezone'

const statesTranslate = {
  UNINITIATED: 'Sin iniciar',
  INITIATED_IN_TERM: 'Iniciado en término',
  INITIATED_WITH_DELAY: 'Iniciado con delay',
  SUSPENDED: 'Suspendido',
  COMPLETED_IN_TERM: 'Completado en término',
  COMPLETED_WITH_DELAY: 'Completado con delay',
  INTERRUPTED_BY_TECHNICAL_PROBLEM: 'Interrumpido por problema técnico',
  INTERRUPTED_BY_INMATE_BEHAVIOUR: 'Interrumpido por comportamiento del interno',
  CANCELLED: 'Cancelado'
}


class AppointmentForm extends Component {
  render() {
    const {
      current,
      handleSubmit,
      onSubmit,
      valid
    } = this.props

    const stateOptions = current.possibleStates.map((item, key) => ({
      key,
      text: statesTranslate[item] ? statesTranslate[item] : item,
      value: item
    }))
    return (
      <>
        <br />
        <Grid textAlign='center'>
          <Card>
            <Card.Content>
              <Card.Header>Videollamada actual</Card.Header>
              <br />
              <List.Item>
                <Label color='green' horizontal>
                  Solicitante
                </Label>
                {current.applicant}
              </List.Item>
              <br />
              <List.Item>
                <Label color='green' horizontal>
                  Localizacion
                </Label>
                {current.location}
              </List.Item>
              <br />
              <List.Item>
                <Label color='green' horizontal>
                  Fecha
                </Label>
                {current.date}
              </List.Item>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Estado actual
                </Button>
                <Button basic color='red'>
                  {statesTranslate[current.state] ? statesTranslate[current.state] : current.state}
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Grid>
        <Form>
          {/* <Image src={src1} size='medium' centered /> */}
          <Form.Field required>
            <label>Estado siguiente</label>
            <Field
              name='state'
              placeholder='Seleccione el siguiente estado'
              component={Dropdown}
              validate={[required]}
              fluid
              search
              selection
              options={stateOptions}
            />
          </Form.Field>
          <Form.Field
            required
          >
            <label>Descripcion</label>
            <Field
              name='description'
              required
              validate={[required]}
              component={Input}
              placeholder='Ingrese un comentario'
            />
          </Form.Field>
          <Grid textAlign='center'>
            <Grid.Row>
              <Form.Field
                type='submit'
              >
                <Button
                  type='submit'
                  disabled={!valid}
                  onClick={handleSubmit(onSubmit)}
                >
                  Aceptar
                </Button>
              </Form.Field>
            </Grid.Row>
          </Grid>
        </Form>
      </>
    )
  }
}


export default reduxForm({
  form: 'appointment'
})(AppointmentForm)
